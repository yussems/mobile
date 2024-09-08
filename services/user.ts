import { apiClient } from "@/utils/apiClient";

export async function getAllUsers() {
    const res = await apiClient.get('/users')
    return res
}

export async function getUser(id: string) {
    const res = await apiClient.get(`/users/${id}`)
    return res
}