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
import {DialogsType, MessagesType, PostsType} from "./index";

type AppPropsType = {
    posts: Array<PostsType>
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

const App: FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                        <Route render={()=><Profile posts={props.posts}/>} path='/Profile'/>
                        {/*<Route component={Dialogs} path='/Dialogs/'/>*/}
                        <Route render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>} path='/Dialogs/'/>
                        <Route component={News} path='/News'/>
                        <Route component={Music} path='/Music'/>
                        <Route component={Settings} path='/Settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
