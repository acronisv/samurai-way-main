let renderEntireTree = () => {
    console.log('state changed')
}

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

export const state: StateType = {
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
}

export const addPost = (postMessage: string) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: postMessage,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree()
}

export const addMessage = (newMessageText: string) => {
    const newMessage = {
        id: new Date().getTime(),
        message: newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    renderEntireTree()
}

export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText
    renderEntireTree()
}

export const subscribe = (observer: ()=>void) => {
    renderEntireTree = observer
}