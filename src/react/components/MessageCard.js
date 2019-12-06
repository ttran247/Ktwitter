import React from "react";
import { addLike, deleteLike } from "../../redux/actionCreators";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Image, Button, Icon, Label } from "semantic-ui-react";
import "./messageCard.css";
import defaultPic from "../../img/brokenEgg.png";
import { store, deleteMessage, getMessages } from "../../redux";

class MessageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      likes: this.props.likes,
      postLiked: false
    };
  }

  addLike = () => {
    let { likes } = this.state;
    this.props.addLike(this.props.id);
    if (!this.props.addLikeError) {
      likes.push({ placeholder: "newLike" });
    }
    this.setState({ postLiked: true });
  };

  deleteLike = () => {
    this.props.deleteLike(this.state.likedId);
    this.setState({ postLiked: false });
  };

  deleteMessage = () => {
    this.props.deleteMessage(this.props.id);
  };

  componentDidMount = () => {
    this.setLikeStatus();
  };

  componentDidUpdate = () => {
    if (this.props.users && this.state.user === {}) {
      this.getUser();
    }
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
    const user = store.getState().auth.login.result.username;
    const likesArray = this.props.likes;
    for (let i = 0; i < likesArray.length; i++) {
      if (user === likesArray[i].username) {
        this.setState({ postLiked: true, likedId: likesArray[i].id });
        break;
      } else {
        continue;
      }
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
            src={user.pictureLocation ? user.pictureLocation : defaultPic}
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
                onClick={
                  this.state.postLiked === true ? this.deleteLike : this.addLike
                }
                icon
                style={
                  this.state.postLiked === false
                    ? { backgroundColor: "var(--kenzieGreen)" }
                    : { backgroundColor: "red" }
                }
              >
                <Icon
                  name="thumbs up outline"
                  style={{ color: "var(--kenzieBlue)" }}
                />
                Like
              </Button>
              <Label as="a" basic pointing="left">
                {this.state.likes.length}
              </Label>
            </Button>
            {isUsersMessage && (
              <Button
                onClick={this.deleteMessage}
                icon
                style={{ backgroundColor: "var(--kenzieGreen)" }}
              >
                <Icon
                  name="trash alternate outline"
                  style={{ color: "var(--kenzieBlue)" }}
                />
              </Button>
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
    addLikeError: state.likes.addLike.error,
    deleteLikeError: state.likes.deleteLike.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageCard);
