import React, {FC} from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.main}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </main>
    )
}