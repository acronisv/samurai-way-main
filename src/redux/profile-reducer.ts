import {ActionsType, ADD_POST, PostsType, ProfilePageType, UPDATE_NEW_POST_TEXT} from "./store";

const initialState = {
    posts: [
        {id: 1, message: 'First post', likes: 10},
        {id: 2, message: 'Second post', likes: 12}
    ],
    newPostText: 'Enter post text'
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likes: 0
            }
            console.log(state)
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
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