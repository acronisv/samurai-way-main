import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
     store: StoreType
}

const App: FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route render={() => <Profile/>} path='/Profile'/>
                    <Route render={() => <DialogsContainer store={props.store}
                    />} path='/Dialogs/'/>
                    <Route component={News} path='/News'/>
                    <Route component={Music} path='/Music'/>
                    <Route component={Settings} path='/Settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
