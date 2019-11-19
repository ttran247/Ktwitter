import React from "react";
import { LoginForm, Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Login extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Login);
