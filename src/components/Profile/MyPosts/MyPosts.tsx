import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <textarea name="" id=""></textarea>
            <button>Add post</button>
            <div>My posts</div>
            <Post message={'First post'} likes={10}/>
            <Post message={'Second post'} likes={12}/>
        </div>
    );
};
