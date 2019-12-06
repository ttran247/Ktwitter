import React from "react";
import { addLike, getSingleUser, deleteLike } from "../../redux/actionCreators";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Image, Button, Icon, Label } from "semantic-ui-react";
import "./messageCard.css";
import defaultPic from "../../img/brokenEgg.png";
import { store } from "../../redux";

class MessageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      postLiked: false
    };
  }

  addLike = () => {
    this.props.addLike(this.props.id);
    this.setState({ postLiked: true });
  };

  deleteLike = () => {
    this.props.deleteLike(this.state.likedId);
    this.setState({ postLiked: false });
  };

  componentDidMount = () => {
    this.props.getUser(this.props.username);
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
    const currentUser = store.getState().auth.login.result.username;
    const isUsersMessage = currentUser === this.props.username;
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
          <Link to={`../profile/${this.props.username}`}>
            <h3>{this.props.username}</h3>
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
                {this.props.likes.length}
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
    getUser: username => {
      dispatch(getSingleUser(username));
    },
    deleteLike: likeId => {
      dispatch(deleteLike(likeId));
    }
  };
};

const mapStateToProps = state => {
  return {
    users: state.user.getAllUsers.users
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageCard);
