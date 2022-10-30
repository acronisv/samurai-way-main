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
                <Dialog name={'Walter'} id={1}/>
                <Dialog name={'John'} id={2}/>
                <Dialog name={'Jorge'} id={3}/>
                <Dialog name={'Pete'} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'What\'s up?'}/>
                <Message message={'Damn good'}/>
            </div>
        </div>
    );
};
