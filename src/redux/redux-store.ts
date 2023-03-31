import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {AddPostAC, ProfileReducer, setStatus, setUserProfile} from "./profile-reducer";
import {AddMessageAC, DialogsReducer} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching, unfollow,
    UsersReducer
} from "./users-reducer";
import {AuthReducer, setAuthUserData} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

//export type RootState = typeof rootReducer
export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = Store<AppStateType, ActionsType>

export type ActionsType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store