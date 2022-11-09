import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from "./redux/state";


export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App state={state} addPostCallback={addPost}/>,
        document.getElementById('root')
    );
}
