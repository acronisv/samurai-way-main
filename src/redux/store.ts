import {AddPostAC, ProfileReducer, UpdateNewPostTextAC} from "./profile-reducer";
import {AddMessageAC, DialogsReducer, UpdateNewMessageTextAC} from "./dialogs-reducer";

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id?: number
    message: string
}

export type PostsType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type MessagesPageType = {
    messages: Array<MessagesType>
    newMessageText: string
    dialogs: Array<DialogsType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateNewMessageTextAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'First post', likes: 10},
                {id: 2, message: 'Second post', likes: 12}
            ],
            newPostText: 'Enter post text'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 1, message: 'What\'s up?'},
                {id: 1, message: 'Damn good'},
            ],
            newMessageText: 'Enter text',
            dialogs: [
                {id: 1, name: 'Walter'},
                {id: 2, name: 'John'},
                {id: 3, name: 'Jorge'},
                {id: 4, name: 'Pete'}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}
