import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../redux/state";

type DialogsPropsType = {
    state: MessagesPageType
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
    const dialogsElements = props.state.dialogs.map((el) => <Dialog name={el.name} id={el.id}/>)
    const messagesElements = props.state.messages.map((el) => (<Message message={el.message}/>))
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
