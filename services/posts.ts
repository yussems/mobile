import { apiClient } from "@/utils/apiClient";

export async function getAllPosts({ query }: { query: number }) {
    const res = await apiClient.get(`/posts`, {
        params: {
            _page: query,
            _per_page: 10,
        },
    });
    return res.data;
}
export async function getPost(id: string) {
    const res = await apiClient.get(`/posts/${id}`)
    return res
}
export async function getPostComments(id: string) {
    const res = await apiClient.get(`/posts/${id}/comments`)
    return res
}