import React from "react";
import { Menu } from "semantic-ui-react";
import { getMessages } from "../../redux";
import { connect } from "react-redux";
import "./ProfileFeed.css";
import MessageCard from "./MessageCard";

class ProfileFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "Messages",
      messages: []
    };
  }

  switchTabs = (event, { name }) => {
    this.setState({ active: name });
  };

  componentDidMount = () => {
    this.props.getMessages();
  };

  componentDidUpdate = previousProps => {
    if (this.props.messages && previousProps.messages !== this.props.messages) {
      this.setState({ messages: this.props.messages });
    }
  };

  render() {
    const { active, messages } = this.state;

    let userMessages = [];
    messages.forEach(message => {
      if (message.username === this.props.username) {
        userMessages.push(message);
      }
    });

    let likedPosts = [];
    messages.forEach(message => {
      message.likes.forEach(like => {
        if (like.username === this.props.username) {
          likedPosts.push(message);
        }
      });
    });

    return (
      <React.Fragment>
        <div id="profileFeed-space">
          <Menu pointing>
            <Menu.Item
              name="Messages"
              active={active === "Messages"}
              onClick={this.switchTabs}
            />
            <Menu.Item
              name="Likes"
              active={active === "Likes"}
              onClick={this.switchTabs}
            />
          </Menu>
        </div>
        <div id="profileFeed-feed">
          {active === "Messages" && userMessages.length > 0
            ? userMessages.map(message => {
                return (
                  <MessageCard
                    username={
                      message.displayName
                        ? message.displayName
                        : message.username
                    }
                    likes={message.likes}
                    text={message.text}
                    date={`${new Date(message.createdAt).toLocaleTimeString(
                      navigator.language,
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                      }
                    )}`}
                    key={message.id}
                    id={message.id}
                  />
                );
              })
            : active === "Messages"
            ? `You haven't made any posts yet...`
            : active === "Likes" && likedPosts.length > 0
            ? likedPosts.map(message => {
                return (
                  <MessageCard
                    username={
                      message.displayName
                        ? message.displayName
                        : message.username
                    }
                    likes={message.likes}
                    text={message.text}
                    date={`${new Date(message.createdAt).toLocaleTimeString(
                      navigator.language,
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                      }
                    )}`}
                    key={message.id}
                    id={message.id}
                  />
                );
              })
            : "You haven't liked any posts yet..."}
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages());
    }
  };
};

const mapStateToProps = state => {
  return {
    messages: state.messages.getMessageFeed.messages
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);
