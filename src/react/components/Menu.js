import React from "react";
import { Link } from ".";
import "./Menu.css";
import { withAsyncAction } from "../HOCs";
import { Icon } from "semantic-ui-react";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        <div id="logo" />
        <div id="menu-links">
          {this.props.isAuthenticated ? (
            <>
              <Link to="/home/:username">
                <Icon name="home" color="teal" size="large" />
                <br />
                Home
              </Link>
              <Link to="/profile/:username">
                <Icon name="user" color="teal" size="large" />
                <br />
                My Profile
              </Link>
              <Link to="/" onClick={this.handleLogout}>
                <Icon name="arrow left" color="teal" size="large" />
                <br />
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <Icon name="edit" color="teal" size="large" />
                <br />
                Log In
              </Link>
              <Link to="/register">
                <Icon name="paper plane" color="teal" size="large" />
                <br />
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
