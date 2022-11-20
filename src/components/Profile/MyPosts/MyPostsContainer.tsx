import {AddPostAC, ProfilePageStateType, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapDispatchToPropsType = {
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): ProfilePageStateType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(AddPostAC(text))
        },
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextAC(text))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)