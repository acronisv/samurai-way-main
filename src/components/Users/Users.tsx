import React from 'react';
import s from "./Users.module.css";
import axios from "axios";
import {UsersPageStateType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UsersPageStateType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPageStateType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages = []
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(el=>{
                        return <span onClick={()=>{this.onPageChanged(el)}} className={this.props.currentPage === el ? s.selected_page : ''}>{el}</span>
                    })}
                </div>
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