import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likes: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post_wrap}>
            <div className={s.post_item}>{props.message}</div>
            <span>Likes {props.likes}</span>
        </div>
    );
};
