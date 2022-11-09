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
}

export type MessagesPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
}

export const state: StateType = {
    profilePage: {
        posts:[
            {id: 1, message: 'First post', likes: 10},
            {id: 2, message: 'Second post', likes: 12}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 1, message: 'What\'s up?'},
            {id: 1, message: 'Damn good'},
        ],
        dialogs: [
            {id: 1, name: 'Walter'},
            {id: 2, name: 'John'},
            {id: 3, name: 'Jorge'},
            {id: 4, name: 'Pete'}
        ]
    }
}

export const addPost = (postMessage:string) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: postMessage,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
}