import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageStateType} from "../../redux/dialogs-reducer";
import AddMessageForm from "./AddMessageForm";

type DialogsPropsType = {
    dialogsPage: DialogsPageStateType
    addMessage: (text: string) => void
    updateMessageText: (text: string) => void
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map((el, i) => <Dialog key={i} name={el.name} id={el.id}/>)
    const messagesElements = props.dialogsPage.messages.map((el, i) => (<Message key={i} message={el.message}/>))


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm  addMessage={props.addMessage}/>
            </div>
        </div>
    );
};
