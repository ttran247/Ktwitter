import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";
import {CardExampleCard} from "../components";
import {FeedExampleContentDate} from "../components"
import {ProfileNav} from "../components"

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Menu isAuthenticated={this.props.isAuthenticated} />
      
          <CardExampleCard/>
          <ProfileNav/>
          <FeedExampleContentDate/>
      </React.Fragment>
    );
  }
}

export default userIsAuthenticated(Profile);

