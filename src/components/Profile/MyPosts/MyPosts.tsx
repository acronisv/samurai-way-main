import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../index";

type MyPostsPropsType = {
    posts: Array<PostsType>
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map((el) => (<Post message={el.message} likes={el.likes}/>))
    return (
        <div>
            <textarea name="" id=""></textarea>
            <button>Add post</button>
            <div>My posts</div>
            {postsElements}
        </div>
    );
};
