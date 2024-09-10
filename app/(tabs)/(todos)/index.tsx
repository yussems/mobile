import { getAllTodos } from "@/services/todos";
import Filter from "@/shared/Filter";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { FlatList, View } from "react-native";
import TodosList from "./components/TodosList";
import { ITodo } from "@/types/Todos";
import { Text } from "react-native-paper";
import Loading from "@/shared/Loading";

export default function Index() {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => getAllTodos({ query: pageParam }),


    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length > 0) {
        return allPages.length + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  const todos = data?.pages.flatMap((page) => page) || [];

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return (
    <View>
      <Filter />
      {
        isLoading && <Loading />

      }
      <FlatList<ITodo>
        data={todos}
        renderItem={({ item }) => <TodosList {...item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        ListFooterComponent={isFetchingNextPage ? <Text>Loading more...</Text> : null}

        ItemSeparatorComponent={() => <View style={{ height: 13 }} />}
        contentContainerStyle={{ paddingBottom: 150 }}


      />
    </View>
  );
}
