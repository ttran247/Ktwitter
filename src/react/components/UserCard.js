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

class UserCard extends React.Component {
  state = {
    inputValue: "",
    modalOpen: false,
    modalStatus: "",
    user: {}
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
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

  newPicture = () => {
    this.props.changePicture(this.state.inputValue);
  };

  newAbout = () => {
    this.props.updateAbout(this.state.inputValue);
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
    const { user, modalStatus } = this.state;
    const authenticatedUsersProfile = this.props.currentUser === user.username;
    return (
      <div id="userCard-space">
        <Image
          src={user.pictureLocation ? user.pictureLocation : defaultPic}
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
                    <textarea
                      placeholder="Enter new picture URL"
                      onChange={this.handleChange}
                      value={this.state.inputValue}
                      style={{
                        width: "85%",
                        border: "none"
                      }}
                      rows="1"
                      autoFocus="true"
                    />
                    <Button
                      style={{
                        backgroundColor: "var(--kenzieBlue)",
                        color: "var(--kenzieGreen)",
                        textAlign: "center",
                        width: "50%",
                        marginTop: "5px"
                      }}
                      onClick={() => {
                        this.newPicture();
                        if (this.state.inputValue !== "") {
                          this.setState({ inputValue: "" });
                          this.closeModal();
                        }
                      }}
                    >
                      <Button.Content>Change Profile Photo</Button.Content>
                    </Button>
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
                    <Button
                      style={{
                        backgroundColor: "var(--kenzieBlue)",
                        color: "var(--kenzieGreen)",
                        textAlign: "center",
                        width: "50%",
                        marginTop: "5px"
                      }}
                      onClick={() => {
                        this.newAbout();
                        if (this.state.inputValue !== "") {
                          this.setState({ inputValue: "" });
                          this.closeModal();
                        }
                      }}
                    >
                      <Button.Content>Update Your Bio</Button.Content>
                    </Button>
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
    changePicture: picture => {
      dispatch(changePicture(picture));
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
