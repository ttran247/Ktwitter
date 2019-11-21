import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <h2>Profile</h2>
        <div id="container">
          <Menu isAuthenticated={this.props.isAuthenticated} />
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
