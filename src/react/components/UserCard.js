import React from "react";
import { Card, Image, Popup, Dropdown, Modal } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import "./UserCard.css";
<<<<<<< HEAD
import { fakeUser } from "../../mockUserData";
import { DeleteUserButton } from ".";
=======
import {changePicture, updateAbout, getSingleUser} from "../../redux/actionCreators";
import { connect } from "react-redux"
import defaultPic from "../../img/brokenEgg.png" 

>>>>>>> 2f76229d52741853056d8ef5b6819e03d7d8c2fc

class UserCard extends React.Component {
  state = {
    inputValue: "",
    modalOpen: false,
    modalStatus: "",
    user: {}

  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };
    
  closeModal = () => {
    this.setState({ modalOpen: false, modalStatus: "" });
  };

  openModal = (event) => {
    let modalStatus = ""
    if (event.target.innerHTML ==="Change Profile Picture"){
          modalStatus = "picture"
    }
    else if (event.target.innerHTML ==="Modify 'About Me'"){
      modalStatus = "about"
    }
    
    this.setState({ modalOpen: true, modalStatus });
    console.log(event.target.innerHTML)

  };
        
  newPicture = () => {
    this.props.changePicture(this.state.inputValue)
  }
  
  newAbout = () => {
    this.props.updateAbout(this.state.inputValue)
  }

  componentDidMount = () => {
    this.props.getSingleUser(this.props.username)
  } 

  componentDidUpdate(previousProps) {
    if (this.props.user && previousProps.user !== this.props.user) {
      this.setState({ user: this.props.user});
  }}

  render() {
    const {user} = this.state
    return (
      <div id="userCard-space">
        <Image
          src= {user.pictureLocation ? user.pictureLocation : defaultPic }
          size="medium"
          circular={true}
          style={{
            border: "4px solid var(--kenzieBlue)"
          }}
        />
        <Card id="userCard-card">
          <Card.Content>
            <Card.Header>{user.displayName ? user.displayName : user.username}</Card.Header>
            <Card.Description>{user.about ? user.about : "all about me"}</Card.Description>
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
                    onClick={this.openModal}/>
           
                  <Dropdown.Item 
                    text="Modify 'About Me'" 
                    onClick={this.openModal}
                  />
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
           {this.state.modalStatus === "picture" ? 
           <textarea
              placeholder="Enter new picture URL"
              onChange={this.handleChange}
              value={this.state.inputValue}
              style={{
                width: "85%",
                border: "none"
              }}
              rows="6"
              autoFocus="true"
            /> 
            

            
            : <textarea
            placeholder="Tell us about you"
            onChange={this.handleChange}
            value={this.state.inputValue}
            style={{
              width: "85%",
              border: "none"
            }}
            rows="6"
            autoFocus="true" />}

          {this.state.modalStatus === "picture" ? 
            <Button
              style={{
                backgroundColor: "var(--kenzieBlue)",
                color: "var(--kenzieGreen)",
                textAlign: "center",
                width: "150px",
                height: "50px"
              }}
<<<<<<< HEAD
            >
              <Dropdown.Menu>
                <Dropdown.Item text="Change Profile Picture" />
                <Dropdown.Item text="Modify 'About Me'" />
              </Dropdown.Menu>
            </Dropdown>
            <DeleteUserButton />
            <DeleteUserButton username={this.props.username} />
=======
              onClick={() => {
                this.newPicture();
                if (this.state.inputValue !== "") {
                  this.setState({ inputValue: "" });
                  this.closeModal();
                }
              }}
              >
              <Button.Content>Change Profile Photo</Button.Content>
            </Button> :
            
            <Button
              style={{
                backgroundColor: "var(--kenzieBlue)",
                color: "var(--kenzieGreen)",
                textAlign: "center",
                width: "150px",
                height: "50px"
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
            </Button>}
            
</Modal.Content>

        </Modal>
>>>>>>> 2f76229d52741853056d8ef5b6819e03d7d8c2fc
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateAbout: data => {
        dispatch(updateAbout(data))
      },
      changePicture: picture => {
        dispatch(changePicture(picture))
      },
      getSingleUser: username => {
        dispatch(getSingleUser(username))
      }
    }
}

const mapStateToProps = state => {
    return {
      user: state.user.getSingleUser.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
