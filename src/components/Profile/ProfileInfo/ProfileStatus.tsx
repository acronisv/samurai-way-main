import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (user:string)=>void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState(
            {
                editMode: true
            }
        )
    }

    deactivateEditMode() {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }

    onStatusChane(e:ChangeEvent<HTMLInputElement>) {
       this.setState({
           status: e.currentTarget.value
       })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status!==this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <div onBlur={() => {
                        this.deactivateEditMode()
                    }}>
                        <input onChange={(e)=>{this.onStatusChane(e)}} value={this.state.status}></input>
                    </div>
                    :
                    <div onDoubleClick={() => {
                        this.activateEditMode()
                    }}>
                        <span>{this.props.status || '---'}</span>
                    </div>}
            </>
        );
    }

}

export default ProfileStatus;