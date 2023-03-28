import React, {FC} from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    status: string
    profile: ProfileType
    updateStatus: (user:string)=>void
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.main}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </main>
    )
}