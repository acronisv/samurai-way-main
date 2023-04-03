import React from 'react';
import s from "./Dialogs.module.css";
import TextField from '@mui/material/TextField';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import {addMessageFormValidation} from "../../utils/validators/validation";

type AddMessageFormPropsType = {
    addMessage: (text:string) => void
}

type MessageForm = {
    MessageText: string
}
const AddMessageForm = (props: AddMessageFormPropsType) => {
    const {handleSubmit, reset, control, formState: {errors}} = useForm<MessageForm>({});

    const onSubmit: SubmitHandler<MessageForm> = (data) => {
        props.addMessage(data.MessageText)
        reset()
    }
    return (
        <div>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                render={({field}) => (
                    <TextField
                        {...field}
                        placeholder="Enter message"
                        multiline
                        rows={2}
                        error={!!errors.MessageText}
                        sx={{"margin-bottom": '20px'}}
                    />)}
                rules={addMessageFormValidation}
                name="MessageText"
                control={control}
                defaultValue=""
            />
                {errors.MessageText && <span>{errors.MessageText.message}</span>}
            <Button type="submit" variant="contained" className={s.messages_button}>Add message</Button>
            </form>
        </div>
    );
};

export default AddMessageForm;