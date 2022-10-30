import React from 'react';
import s from './Dialogs.module.css'

type DialogsPropsType = {

}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogsItem+ ' ' + s.dialogsItemActive}>
                    Walter
                </div>
                <div className={s.dialogsItem}>
                    John
                </div>
                <div className={s.dialogsItem}>
                    Jorge
                </div>
                <div className={s.dialogsItem}>
                    Pete
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
