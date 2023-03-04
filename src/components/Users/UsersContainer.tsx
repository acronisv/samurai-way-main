import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followUserTC, getUsersTC,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowUserTC
} from "../../redux/users-reducer";
import {UsersPageStateType} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type mapStateToPropsType = {
    users: Array<UsersPageStateType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}

type UsersAPIPropsType = {
    users: Array<UsersPageStateType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: Array<UsersPageStateType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
    followingInProgress: []
    getUsersTC: (currentPage: number, pageSize: number)=>void
    followUserTC: (userId: number)=>void
    unfollowUserTC: (userId: number)=>void
}

class UsersContainer extends React.Component<UsersAPIPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   followUser={this.props.followUserTC}
                   unfollowUser={this.props.unfollowUserTC}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    getUsersTC,
    followUserTC,
    unfollowUserTC
})(UsersContainer)

