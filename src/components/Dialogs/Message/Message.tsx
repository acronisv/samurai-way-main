import React, {FC} from 'react';
import s from './Message.module.css';
import {MessagesType} from "../../../redux/dialogs-reducer";


export const Message: FC<MessagesType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
