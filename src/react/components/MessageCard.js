import React from "react";
<<<<<<< HEAD
import {
  addLike,
  getSingleUser,
  deleteMessage
} from "../../redux/actionCreators";
=======
import { addLike, getSingleUser,deleteLike } from "../../redux/actionCreators";
>>>>>>> 2f76229d52741853056d8ef5b6819e03d7d8c2fc
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
      postLiked: false,
      
    };
  }

  addLike = () => {
    this.props.addLike(this.props.id);
    this.setState({postLiked:true})
  };

<<<<<<< HEAD
  deleteMessage = () => {
    this.props.deleteMessage(this.props.id);
  };
=======
  deleteLike = () => {
    this.props.deleteLike(this.state.likedId);
    this.setState({postLiked:false})
  }
>>>>>>> 2f76229d52741853056d8ef5b6819e03d7d8c2fc

  componentDidMount = () => {
    this.props.getUser(this.props.username);
    this.setLikeStatus()
  };

  componentDidUpdate = previousProps => {
    if (this.props.user && previousProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
    }
  };

  setLikeStatus = () => {
    const user = store.getState().auth.login.result.username
    const likesArray = this.props.likes
    for(let i=0; i<likesArray.length; i++) {
      console.log(likesArray[i].id)
      if(user===likesArray[i].username){
        this.setState({postLiked:true,likedId:likesArray[i].id})
        break
      }else {
         continue 
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
              <Button onClick = {this.state.postLiked===true? this.deleteLike: this.addLike} icon style={this.state.postLiked===false?{backgroundColor: "var(--kenzieGreen)" }:{backgroundColor:"red"}}>
                <Icon
                  name="thumbs up outline"
                  style={{ color: "var(--kenzieBlue)" }}
                />
                Like
              </Button>
              <Label as="a" basic pointing="left">
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
<<<<<<< HEAD
    deleteMessage: messageId => {
      dispatch(deleteMessage(messageId));
=======
    deleteLike: likeId => {
      dispatch(deleteLike(likeId));
>>>>>>> 2f76229d52741853056d8ef5b6819e03d7d8c2fc
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.user.getSingleUser.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageCard);
