import {ActionsType, ADD_MESSAGE, MessagesPageType, UPDATE_NEW_MESSAGE_TEXT} from "./store";

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

export const DialogsReducer = (state: MessagesPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: new Date().getTime(),
                message: action.newMessageText
            }
            state.messages.push(newMessage)
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
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