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
                <div id="iconSpacer">
                  <Icon name="home" color="teal" size="large" />
                </div>
                Home
              </Link>
              <Link to="/profile/:username">
                <div id="iconSpacer">
                  <Icon name="user" color="teal" size="large" />
                </div>
                My Profile
              </Link>
              <Link to="/" onClick={this.handleLogout}>
                <div id="iconSpacer">
                  <Icon name="arrow left" color="teal" size="large" />
                </div>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <div id="iconSpacer">
                  <Icon name="edit" color="teal" size="large" />
                </div>
                Log In
              </Link>
              <Link to="/register">
                <div id="iconSpacer">
                  <Icon name="paper plane" color="teal" size="large" />
                </div>
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
