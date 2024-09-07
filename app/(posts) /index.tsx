import Filter from "@/shared/Filter";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import PostCards from "./components/PostCards";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/services/posts";
import { IPost } from "@/types/posts";

export default function Index() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts
  })
  return (
    <SafeAreaView>
      <View >
        <Filter />
        <View
          style={{ marginVertical: 20, }}
        >
          <FlatList<IPost>
            data={postsQuery?.data?.data}
            renderItem={({ item }) => <PostCards {...item} />}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
