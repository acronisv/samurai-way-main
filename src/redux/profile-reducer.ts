import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type PostsType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
    status: string
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
const SET_STATUS = 'SET_STATUS'

const initialState = {
    posts: [
        {id: 1, message: 'First post', likes: 10},
        {id: 2, message: 'Second post', likes: 12}
    ],
    newPostText: 'Enter post text',
    profile: null,
    status: ""
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
        case SET_STATUS: {
            return {...state, status: action.status}
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

export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status
}) as const

export const getStatusTC = (userId:string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatusTC = (status:string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export const getProfileTC = (userId:string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}