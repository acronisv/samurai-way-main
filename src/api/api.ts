import axios from "axios";

// export const getUsers = (currentPage: number, pageSize: number) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     }).then(response => response.data)
// }
//
// export const unfollowUser = (userId: number) => {
//     return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
//         withCredentials: true,
//         headers: {
//             'API-KEY': 'b22c94b5-30c9-4097-866c-dbf1930efb27'
//         }
//     }).then(response => response.data)
// }
//
// export const followUser = (userId: number) => {
//     return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
//         withCredentials: true,
//         headers: {
//             'API-KEY': 'b22c94b5-30c9-4097-866c-dbf1930efb27'
//         }
//     }).then(response => response.data)
// }
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
        return instance.get(this.url + `users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(this.url + `follow/${userId}`).then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(this.url + `follow/${userId}`).then(response => response.data)
    }
}