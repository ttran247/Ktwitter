import React from "react";
import { Card, Image, Popup, Dropdown } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import "./UserCard.css";
import { fakeUser } from "../../mockUserData";
import {changePicture, updateAbout} from "../../redux/actionCreators"


class UserCard extends React.Component {
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
                <Dropdown.Item text="Change Profile Picture" />
                <Dropdown.Item text="Modify 'About Me'" />
              </Dropdown.Menu>
            </Dropdown>
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
