import Filter from "@/shared/Filter";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import PostCards from "./components/PostCards";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/services/posts";
import { IPost } from "@/types/posts";
import { useMemo, useState } from "react";
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
    queryFn: ({ pageParam = 1 }) => getAllPosts({ query: pageParam }),


    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length > 0) {
        return allPages.length + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  const posts = data?.pages?.flatMap((page) => page) || [];

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView>
      <View >
        <Filter />

        {
          isLoading ? <Loading /> :
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
                ListFooterComponent={isFetchingNextPage ? <Text>Loading more...</Text> : null}
                contentContainerStyle={{ paddingBottom: 150 }}


              />
            </View>
        }
      </View>
    </SafeAreaView>
  );
}
