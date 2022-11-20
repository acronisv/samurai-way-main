import {combineReducers, createStore, Store} from "redux";
import {AddPostAC, ProfileReducer, UpdateNewPostTextAC} from "./profile-reducer";
import {AddMessageAC, DialogsReducer, UpdateNewMessageTextAC} from "./dialogs-reducer";

//export type RootState = typeof rootReducer
export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = Store<AppStateType, ActionsType>

export type ActionsType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateNewMessageTextAC>

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

export let store = createStore(rootReducer)