import { apiClient } from "@/utils/apiClient";

export async function getAllUsers() {
    const res = await apiClient.get('/users')
    return res
}