import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    const posts = [
        {id: 1, message: 'First post', likes: 10},
        {id: 2, message: 'Second post', likes: 12}
    ]
    const postsElements = posts.map((el) => (<Post message={el.message} likes={el.likes}/>))
    return (
        <div>
            <textarea name="" id=""></textarea>
            <button>Add post</button>
            <div>My posts</div>
            {postsElements}
        </div>
    );
};
