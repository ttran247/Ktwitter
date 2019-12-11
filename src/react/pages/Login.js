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
              <Icon
                name="users"
                style={{ color: "var(--kenzieGreen)" }}
                size="big"
              />{" "}
              <br />
              Hear what people are talking about
            </div>
            <div id="graphic">
              <Icon
                name="comments"
                style={{ color: "var(--kenzieGreen)" }}
                size="big"
              />{" "}
              <br />
              Join the conversation
            </div>
            <div id="graphic">
              <Icon
                name="thumbs up"
                style={{ color: "var(--kenzieGreen)" }}
                size="big"
              />{" "}
              <br />
              Express your opinion
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default userIsNotAuthenticated(Login);
