import {AddMessageAC, DialogsPageStateType, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

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
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)