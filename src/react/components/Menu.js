import React from "react";
import { Link } from ".";
import "./Menu.css";
import { withAsyncAction } from "../HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        <img src={"./logo/Kenzielogo.png"} alt="" />
        {this.props.isAuthenticated ? (
          <div id="menu-links">
            <Link to="/home/:username">
              {" "}
              <i className="fas fa-home " alt=""></i> Home
            </Link>
            <Link to="/profile/:username">
              <i className="fas fa-user-circle" alt=""></i>Profile
            </Link>
            <Link to="/" onClick={this.handleLogout}>
              <i className="fas fa-door-closed" alt=""></i> Logout
            </Link>
          </div>
        ) : (
          <div id="menu-links">
            <Link to="/">Login</Link>
            <Link to="/register">Sign Up!</Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
