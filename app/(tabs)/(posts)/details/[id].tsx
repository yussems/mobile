import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getPost, getPostComments } from '@/services/posts';
import PostComments from './sections/PostComments';

export default function PostDetail() {
    const { id } = useLocalSearchParams();

    const postDetailQuery = useQuery({
        queryKey: ['posts-detail'],
        queryFn: () => getPost(String(id))
    })



    return (
        <View style={{ marginTop: 20 }}>
            <View>
                <Text>{postDetailQuery?.data?.data?.title}</Text>
            </View>
            <View>
                <Text>{postDetailQuery?.data?.data?.body}</Text>
            </View>
            <PostComments />

        </View>
    )
}

const styles = StyleSheet.create({})