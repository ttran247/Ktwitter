import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import "./LoginForm.css";
import { Form, Button, Icon } from "semantic-ui-react";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <div id="loginForm">
          <Form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
            <div id="buttonContainer">
              <Button
                animated
                onClick={this.handleLogin}
                style={{
                  backgroundColor: "var(--kenzieBlue)",
                  color: "var(--kenzieGreen)",
                  width: "60%",
                  marginTop: "10px"
                }}
              >
                <Button.Content visible>
                  <Icon name="check" color="teal" />
                </Button.Content>
                <Button.Content hidden>Log In!</Button.Content>
              </Button>
              <div>{loading && <Spinner name="circle" color="blue" />}</div>
            </div>

            <div>
              {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
