import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route render={() => <Profile/>} path='/Profile'/>
                    <Route render={() => <DialogsContainer/>} path='/Dialogs/'/>
                    <Route component={News} path='/News'/>
                    <Route component={Music} path='/Music'/>
                    <Route component={Settings} path='/Settings'/>
                    <Route render={()=><UsersContainer/>} path='/users'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
