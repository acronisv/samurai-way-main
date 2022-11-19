import React, {FC} from 'react';
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";

type MyPostsContainerPropsType = {
    // store: StoreType
}

export const MyPostsContainer: FC<MyPostsContainerPropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                const addPost = (text: string) => {
                    store.dispatch(AddPostAC(text))
                }

                const onPostChange = (text: string) => {
                    store.dispatch(UpdateNewPostTextAC(text))
                }
                return (<MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}/>)
            }
            }
        </StoreContext.Consumer>
    );
};
