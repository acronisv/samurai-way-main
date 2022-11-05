import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";

type ProfilePropsType = {
    posts: Array<PostsType>
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </main>
    )
}