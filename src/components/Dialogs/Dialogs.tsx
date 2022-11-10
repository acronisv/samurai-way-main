import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../redux/state";

type DialogsPropsType = {
    state: MessagesPageType
    addMessageCallback: (newMessageText: string) => void
    updateNewMessageTextCallback: (newText: string) => void
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
    const dialogsElements = props.state.dialogs.map((el) => <Dialog name={el.name} id={el.id}/>)
    const messagesElements = props.state.messages.map((el) => (<Message message={el.message}/>))

    const newMessageRef = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (newMessageRef.current?.value) {
            props.addMessageCallback(newMessageRef.current.value)
        }
    }
    const onMessageChange = () => {
        if (newMessageRef.current?.value) {
            props.updateNewMessageTextCallback(newMessageRef.current.value)
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
                    value={props.state.newMessageText}
                    ref={newMessageRef}
                    className={s.messages_textArea}></textarea>
                <button onClick={addMessage} className={s.messages_button}>Add message</button>
            </div>
        </div>
    );
};
