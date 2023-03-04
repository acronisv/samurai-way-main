import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route render={() => <ProfileContainer/>} path='/Profile/:userId?'/>
                    <Route render={() => <DialogsContainer/>} path='/Dialogs/'/>
                    <Route component={News} path='/News'/>
                    <Route component={Music} path='/Music'/>
                    <Route component={Settings} path='/Settings'/>
                    <Route render={()=><UsersContainer/>} path='/users'/>
                    <Route render={()=><Login/>} path='/login'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
