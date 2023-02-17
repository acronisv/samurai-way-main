import {ActionsType} from "./redux-store";

export type PostsType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
}

export type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook?: string | null
        github?: string | null
        instagram?: string | null
        mainLink?: string | null
        twitter?: string | null
        vk?: string | null
        website?: string | null
        youtube?: string | null
    }
    fullName: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    photos: {
        large: string
        small: string
    }
    userId: number | null
} | null

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
    posts: [
        {id: 1, message: 'First post', likes: 10},
        {id: 2, message: 'Second post', likes: 12}
    ],
    newPostText: 'Enter post text',
    profile: null
}

export const ProfileReducer = (state: ProfilePageStateType = initialState, action: ActionsType): ProfilePageStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state, posts: [...state.posts, {
                    id: new Date().getTime(),
                    message: action.postMessage,
                    likes: 0
                }]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
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

export const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile
}) as const