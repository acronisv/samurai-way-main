import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

type ProfileInfoPropsType = {
    status: string
    profile: ProfileType
    updateStatus: (user:string)=>void
}

export const ProfileInfo: FC<ProfileInfoPropsType> = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileWrap}>
            <div><img className={s.profileImage} src={props.profile.photos.large} alt="avatar"/></div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>{props.profile.aboutMe}</div>
            <div>Github: {props.profile.contacts.github}</div>
            <div>Twitter: {props.profile.contacts.twitter}</div>
            <div>Website: {props.profile.contacts.website}</div>
        </div>
    );
};
