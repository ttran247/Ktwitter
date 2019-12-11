import React from "react";
import { Menu, PageHeader } from "../components";
import { RegistrationForm } from "../components";
import "./Registration.css";
import { userIsNotAuthenticated } from "../HOCs";

class Registration extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <div id="regContainer">
          <PageHeader title="Kwitter" tagLine="Register For A New Account" />
          <div id="regFormContainer">
            <RegistrationForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default userIsNotAuthenticated(Registration);
