import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPostCallback: (postMessage:string)=>void
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map((el) => (<Post message={el.message} likes={el.likes}/>))

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current?.value)
        }
        alert(newPostElement.current?.value)
    }

    return (
        <div className={s.postsWrap}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>
            <div>My posts</div>
            {postsElements}
        </div>
    );
};
