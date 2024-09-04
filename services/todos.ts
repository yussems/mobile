import { apiClient } from "@/utils/apiClient";

export async function getAllTodos() {
    const res = await apiClient.get('/todos')
    return res
}