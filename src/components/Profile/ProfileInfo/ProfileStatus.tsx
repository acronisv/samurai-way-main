import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <div onBlur={() => {
                        this.deactivateEditMode()
                    }}>
                        <input value={this.props.status}></input>
                    </div>
                    :
                    <div onDoubleClick={() => {
                        this.activateEditMode()
                    }}>
                        <span>{this.props.status}</span>
                    </div>}
            </>
        );
    }

}

export default ProfileStatus;