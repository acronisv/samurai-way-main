import React from 'react';
import {UsersPageStateType} from "../../redux/users-reducer";
import s from './Users.module.css'

type UsersPropsType = {
    users: Array<UsersPageStateType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPageStateType>) => void
}
export const Users = (props: UsersPropsType) => {
    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {id: 1, photoUrl:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png', followed:false, fullName: 'Igor', status: 'Chill', location: {city: 'Msk', country: 'Russia'}},
    //         {id: 2, photoUrl:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png', followed:true, fullName: 'Walter', status: 'Chill', location: {city: 'Albuquerque', country: 'USA'}},
    //         {id: 3, photoUrl:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png', followed:true, fullName: 'Danny', status: 'Busy', location: {city: 'Tokyo', country: 'Japan'}},
    //         {id: 4, photoUrl:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',  followed:false, fullName: 'John', status: 'Hard working', location: {city: 'Brisbane', country: 'Australia'}}
    //     ])
    // }

    return (
        <div>
            {props.users.map(u =>
                <div className={s.users_wrap} key={u.id}>
                    <div>
                        <img className={s.user_avatar} src={u.photoUrl} alt="avatar"/>
                        <span>{u.fullName}</span>
                        {u.followed
                            ? <button onClick={()=>props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={()=>props.follow(u.id)}>Follow</button>}

                    </div>
                    <div>
                        <div>{u.status}</div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>

                </div>)
            }
        </div>
    );
};