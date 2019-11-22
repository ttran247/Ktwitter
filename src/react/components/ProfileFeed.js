import React from "react";
import { Feed } from 'semantic-ui-react'

const fakeMessages =  {
    
      "id": 0,
      "text": "This is a tweet by FakeMan",
      "username": "FakeMan",
      "createdAt": "2019-11-22T15:29:29.886Z",
      "likes": 14
}

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


class FeedExampleContentDate extends React.Component {
  
  render () {

  return <Feed id="profileFeed">
    <Feed.Event>
      <Feed.Label image={fakeUser.pictureLocation} />
      <Feed.Content>
  <Feed.Date>{fakeMessages.createdAt}</Feed.Date>
        <Feed.Summary>
          {fakeMessages.text}
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  </Feed>
  }}
  
export default FeedExampleContentDate