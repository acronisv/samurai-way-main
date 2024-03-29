import React from 'react';
import s from "./Users.module.css";
import {UsersPageStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: Array<UsersPageStateType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (page: number) => void
    followingInProgress: []
    followUser: (userId: number)=>void
    unfollowUser: (userId: number)=>void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((el, i) => {
                    return <span onClick={() => {
                        props.onPageChanged(el)
                    }} className={props.currentPage === el ? s.selected_page : ''} key={i}>{el}</span>
                })}
            </div>
            {props.users.map(u =>
                <div className={s.users_wrap} key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.user_avatar}
                                 src={u.photos.small != null ? u.photos.small : 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'}
                                 alt="avatar"/>
                        </NavLink>

                        <span>{u.name}</span>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollowUser(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followUser(u.id)
                            }}>Follow</button>}
                    </div>
                    <div>
                        <div>{u.status}</div>
                    </div>
                </div>)
            }
        </div>
    );
};