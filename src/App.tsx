import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                        <Route component={Profile} path='/Profile'/>
                        <Route component={Dialogs} path='/Dialogs/'/>
                        <Route component={News} path='/News'/>
                        <Route component={Music} path='/Music'/>
                        <Route component={Settings} path='/Settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
