import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

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