import React from "react";
import {
  addLike,
  deleteLike,
  deleteMessage,
  getMessages
} from "../../redux/actionCreators";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Image, Button, Icon, Label, Popup } from "semantic-ui-react";
import "./messageCard.css";
import defaultPic from "../../img/brokenEgg.png";

class MessageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      likesCount: this.props.likes.length,
      postLiked: false,
      showPopup: false
    };
  }

  addLike = () => {
    this.props.addLike(this.props.id);
    this.setState({ postLiked: true, likesCount: this.state.likesCount + 1 });
  };

  deleteLike = () => {
    const userLike = this.getLikeId();
    this.props.deleteLike(userLike);
    this.setState({
      postLiked: false,
      likesCount: this.state.likesCount - 1
    });
  };

  toggleLike = () => {
    const { postLiked } = this.state;
    if (postLiked) {
      this.deleteLike();
    } else {
      this.addLike();
    }
  };

  deleteMessage = () => {
    this.props.deleteMessage(this.props.id);
  };

  getUser = () => {
    this.props.users.forEach(user => {
      if (user.username === this.props.username) {
        this.setState({ user: user });
        return;
      }
    });
  };

  setLikeStatus = () => {
    let { currentUser, likes } = this.props;
    likes.forEach(like => {
      if (currentUser === like.username) {
        this.setState({ postLiked: true });
      }
    });
  };

  getLikeId = () => {
    const { allMessages, currentUser } = this.props;
    const currentMessage = allMessages.find(message => {
      if (message.id === this.props.id) {
        return message;
      }
    });
    const userLike = currentMessage.likes.find(like => {
      if (like.username === currentUser) {
        return like;
      }
    });
    return userLike.id;
  };

  handlePopupClick = () => {
    let { showPopup } = this.state;
    if (showPopup) {
      this.setState({ showPopup: false });
    } else {
      this.setState({ showPopup: true });
    }
  };

  componentDidMount = () => {
    this.setLikeStatus();
  };

  componentDidUpdate = () => {
    if (this.props.users && this.state.user === {}) {
      this.getUser();
    }
  };

  render() {
    let { user } = this.state;
    let { currentUser, username } = this.props;
    const isUsersMessage = currentUser === username;
    return (
      <div id="messageCard-card">
        <div id="messageCard-pic">
          <Image
            src={
              user.pictureLocation ? `url(${user.pictureLocation})` : defaultPic
            }
            size="tiny"
            wrapped
            circular
          />
        </div>
        <div id="messageCard-space">
          <Link to={`../profile/${username}`}>
            <h3>{this.props.displayName}</h3>
          </Link>
          {this.props.text}
          <p>{this.props.date}</p>
          <div id="messageCard-buttons">
            <Button as="div" labelPosition="right">
              <Button
                onClick={this.toggleLike}
                icon
                style={
                  this.state.postLiked === false
                    ? { backgroundColor: "var(--kenzieGreen)" }
                    : {
                        backgroundColor: "var(--kenzieBlue)",
                        color: "var(--kenzieGreen)"
                      }
                }
              >
                <Icon
                  name="thumbs up outline"
                  style={
                    this.state.postLiked === false
                      ? { color: "var(--kenzieBlue)" }
                      : { color: "var(--kenzieGreen)" }
                  }
                />
                Like
              </Button>
              <Label as="a" basic pointing="left">
                {this.state.likesCount}
              </Label>
            </Button>
            {isUsersMessage && (
              <Popup
                open={this.state.showPopup}
                trigger={
                  <Button
                    onClick={this.handlePopupClick}
                    icon
                    style={{ backgroundColor: "var(--kenzieGreen)" }}
                  >
                    <Icon
                      name="trash alternate outline"
                      style={{ color: "var(--kenzieBlue)" }}
                    />
                  </Button>
                }
              >
                <Popup.Content>
                  <Button
                    icon
                    size="tiny"
                    style={{ backgroundColor: "white" }}
                    onClick={this.deleteMessage}
                  >
                    <Icon name="check" style={{ color: "green" }} />
                  </Button>
                  <Button
                    icon
                    size="tiny"
                    style={{ backgroundColor: "white" }}
                    onClick={this.handlePopupClick}
                  >
                    <Icon name="x" style={{ color: "red" }} />
                  </Button>
                </Popup.Content>
              </Popup>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLike: messageId => {
      dispatch(addLike(messageId));
    },
    deleteLike: likeId => {
      dispatch(deleteLike(likeId));
    },
    deleteMessage: messageId => {
      dispatch(deleteMessage(messageId));
    },
    getMessages: () => {
      dispatch(getMessages());
    }
  };
};

const mapStateToProps = state => {
  return {
    users: state.user.getAllUsers.users,
    currentUser: state.auth.login.result.username,
    allMessages: state.messages.allMessages.messages
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageCard);
