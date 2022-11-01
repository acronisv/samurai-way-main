import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type MessagePropsType = {
    message: string
}

type DialogPropsType = {
    name: string
    id: number
}

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

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.dialogsItem + ' ' + s.dialogsItemActive}>
            <NavLink to={`/Dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

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
