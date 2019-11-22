import React from "react";
import { Menu, NewMessageEntry, MessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <h2>Home</h2>
        <div id="container">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <NewMessageEntry />
          <MessageList />
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Home);
