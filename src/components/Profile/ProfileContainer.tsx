import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getProfileTC, getStatusTC,
    ProfileType, updateStatusTC
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    status: string
    profile: ProfileType
    isAuth: boolean
    autorizedUserId: any
}
type MapDispatchToPropsType = {
    getProfileTC: (user:string)=>void
    getStatusTC: (user:string)=>void
    updateStatusTC: (user:string)=>void
}

type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
        }
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusTC}
            />
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    status: state.profilePage.status,
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    autorizedUserId: state.auth.userId
})
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {getProfileTC})(withUrlDataContainerComponent)

export default compose<React.ComponentType>(connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC}),withRouter, withAuthRedirect)(ProfileContainer)