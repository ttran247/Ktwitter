import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { ChangePicture } from "../../redux/actionCreators"
import {} from "../../redux/actionCreators"
import {} from "../../"
import "./Profile.css"

  
const fakeUser = 
{
    "username": "fakeMan25",
    "displayName": "Fake Man",
    "about": "Indianapolis - not a real person",
    "createdAt": "2019-11-17T23:55:05.182Z",
    "updatedAt": "2019-11-17T23:55:05.182Z",
    "pictureLocation": "https://heartofamericagroup.com/wp-content/uploads/2019/04/generic-avatar.jpg",
    "googleId": "fakeman25@gmail.com"
  }

  const ButtonExampleButton = () => <Button>Change Profile Photo</Button>

class CardExampleCard extends React.Component {
    
  componentDidMount = () => {
    
  }


    render () {

return <Card>
      <Image src={fakeUser.pictureLocation}wrapped ui={false} />
      <Card.Content>
    <Card.Header>{fakeUser.displayName}</Card.Header>
        <Card.Meta>
          {/* <span className='date'>Joined in 2015</span> */}
        </Card.Meta>
        <Card.Description>
          {fakeUser.about}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <ButtonExampleButton/>
        </a>
      </Card.Content>
    </Card>
  
}}
const mapDispatchToProps = dispatch => {
  return {
  ChangePicture: picture => {
    dispatch(ChangePicture(picture))
  }
  }
}
const mapStateToProps = state => {
  const userSection = state.user.getCurrentUser.user
  return {
    username: state.auth.login.result.username,
    displayName: userSection.displayName,
    pictureLocation: userSection.pictureLocation,
    about: userSection.about}
}



export default CardExampleCard;
  