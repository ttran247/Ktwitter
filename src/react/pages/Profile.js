import React from "react";
import { Menu, PageHeader, UserCard, ProfileFeed } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div id="profileContainer">
          <PageHeader title="Profile" />
          <div id="mainContainer">
            <UserCard />
            <div id="featureContainer">
              <ProfileFeed />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default userIsAuthenticated(Profile);
