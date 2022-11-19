import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, StateType} from "../../redux/store";

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
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