import React from "react";
import { withAsyncAction, connect } from "../HOCs"
// import { Card, Image, Popup, Dropdown } from "semantic-ui-react";
// import { Button } from "semantic-ui-react";
// import "./UserCard.css";
// import { fakeUser } from "../../mockUserData";
// import { DeleteUserButton } from ".";

class DeleteUserButton extends React.Component {
    handleDeleteUser = event => {
     const confirmed = windows.confirm("Are you sure you want to delete your account?");
    if (confirmed) {
        this.props.deleteUser();
    };
    render() {
        return (
            this.props.username === this.props.loggedInUsername && (
        <button onClick={this.handleDeleteUser}>Delete Your Account</button>;
        )
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedInUsername: state.auth.login.result.username
    };
};

export default connect(mapStateToProps)(
    withAsyncAction("users", "deleteUser")(DeleteUserButton)
);

