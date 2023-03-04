import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b22c94b5-30c9-4097-866c-dbf1930efb27'
    }
})
export const usersAPI = {
    url: 'https://social-network.samuraijs.com/api/1.0/',
    config: {
        withCredentials: true,
        headers: {
            'API-KEY': 'b22c94b5-30c9-4097-866c-dbf1930efb27'
        }
    },
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}