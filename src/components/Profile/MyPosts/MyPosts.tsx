import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {DispatchPropsType, PostsType} from "../../../redux/state";



type MyPostsPropsType = {
    posts: Array<PostsType>
    dispatch: (AC:DispatchPropsType) => void
    newPostText: string
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map((el) => (<Post key={el.id} message={el.message} likes={el.likes}/>))

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch({type: 'ADD_POST', text: newPostElement.current?.value})
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch({type:'UPDATE_NEW_POST_TEXT', text: newPostElement.current?.value})
        }
    }

    return (
        <div className={s.postsWrap}>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}></textarea>
            <button onClick={addPost}>Add post</button>
            <div>My posts</div>
            {postsElements}
        </div>
    );
};
