import { apiClient } from "@/utils/apiClient";

export async function getAllPosts(query: string) {
    const res = await apiClient.get(`/posts${query}`)
    return res
}
export async function getPost(id: string) {
    const res = await apiClient.get(`/posts/${id}`)
    return res
}
export async function getPostComments(id: string) {
    const res = await apiClient.get(`/posts/${id}/comments`)
    return res
}