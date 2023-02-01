import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    ProfileType,
    setUserProfile,
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)