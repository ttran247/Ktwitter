import React from "react";
import { Card, Image, Popup, Dropdown, Modal } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import "./UserCard.css";
import { fakeUser } from "../../mockUserData";
import {changePicture, updateAbout} from "../../redux/actionCreators"


class UserCard extends React.Component {
  state = {
    inputValue: "",
    modalOpen: false
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };
    
  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };
        
    
  
  render() {
    return (
      <div id="userCard-space">
        <Image
          src={fakeUser.pictureLocation}
          size="medium"
          spaced="true"
          circular={true}
          style={{
            border: "4px solid var(--kenzieBlue)"
          }}
        />
        <Card id="userCard-card">
          <Card.Content>
            <Card.Header>{fakeUser.displayName}</Card.Header>
            <Card.Description>{fakeUser.about}</Card.Description>
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
              Username: <strong>{fakeUser.username}</strong>
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
                {new Date(fakeUser.createdAt).toLocaleDateString(
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
                    // onClick={this.openModal}
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
</Modal.Content>

        </Modal>
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
      }
    }
}


export default UserCard;
