import React from 'react';
import {UsersPageStateType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";

type UsersPropsType = {
    users: Array<UsersPageStateType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPageStateType>) => void
}
export const UsersOld = (props: UsersPropsType) => {

    const defaultPhotoUrl = 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(u =>
                <div className={s.users_wrap} key={u.id}>
                    <div>
                        <img className={s.user_avatar} src={u.photos.small != null ? u.photos.small : defaultPhotoUrl}
                             alt="avatar"/>
                        <span>{u.name}</span>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}

                    </div>
                    <div>
                        <div>{u.status}</div>
                    </div>

                </div>)
            }
        </div>
    );
};