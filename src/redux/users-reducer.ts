import {ActionsType} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS ='SET_USERS'

export type UsersPageStateType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UsersLocationType
}
type UsersLocationType = {
    city: string
    country: string
}

const initialState = {
    users: [
        {id: 1, photoUrl:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png', followed:false, fullName: 'Igor', status: 'Chill', location: {city: 'Msk', country: 'Russia'}},
        {id: 2, photoUrl:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png', followed:true, fullName: 'Walter', status: 'Chill', location: {city: 'Albuquerque', country: 'USA'}},
        {id: 3, photoUrl:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png', followed:true, fullName: 'Danny', status: 'Busy', location: {city: 'Tokyo', country: 'Japan'}},
        {id: 4, photoUrl:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',  followed:false, fullName: 'John', status: 'Hard working', location: {city: 'Brisbane', country: 'Australia'}}
    ]

}

export const UsersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id===action.userId ? {...u, followed: true}: u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id===action.userId ? {...u, followed: false}: u)}
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