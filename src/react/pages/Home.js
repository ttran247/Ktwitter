import React from "react";
import { Menu, NewMessageEntry, MessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <h2 className="home">Home</h2>
        <div id="container">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <div id="column">
          <NewMessageEntry />
          <MessageList />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Home);
