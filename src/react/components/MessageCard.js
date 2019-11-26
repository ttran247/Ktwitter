import React from "react";
// import "./MessageCard.css";
import "./messageCard.css";

class MessageCard extends React.Component {
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
        <h4>{this.props.username}</h4>
        <p>{this.props.text}</p>
        <p>{this.props.createdAt}</p>
      </div>
    );
  }
}

export default MessageCard;
