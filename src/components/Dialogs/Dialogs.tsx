import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsPropsType = {}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogsItem + ' ' + s.dialogsItemActive}>
                    <NavLink to='/Dialogs/1'>Walter</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/Dialogs/2'>John</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/Dialogs/3'>Jorge</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/Dialogs/4'>Pete</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>What's up?</div>
                <div className={s.message}>Damn good</div>
            </div>
        </div>
    );
};
