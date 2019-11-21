import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";
import {UserCard} from "../components"
// import "./Profile.css";


class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Menu isAuthenticated={this.props.isAuthenticated} />
      
          <UserCard/>
         
      </React.Fragment>
    );
  }
}

export default userIsAuthenticated(Profile);

