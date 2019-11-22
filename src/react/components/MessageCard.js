import React from "react";
// import "./MessageCard.css";

class MessageCard extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
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
