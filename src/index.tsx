import React from 'react';
import './index.css';

import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {StoreContext} from "./StoreContext";

const renderEntireTree = () => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App store={store}/>
        </StoreContext.Provider>,
        document.getElementById('root')
    );
}

renderEntireTree()

store.subscribe(renderEntireTree)
