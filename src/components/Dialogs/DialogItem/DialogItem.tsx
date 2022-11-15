import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/store";

export const Dialog = (props: DialogsType) => {
    return (
        <div className={s.dialogsItem + ' ' + s.dialogsItemActive}>
            <img className={s.dialogsImg} src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt="avatar"/>
            <NavLink to={`/Dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};