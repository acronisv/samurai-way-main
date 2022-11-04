import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const dialogs = [
    {id: 1, name: 'Walter'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Jorge'},
    {id: 4, name: 'Pete'}
]

const messages = [
    {id: 1, message: 'Hello'},
    {id: 1, message: 'What\'s up?'},
    {id: 1, message: 'Damn good'},
]

const dialogsElements = dialogs.map((el) => <Dialog name={el.name} id={el.id}/>)
const messagesElements = messages.map((el) => (<Message message={el.message}/>))

export const Dialogs = () => {
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
