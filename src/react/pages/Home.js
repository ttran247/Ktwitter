import React from "react";
import { LoginForm, Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import { MOCK_POSTS } from "../../mockUserData/mockMessages";

class Home extends React.Component {
  constructor(props) {
    super(props);

    // local state monitors value of text input that composes new message/post
    // all other state data and state changes will come from the redux store
    this.state = {
      inputValue: ""
    };
  }

  // handles changes in input textbox so local state tracks value
  modifyInputValue = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleEnter = event => {
    if (event.key === 'Enter') {
      // make call to messages/posts stored in Redux state and retrieve relevant search results
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* leftSideNav div contains SideNavBar component that allows 
        user to navigate site*/}
        <div id="leftSideNav">
          {/* Side nav bar is the main navigation component on every page */}
          <SideNavBar />
        </div>

        {/* middleContent div contains all relevant content to the page 
        and is located in the middle of the screen */}
        <div id="middleContent">
          {/* PageHeader component is a reusable component and shows the 
          user which page they are currently on */}
          <PageHeader />

          {/* the newMessage div contains all the relevant tools that allow 
          a user to compose a new post/message */}
          <div id="newMessage">
            {/* img shows the user's profile picture in a small circle */}
            <img
              src={/* image URI from back-end API, stored in Redux store */}
            />

            {/* text input allows user to compose a new post/message. 
            value is stored in local state and changes are stored in local state */}
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.modifyInputValue}
            />

            {/* button allows a user to submit a new post/message and send it 
            to the back-end API. Button can be sourced from component library */}
            <button onClick={/* submit new post/>message to back-end API */}>
              Post
            </button>
          </div>

          {/* the messageList div lists messages retrieved from the back-end API, sorted
          from newest to oldest */}
          <div id="messageList">
            {/* use map function to iterate over messages retrieved from back-end API, 
            render a div for each message showing the composer's profile picture, the message
            itself and the number of likes */}
            {MOCK_POSTS.map(post => {
              <div id="message">
                <img src={/* posting user's profile picture */} />
                <p>{post.post.text}</p>
                <p>Likes: {post.post.likes.length}</p>
              </div>;
            })}
          </div>
        </div>

        {/* the rightSideNav div contains the search text input and trending topics/search
         results */}
        <div id = 'rightSideNav'>
          {/* search bar value and changes in value tracked in Redux store so value persists
          throughout navigation of site */}
          <input 
            type='text' 
            value={/* value retrieved from Redux store */} 
            onChange={/* method that sends changes on value to the Redux store */} 
            onKeyPress={this.handleEnter /* searches messages in back-end API for results */}
          />

          {/* searchResults div shows the results of the search term in text input */}
          <div id = 'searchResults'>
            {searchResultMessages.map( message => {(
              {/* render a respective div for each post returned in the results */}
              <div id = 'message'>
                <img src={/* posting user's profile picture in a small circle */}/>
                <p>{/* the message itself */}</p>
                <p>Likes: {/* number of likes associated with the post */}</p>
              </div>
            )})}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
