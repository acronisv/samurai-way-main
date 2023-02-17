import {ActionsType} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA'

type initialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
}) as const
