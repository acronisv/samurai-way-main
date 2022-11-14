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
import {ActionsType, StateType} from "./redux/state";

type AppPropsType = {
    state: StateType,
    dispatch: (action: ActionsType) => void
}

const App: FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route render={() => <Profile state={props.state.profilePage}
                                                  dispatch={props.dispatch}
                    />} path='/Profile'/>
                    <Route render={() => <Dialogs state={props.state.dialogsPage}
                                                  dispatch={props.dispatch}
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
