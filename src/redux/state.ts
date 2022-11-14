const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

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
        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likes: 0
            }
            console.log(this._state)
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: new Date().getTime(),
                message: action.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        }
    }
}

export const AddPostAC = (postMessage: string) => ({
    type: ADD_POST,
    postMessage: postMessage
}) as const

export const UpdateNewPostTextAC = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const

export const AddMessageAC = (newMessageText: string) => ({
    type: ADD_MESSAGE,
    newMessageText: newMessageText
}) as const

export const UpdateNewMessageTextAC = (newText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText
}) as const
