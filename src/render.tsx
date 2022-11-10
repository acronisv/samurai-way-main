import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, StateType, updateNewMessageText, updateNewPostText} from "./redux/state";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state}
             addPostCallback={addPost}
             updateNewPostTextCallback={updateNewPostText}
             addMessageCallback={addMessage}
             updateNewMessageTextCallback={updateNewMessageText}/>,
        document.getElementById('root')
    );
}
