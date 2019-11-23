import React from "react";
import { LoginForm, Menu, PageHeader } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import { Icon } from "semantic-ui-react";
import "./Login.css";

class Login extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div id="loginContent">
          <PageHeader title="Kwitter" tagLine="Log In" />
          <div id="loginFormContainer">
            <LoginForm />
          </div>
          <div id="loginGraphics">
            <div id="graphic">
              <Icon name="users" color="teal" size="big" /> <br />
              Hear what people are talking about
            </div>
            <div id="graphic">
              <Icon name="comments" color="teal" size="big" /> <br />
              Join the conversation
            </div>
            <div id="graphic">
              <Icon name="thumbs up" color="teal" size="big" /> <br />
              Express your opinion
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default userIsNotAuthenticated(Login);
