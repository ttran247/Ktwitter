import React from "react";
import MessageCard from "./MessageCard";
import { getMessageArray } from "../../redux/actionCreators";
import { connect } from "react-redux";
import "./MessageList.css";

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      loading: true
    };
  }

  componentDidMount() {
    this.props.getMessageArray();
  }

  componentDidUpdate(previousProps) {
    if (this.props.messages && previousProps.messages !== this.props.messages) {
      this.setState({ messages: this.props.messages, loading: false });
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.username !== prevProps.username) {
  //     this.props.getMessages(this.props.username)
  //   }
  // }

  render() {
    const { messages } = this.state;
    return (
      <div id="listContainer">
        {messages.map(message => {
          const date = new Date(message.createdAt);
          return (
            <MessageCard
              username={
                message.displayName ? message.displayName : message.username
              }
              likes={message.likes.length}
              text={message.text}
              date={`${date.toLocaleTimeString(navigator.language, {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric"
              })}`}
              key={message.id}
              id={message.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessageArray: () => {
      dispatch(getMessageArray());
    }
  };
};
const mapStateToProps = state => {
  return {
    messages: state.messages.getMessageFeed.messages
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
