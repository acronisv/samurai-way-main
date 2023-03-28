import {AddMessageAC, DialogsPageStateType, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

type MapStateToPropsType = {
    dialogsPage: DialogsPageStateType
}

type MapDispatchToPropsType = {
    updateMessageText: (text: string) => void
    addMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateMessageText: (text: string) => {
            dispatch(UpdateNewMessageTextAC(text))
        },
        addMessage: (text: string) => {
            dispatch(AddMessageAC(text))
        }
    }
}

//
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)