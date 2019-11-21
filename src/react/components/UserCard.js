import React from "react";
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


class UserCard extends React.Component {
    state = {
        
    }
    
    render (){
    return (
        <React.Fragment>
    <div id="profilePage">
        <div id= "userCard">
            <div id="cardText">
                <h3>{fakeUser.displayName}</h3>
                <p>{fakeUser.about}</p>
            </div>
            <div id="photoButton">
                <img src={fakeUser.pictureLocation}/>
                <button>Change Profile Photo</button>
            </div>
        </div>
    </div>
    </React.Fragment>
    )}
}

export default UserCard;