import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':'dfab80e5-b5bc-4328-b3e0-c5aa77ee4981'
    }
})

export const usersAPI = {
     getUsers (currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
            )
    }
}