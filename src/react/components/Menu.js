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
          <Link to="/home/:username">
            <Icon name="home" color="teal" size="large" />
          </Link>
          {this.props.isAuthenticated ? (
            <>
              <Link to="/profile/:username">
                <Icon name="user" color="teal" size="large" />
              </Link>
              <Link to="/" onClick={this.handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <div id="menu-links">
              <Link to="/">Login</Link>
              <Link to="/register">Sign Up!</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
