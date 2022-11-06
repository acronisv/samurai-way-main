import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

const App: FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    {/*Исправать пропсы на глобальные для каждой страницы */}
                        <Route render={()=><Profile state={props.state.profilePage}/>} path='/Profile'/>
                        <Route render={()=><Dialogs state={props.state.dialogsPage}/>} path='/Dialogs/'/>
                        <Route component={News} path='/News'/>
                        <Route component={Music} path='/Music'/>
                        <Route component={Settings} path='/Settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
