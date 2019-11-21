import React from "react";
import { LoginForm, Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./Login.css"
class Login extends React.Component {
  render() {
    return (
      <>
        <h2>Sign In</h2>
        <div id="background">
        <LoginForm />
        </div>
      </>
    );
  }
}

export default userIsNotAuthenticated(Login);
