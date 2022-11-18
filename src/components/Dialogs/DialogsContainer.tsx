import React, {FC} from 'react';
import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer: FC<DialogsContainerPropsType> = (props) => {
    let state = props.store.getState()

    const addMessage = (text: string) => {
        props.store.dispatch(AddMessageAC(text))
    }
    const updateMessageText = (text: string) => {
        props.store.dispatch(UpdateNewMessageTextAC(text))
    }
    return (
        <Dialogs dialogsPage={state.dialogsPage} addMessage={addMessage} updateMessageText={updateMessageText}/>
    );
};
