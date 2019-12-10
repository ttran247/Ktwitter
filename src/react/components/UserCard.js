import React from "react";
import { Card, Image, Popup, Dropdown, Modal } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import {
  changePicture,
  updateAbout,
  getSingleUser,
  deleteUser
} from "../../redux/actionCreators";
import { connect } from "react-redux";
import defaultPic from "../../img/brokenEgg.png";
import "./UserCard.css";
import { domain } from "../../redux/actionCreators/constants";

class UserCard extends React.Component {
  state = {
    inputValue: "",
    modalOpen: false,
    modalStatus: "",
    user: {},
    error: ""
  };

  handleChange = event => {
    if (event.target.value.length <= 255) {
      this.setState({
        inputValue: event.target.value,
        error: null
      });
    }
  };

  closeModal = () => {
    this.setState({ modalOpen: false, modalStatus: "" });
  };

  openModal = event => {
    let modalStatus = "";
    if (event.target.innerHTML === "Change Profile Picture") {
      modalStatus = "picture";
    } else if (event.target.innerHTML === "Modify 'About Me'") {
      modalStatus = "about";
    } else if (event.target.value === "Delete Account") {
      modalStatus = "delete";
    }

    this.setState({ modalOpen: true, modalStatus });
    console.log(event.target.innerHTML);
  };

  newPicture = event => {
    // const formData = new FormData(event.target)
    event.preventDefault();
    this.props.changePicture(event.target);
    this.closeModal();
  };

  newAbout = () => {
    this.props.updateAbout(this.state.inputValue);
    this.closeModal();
    this.setState({ inputValue: "" });
  };

  deleteUser = () => {
    this.props.deleteUser(this.state.user.username);
  };

  componentDidMount = () => {
    this.props.getSingleUser(this.props.username);
  };

  componentDidUpdate(previousProps) {
    if (this.props.user && previousProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
    }
  }

  render() {
    let aboutMeChars = this.state.inputValue.length;

    const { user, modalStatus } = this.state;
    const authenticatedUsersProfile = this.props.currentUser === user.username;
    return (
      <div id="userCard-space">
        <Image
          src={
            user.pictureLocation
              ? `${domain}${user.pictureLocation}`
              : defaultPic
          }
          size="medium"
          circular={true}
          style={{
            border: "4px solid var(--kenzieBlue)"
          }}
        />
        <Card id="userCard-card">
          <Card.Content>
            <Card.Header>
              {user.displayName ? user.displayName : user.username}
            </Card.Header>
            <Card.Description>
              {user.about ? user.about : "all about me"}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Popup
              trigger={
                <Button
                  style={{
                    backgroundColor: "var(--kenzieBlue)",
                    color: "var(--kenzieGreen)"
                  }}
                  icon="user"
                />
              }
            >
              Username: <strong>{user.username}</strong>
            </Popup>
            <Popup
              trigger={
                <Button
                  icon="calendar"
                  style={{
                    backgroundColor: "var(--kenzieBlue)",
                    color: "var(--kenzieGreen)"
                  }}
                />
              }
            >
              Joined:{" "}
              <strong>
                {new Date(user.createdAt).toLocaleDateString(
                  navigator.language,
                  {
                    month: "long",
                    year: "numeric"
                  }
                )}
              </strong>
            </Popup>
            <Modal
              style={{
                width: "600px"
              }}
              open={this.state.modalOpen}
              closeIcon
              onClose={this.closeModal}
              trigger={
                <Dropdown
                  button
                  className="icon"
                  icon="settings"
                  style={{
                    backgroundColor: "var(--kenzieBlue)",
                    color: "var(--kenzieGreen)"
                  }}
                >
                  <Dropdown.Menu>
                    <Dropdown.Header>Settings</Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      text="Change Profile Picture"
                      onClick={this.openModal}
                    />

                    <Dropdown.Item
                      text="Modify 'About Me'"
                      onClick={this.openModal}
                    />

                    {authenticatedUsersProfile && (
                      <Dropdown.Item
                        text="Delete Account"
                        onClick={this.openModal}
                      />
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              }
            >
              <Modal.Content
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                {modalStatus === "picture" ? (
                  <div className="modal-content">
                    <form onSubmit={this.newPicture}>
                      <input type="file" name="picture" />
                      <input
                        id="aboutMe-submit"
                        type="submit"
                        value="Upload Picture"
                      />
                    </form>
                  </div>
                ) : modalStatus === "about" ? (
                  <div className="modal-content">
                    <textarea
                      placeholder="Tell us about you"
                      onChange={this.handleChange}
                      value={this.state.inputValue}
                      style={{
                        width: "100%",
                        border: "none"
                      }}
                      rows="6"
                      autoFocus="true"
                    />
                    <div id="aboutMe-chars">{aboutMeChars}/255 characters</div>
                    <Button
                      style={{
                        backgroundColor: "var(--kenzieBlue)",
                        color: "var(--kenzieGreen)",
                        textAlign: "center",
                        width: "50%",
                        marginTop: "5px"
                      }}
                      onClick={this.newAbout}
                    >
                      <Button.Content>Update Your Bio</Button.Content>
                    </Button>
                    {this.state.error && <div>{this.state.error}</div>}
                  </div>
                ) : (
                  <div className="modal-content">
                    <p>Are you sure you want to delete your account?</p>
                    <div id="confirmDelete-buttons">
                      <Button
                        style={{
                          backgroundColor: "var(--kenzieBlue)",
                          color: "var(--kenzieGreen)"
                        }}
                        onClick={this.deleteUser}
                      >
                        <Button.Content>Yes</Button.Content>
                      </Button>
                      <Button
                        style={{ backgroundColor: "red", color: "white" }}
                        onClick={this.closeModal}
                      >
                        <Button.Content>No</Button.Content>
                      </Button>
                    </div>
                  </div>
                )}
              </Modal.Content>
            </Modal>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAbout: data => {
      dispatch(updateAbout(data));
    },
    changePicture: formTag => {
      dispatch(changePicture(formTag));
    },
    getSingleUser: username => {
      dispatch(getSingleUser(username));
    },
    deleteUser: username => {
      dispatch(deleteUser(username));
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.user.getSingleUser.user,
    currentUser: state.auth.login.result.username
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
