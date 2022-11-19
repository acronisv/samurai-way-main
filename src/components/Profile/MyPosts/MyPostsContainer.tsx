import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionsType, StateType} from "../../../redux/store";

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
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