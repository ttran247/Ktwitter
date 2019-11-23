import React from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import "./RegistrationForm.css";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirm: ""
    };
  }

  handleClear = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirm: null
    });
  };

  handleChange = event => {
    let stateProp = event.target.name;
    this.setState({
      [stateProp]: event.target.value
    });
  };

  render() {
    let passwordMatch =
      this.state.passwordConfirm &&
      this.state.password === this.state.passwordConfirm;

    return (
      <div id="regForm">
        <Form>
          <Form.Field>
            <label htmlFor="firstName">First Name</label>
            <input
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="123abc@example.com"
              name="email"
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
      </div>
    );
  }
}

export default RegistrationForm;
