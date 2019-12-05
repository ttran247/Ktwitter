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
            <UserCard username={this.props.match.params.username} />
            <div id="featureContainer">
              <ProfileFeed username={this.props.match.params.username} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default userIsAuthenticated(Profile);
