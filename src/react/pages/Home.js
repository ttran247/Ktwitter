import React from "react";
import { Menu, NewMessageEntry, MessageList, PageHeader } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div id="homeContainer">
          <PageHeader title="Home" tagLine="Welcome back!" />
          <NewMessageEntry />
          <MessageList />
          </div>
        
      </>
    );
  }
}

export default userIsAuthenticated(Home);
