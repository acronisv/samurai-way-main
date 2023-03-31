import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import AddPostForm from "./AddPostForm";

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: (text: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map((el) => (<Post key={el.id} message={el.message} likes={el.likes}/>))

    return (
        <div className={s.postsWrap}>
            <AddPostForm addPost={props.addPost}/>
            <h3>My posts</h3>
            {postsElements}
        </div>
    );
};
