import React from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { createNewUser } from "../../redux";
import "./RegistrationForm.css";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
      newUserCreated: false,
      error: null
    };
  }

  handleClear = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
      error: null
    });
  };

  handleChange = event => {
    let stateProp = event.target.name;
    this.setState({
      [stateProp]: event.target.value
    });
  };

  checkValidInfo = () => {
    const { username, displayName, password, passwordConfirm } = this.state;
    if (username.length < 3 || username.length > 20) {
      this.setState({
        username: "",
        error: "Username must be at least 3, and no more than 20 characters."
      });
      document.getElementsByName("username")[0].focus();
      return false;
    } else if (displayName.length < 3 || displayName.length > 20) {
      this.setState({
        displayName: "",
        error:
          "Display name must be at least 3, and no more than 20 characters."
      });
      document.getElementsByName("displayName")[0].focus();
      return false;
    } else if (password.length < 8 || password.length > 20) {
      this.setState({
        password: "",
        passwordConfirm: "",
        error: "Password must be between 8 and 20 characters."
      });
      document.getElementsByName("password")[0].focus();
      return false;
    } else if (password !== passwordConfirm) {
      this.setState({
        password: "",
        passwordConfirm: "",
        error:
          "Password values did not match. Please enter a password and confirm again."
      });
      document.getElementsByName("password")[0].focus();
      return false;
    }
    this.setState({ error: null });
    return true;
  };

  createNewUser = () => {
    if (this.checkValidInfo()) {
      const { username, displayName, password } = this.state;
      this.props.createUser(username, displayName, password);
    }
  };

  componentDidUpdate = previousProps => {
    if (this.props.error && previousProps.error !== this.props.error) {
      this.setState({
        error: this.props.error.message
      });
    }
  };

  render() {
    let passwordMatch =
      this.state.passwordConfirm &&
      this.state.password === this.state.passwordConfirm;

    return (
      <div id="regForm">
        <Form>
          <Form.Field>
            <label htmlFor="displayName">Display Name</label>
            <input
              placeholder="Display Name"
              name="displayName"
              value={this.state.displayName}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="123abc@example.com"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Desired Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <label htmlFor="passwordConfirm">
              Confirm Password
              {passwordMatch ? (
                <Icon name="check" color="green" />
              ) : (
                <Icon name="x" color="red" />
              )}
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirm"
              onChange={this.handleChange}
              value={this.state.passwordConfirm}
            />
          </Form.Field>
        </Form>
        <div id="buttonGroup">
          <Button
            animated
            style={{
              backgroundColor: "var(--kenzieBlue)",
              color: "var(--kenzieGreen)",
              width: "30%",
              textAlign: "center"
            }}
            onClick={this.createNewUser}
          >
            <Button.Content visible>
              <Icon name="paper plane" />
            </Button.Content>
            <Button.Content hidden>Sign Up!</Button.Content>
          </Button>
          <Button
            animated
            color="red"
            style={{ color: "white", width: "30%", textAlign: "center" }}
          >
            <Button.Content visible>
              <Icon name="trash alternate outline" />
            </Button.Content>
            <Button.Content hidden onClick={this.handleClear}>
              Clear
            </Button.Content>
          </Button>
        </div>
        {this.state.error && <div id="errorDisplay">{this.state.error}</div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.createUser.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: (username, displayName, password) => {
      dispatch(createNewUser(username, displayName, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
