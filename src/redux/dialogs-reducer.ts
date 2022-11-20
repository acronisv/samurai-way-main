import {ActionsType} from "./redux-store";

export type MessagesType = {
    id?: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageStateType = {
    messages: Array<MessagesType>
    newMessageText: string
    dialogs: Array<DialogsType>
}

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
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

export const DialogsReducer = (state: DialogsPageStateType = initialState, action: ActionsType): DialogsPageStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: new Date().getTime(),
                message: action.newMessageText
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}
export const AddMessageAC = (newMessageText: string) => ({
    type: ADD_MESSAGE,
    newMessageText: newMessageText
}) as const

export const UpdateNewMessageTextAC = (newText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText
}) as const