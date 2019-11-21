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
        <img src={"./logo/Kenzielogo.png"} />
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/home/:username"> <i class="fas fa-home "></i> Home</Link>
            <Link to="/profile/:username"><i class="fas fa-user-circle"></i>Profile</Link>
            <Link to="/" onClick={this.handleLogout}>
            <i class="fas fa-door-closed"></i> Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
