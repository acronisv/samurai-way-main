import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../index";

export const Dialog = (props: DialogsType) => {
    return (
        <div className={s.dialogsItem + ' ' + s.dialogsItemActive}>
            <NavLink to={`/Dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};