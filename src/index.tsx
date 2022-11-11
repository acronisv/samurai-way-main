import React from 'react';
import './index.css';
import {addMessage, addPost, state, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM.render(
        <App state={state}
             addPostCallback={addPost}
             updateNewPostTextCallback={updateNewPostText}
             addMessageCallback={addMessage}
             updateNewMessageTextCallback={updateNewMessageText}/>,
        document.getElementById('root')
    );
}

renderEntireTree()

subscribe(renderEntireTree)
