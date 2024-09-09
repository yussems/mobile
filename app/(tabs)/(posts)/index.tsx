import Filter from "@/shared/Filter";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import PostCards from "./components/PostCards";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/services/posts";
import { IPost } from "@/types/posts";
import { useMemo, useState } from "react";
import Loading from "@/shared/Loading";

export default function Index() {
  const [nextPage, setNextPage] = useState(1)
  const query = useMemo(() => `?_page=${String(nextPage)}&_per_page=10`, [nextPage])

  const postsQuery = useQuery({
    queryKey: ['posts', query],
    queryFn: () => getAllPosts(query),
  })

  const posts = postsQuery?.data?.data
  const handleLoadMore = () => {
    setNextPage(nextPage + 1);
  };

  return (
    <SafeAreaView>
      <View >
        <Filter />

        {
          postsQuery.isLoading ? <Loading /> :
            <View
              style={{ marginVertical: 20, }}
            >
              <FlatList<IPost>
                data={posts}
                renderItem={({ item }) => <PostCards {...item} />}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                showsVerticalScrollIndicator={false}
                onEndReached={handleLoadMore}
                ListFooterComponent={postsQuery.isFetching ? <Text>Loading more...</Text> : null}

              />
            </View>
        }
      </View>
    </SafeAreaView>
  );
}
