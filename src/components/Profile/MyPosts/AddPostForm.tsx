import React from 'react';
import TextField from '@mui/material/TextField';
import s from './MyPosts.module.css'
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import Button from "@mui/material/Button";

type AddPostFormPropsType = {
    addPost: (text:string) => void
}

type PostForm = {
    PosText: string
}
const AddPostForm = (props: AddPostFormPropsType) => {
    const {handleSubmit, reset, control} = useForm<PostForm>({});

    const onSubmit: SubmitHandler<PostForm> = (data) => {
        props.addPost(data.PosText)
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
                        sx={{"margin-bottom": '20px'}}
                    />)}
                name="PosText"
                control={control}
                defaultValue=""
            />
            <Button type="submit" variant="contained" className={s.button}>Add message</Button>
            </form>
        </div>
    );
};

export default AddPostForm;