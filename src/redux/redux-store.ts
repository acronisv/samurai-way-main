import {combineReducers, createStore, Store} from "redux";
import {AddPostAC, ProfileReducer, setUserProfile, UpdateNewPostTextAC} from "./profile-reducer";
import {AddMessageAC, DialogsReducer, UpdateNewMessageTextAC} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, unfollow,
    UsersReducer
} from "./users-reducer";

//export type RootState = typeof rootReducer
export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = Store<AppStateType, ActionsType>

export type ActionsType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateNewMessageTextAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer
})

export let store = createStore(rootReducer)


// @ts-ignore
window.store = store