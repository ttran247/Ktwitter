import React from "react";
import { Form, Button, Icon } from "semantic-ui-react";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValues: {
        firstName: "",
        lastName: "",
        email: "",
        username: ""
      }
    };
  }

  handleClear = () => {
    this.setState({
      inputValues: {
        firstName: "",
        lastName: "",
        email: "",
        username: ""
      }
    });
  };

  handleChange = event => {
    let stateProp = event.target.name;
    this.setState({
      inputValues: {
        [stateProp]: event.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Field>
            <label htmlFor="firstName">First Name</label>
            <input
              placeholder="First Name"
              name="firstName"
              value={this.state.inputValues.firstName}
              onChange={this.handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              placeholder="Last Name"
              name="lastName"
              value={this.state.inputValues.lastName}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="123abc@example.com"
              name="email"
              value={this.state.inputValues.email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Desired Username"
              name="username"
              value={this.state.inputValues.username}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" name="password" />
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirm"
            />
          </Form.Field>
        </Form>
        <div id="buttonGroup">
          <Button animated color="teal">
            <Button.Content visible>
              <Icon name="check" />
            </Button.Content>
            <Button.Content hidden>Sign Up!</Button.Content>
          </Button>
          <Button animated color="blue">
            <Button.Content visible>
              <Icon name="trash alternate outline" />
            </Button.Content>
            <Button.Content hidden onClick={this.handleClear}>
              Clear
            </Button.Content>
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default RegistrationForm;
