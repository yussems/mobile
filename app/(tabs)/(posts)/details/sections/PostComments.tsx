import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CommentCard from '../components/CommentCard'
import { useQuery } from '@tanstack/react-query'
import { getPostComments } from '@/services/posts'
import { useLocalSearchParams } from 'expo-router'
import { IPostComment } from '@/types/posts'

export default function PostComments() {
    const { id } = useLocalSearchParams();

    const postDetailComment = useQuery({
        queryKey: ['posts-comments'],
        queryFn: () => getPostComments(String(id))
    })

    return (
        <View>
            <View style={{ marginVertical: 20 }}>
                <Text>Comments</Text>
            </View>
            <FlatList<IPostComment>
                data={postDetailComment?.data?.data}
                renderItem={({ item }) => <CommentCard {...item} />}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                contentContainerStyle={{ paddingBottom: 150 }}

            />
        </View>
    )
}