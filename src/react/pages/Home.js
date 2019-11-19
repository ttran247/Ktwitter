import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Home</h2>
      </>
    );
  }
}

export default userIsAuthenticated(Home);
