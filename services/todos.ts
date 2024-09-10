import { apiClient } from "@/utils/apiClient";

export async function getAllTodos({ query }: { query: number }) {
    const res = await apiClient.get('/todos', {
        params: {
            _page: query,
            _per_page: 10,
        },
    })
    return res.data
}