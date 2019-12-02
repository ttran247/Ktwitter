import React from "react";
import { addLike } from "../../redux/actionCreators";
import { connect } from "react-redux";
import "./MessageCard.css";
import { Link } from "react-router-dom";
class MessageCard extends React.Component {
  addLike = () => {
    this.props.addLike(this.props.id);
  };
  render() {
    return (
      <div
        style={{
          border: "2px solid black",
          borderRadius: "15px",
          padding: "1em",
          margin: "2em"
        }}
      >
        <Link to={`/profile/${this.props.username}`}>
          <h4 className="username">{this.props.username}</h4>
        </Link>

        <p>{this.props.text}</p>
        <p>{this.props.createdAt}</p>
        <div>
          <div className="ui right labeled button" role="button" tabIndex="0">
            <button onClick={this.addLike} className="ui red button">
              <i aria-hidden="true" className="heart icon"></i>
              Like
            </button>

            <a href=" #" className="ui red left pointing basic label">
              {this.props.likes}
            </a>
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
    }
  };
};

export default connect(null, mapDispatchToProps)(MessageCard);
