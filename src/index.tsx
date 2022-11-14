import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
             addPostCallback={store.addPost.bind(store)}
             updateNewPostTextCallback={store.updateNewPostText.bind(store)}
             addMessageCallback={store.addMessage.bind(store)}
             updateNewMessageTextCallback={store.updateNewMessageText.bind(store)}/>,
        document.getElementById('root')
    );
}

renderEntireTree()

store.subscribe(renderEntireTree)
