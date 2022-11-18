import React, {FC} from 'react';
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer: FC<MyPostsContainerPropsType> = (props) => {

    let state = props.store.getState()
    const addPost = (text: string) => {
        props.store.dispatch(AddPostAC(text))
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(UpdateNewPostTextAC(text))
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    );
};
