import React from "react";
import {
  addLike,
  getSingleUser,
  deleteMessage
} from "../../redux/actionCreators";
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
      user: {}
    };
  }

  addLike = () => {
    this.props.addLike(this.props.id);
  };

  deleteMessage = () => {
    this.props.deleteMessage(this.props.id);
  };

  componentDidMount = () => {
    this.props.getUser(this.props.username);
  };

  componentDidUpdate = previousProps => {
    if (this.props.user && previousProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
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
              <Button icon style={{ backgroundColor: "var(--kenzieGreen)" }}>
                <Icon
                  name="thumbs up outline"
                  style={{ color: "var(--kenzieBlue)" }}
                />
                Like
              </Button>
              <Label as="a" basic pointing="left">
                {this.props.likes}
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
    deleteMessage: messageId => {
      dispatch(deleteMessage(messageId));
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.user.getSingleUser.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageCard);
