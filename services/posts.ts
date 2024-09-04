import { apiClient } from "@/utils/apiClient";

export async function getAllPosts() {
    const res = await apiClient.get('/posts')
    return res
}