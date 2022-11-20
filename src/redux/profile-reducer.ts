import {ActionsType} from "./redux-store";

export type PostsType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageStateType = {
    posts: Array<PostsType>
    newPostText: string
}

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
    posts: [
        {id: 1, message: 'First post', likes: 10},
        {id: 2, message: 'Second post', likes: 12}
    ],
    newPostText: 'Enter post text'
}

export const ProfileReducer = (state: ProfilePageStateType = initialState, action: ActionsType): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
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