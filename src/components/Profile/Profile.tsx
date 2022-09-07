import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <main className={s.main}>
            <div><img src="src/components/Profile/Profile" alt="avatar"/></div>
            <div>avatar desc</div>
            <MyPosts/>
        </main>
    )
}