import React from "react";
import { Link } from ".";
import "./Menu.css";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import { store, logout, getSingleUser } from "../../redux";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: ""
    };
  }
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  getAuthUserInfo = () => {
    this.props.getAuthenticatedUser(this.state.authUser);
  };

  componentDidMount = () => {
    if (this.props.isAuthenticated) {
      let authUser = store.getState().auth.login.result.username;
      this.setState({ authUser });
    }
  };

  render() {
    return (
      <div id="menu">
        <div id="logoContainer">
          <div id="logoBorder">
            <div id="logo" />
          </div>
        </div>
        <div id="menu-links">
          {this.props.isAuthenticated ? (
            <>
              <Link to={`/home/${this.state.authUser}`}>
                <div id="iconSpacer">
                  <Icon
                    name="home"
                    style={{ color: "var(--kenzieGreen)" }}
                    size="large"
                  />
                </div>
                Home
              </Link>
              <Link
                to={`/profile/${this.state.authUser}`}
                onClick={this.getAuthUserInfo}
              >
                <div id="iconSpacer">
                  <Icon
                    name="user"
                    style={{ color: "var(--kenzieGreen)" }}
                    size="large"
                  />
                </div>
                My Profile
              </Link>
              <Link to="/" onClick={this.handleLogout}>
                <div id="iconSpacer">
                  <Icon
                    name="arrow left"
                    style={{ color: "var(--kenzieGreen)" }}
                    size="large"
                  />
                </div>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <div id="iconSpacer">
                  <Icon
                    name="edit"
                    style={{ color: "var(--kenzieGreen)" }}
                    size="large"
                  />
                </div>
                Log In
              </Link>
              <Link to="/register">
                <div id="iconSpacer">
                  <Icon
                    name="paper plane"
                    style={{ color: "var(--kenzieGreen)" }}
                    size="large"
                  />
                </div>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    },
    getAuthenticatedUser: username => {
      dispatch(getSingleUser(username));
    }
  };
};

export default connect(null, mapDispatchToProps)(Menu);
