import {ActionsType} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UsersPageStateType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}
type initialStateType = {
    users: UsersPageStateType[]
}
const initialState: initialStateType = {
    users: []

}

export const UsersReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const setUsersAC = (users: Array<UsersPageStateType>) => ({
    type: SET_USERS,
    users
}) as const

export const followAC = (userId: number) => ({
    type: FOLLOW,
    userId
}) as const

export const unfollowAC = (userId: number) => ({
    type: UNFOLLOW,
    userId
}) as const