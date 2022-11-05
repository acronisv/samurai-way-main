import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    message: string
}

export type PostsType = {
    id: number
    message: string
    likes: number
}

const dialogs = [
    {id: 1, name: 'Walter'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Jorge'},
    {id: 4, name: 'Pete'}
]

const messages = [
    {id: 1, message: 'Hello'},
    {id: 1, message: 'What\'s up?'},
    {id: 1, message: 'Damn good'},
]

const posts = [
    {id: 1, message: 'First post', likes: 10},
    {id: 2, message: 'Second post', likes: 12}
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
  document.getElementById('root')
);