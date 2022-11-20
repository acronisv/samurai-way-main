import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: (text: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map((el) => (<Post key={el.id} message={el.message} likes={el.likes}/>))

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current?.value)
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current?.value)
        }
    }

    return (
        <div className={s.postsWrap}>
            <textarea className={s.postsTextArea}
                      onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}></textarea>
            <button className={s.postsButton}
                    onClick={onAddPost}>Add post
            </button>
            <h3>My posts</h3>
            {postsElements}
        </div>
    );
};
