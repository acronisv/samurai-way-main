import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchPropsType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (AC: DispatchPropsType) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}
            />
        </main>
    )
}