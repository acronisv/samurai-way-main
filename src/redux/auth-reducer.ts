import {ActionsType, AppThunk} from "./redux-store";
import {authAPI} from "../api/api";

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
                ...state, ...action.data, isAuth: action.data.isAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
}) as const

export const getAuthTC = (): AppThunk =>
    async dispatch => {
        const result = await authAPI.me()
        if (result.data.resultCode === 0) {
            let {id, email, login} = result.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }


export const loginTC = (login: string, password: string, remember: boolean): AppThunk =>
    async dispatch => {
        const result = await authAPI.login(login, password, remember)
        if (result.data.resultCode === 0) {
            dispatch(getAuthTC())
        }
    }

// export const loginTC = (login: string, password: string, remember: boolean): AppThunk => {
//     return (dispatch) => {
//         authAPI.login(login, password, remember).then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(getAuthTC())
//             }
//         })
//     }
// }

export const logoutTC = (): AppThunk =>
    async dispatch => {
        const result = await authAPI.logout()
        if (result.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }

// export const logoutTC = (): AppThunk => {
//     return (dispatch) => {
//         authAPI.logout().then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthUserData(null, null, null, false))
//             }
//         })
//     }
// }