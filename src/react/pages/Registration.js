import React from "react";
import { Menu } from "../components";
import { RegistrationForm } from "../components";

class Registration extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <div id="regContainer">
          <div id="rightForm">
            <RegistrationForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Registration;
