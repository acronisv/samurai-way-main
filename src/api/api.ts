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
    }

}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, remember:boolean) {
        return instance.post('auth/login', {email: email, password: password, remember: remember})
    },
    logout() {
        return instance.delete('auth/login')
    }
}