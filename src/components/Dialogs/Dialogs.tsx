import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageStateType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageStateType
    addMessage: (text: string) => void
    updateMessageText: (text: string) => void
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map((el) => <Dialog key={el.id} name={el.name} id={el.id}/>)
    const messagesElements = props.dialogsPage.messages.map((el) => (<Message key={el.id} message={el.message}/>))

    const newMessageRef = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (newMessageRef.current?.value) {
            props.addMessage(newMessageRef.current.value)
        }
    }
    const onMessageChange = () => {
        if (newMessageRef.current?.value) {
            props.updateMessageText(newMessageRef.current.value)
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea
                    onChange={onMessageChange}
                    value={props.dialogsPage.newMessageText}
                    ref={newMessageRef}
                    className={s.messages_textArea}></textarea>
                <button onClick={addMessage} className={s.messages_button}>Add message</button>
            </div>
        </div>
    );
};
