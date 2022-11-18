import {combineReducers, createStore, Store} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {ActionsType} from "./store";

export type RootState = typeof reducers
export type ReduxStateType = ReturnType<RootState>

export type StoreType = Store<ReduxStateType, ActionsType>

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

export let store = createStore(reducers)