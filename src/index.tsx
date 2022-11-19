import React from 'react';
import './index.css';

import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";

const renderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}

renderEntireTree()

store.subscribe(renderEntireTree)
