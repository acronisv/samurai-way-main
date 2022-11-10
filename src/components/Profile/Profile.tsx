import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPostCallback: (postMessage: string) => void
    updateNewPostTextCallback: (newText: string) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPostCallback={props.addPostCallback}
                     updateNewPostTextCallback={props.updateNewPostTextCallback}
                     newPostText={props.state.newPostText}
            />
        </main>
    )
}