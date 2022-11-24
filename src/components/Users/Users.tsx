import React from 'react';
import s from "./Users.module.css";
import axios from "axios";
import {UsersPageStateType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UsersPageStateType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPageStateType>) => void
}

class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map(u =>
                    <div className={s.users_wrap} key={u.id}>
                        <div>
                            <img className={s.user_avatar}
                                 src={u.photos.small != null ? u.photos.small : 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'}
                                 alt="avatar"/>
                            <span>{u.name}</span>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>
                        <div>
                            <div>{u.status}</div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;