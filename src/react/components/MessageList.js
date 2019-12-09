import React from "react";
import MessageCard from "./MessageCard";
import { getAllUsers, getMessages } from "../../redux/actionCreators";
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
    this.props.getMessages();
    this.props.getAllUsers();
  }

  componentDidUpdate(previousProps) {
    if (this.props.messages && previousProps.messages !== this.props.messages) {
      this.setState({ messages: this.props.messages, loading: false });
    }
    if (this.props.users && previousProps.users !== this.props.users) {
      this.setState({ users: this.props.users });
    }
  }

  render() {
    const { messages } = this.state;
    return (
      <div id="listContainer">
        {messages.map(message => {
          const date = new Date(message.createdAt);
          return (
            <MessageCard
              displayName={
                message.displayName ? message.displayName : message.username
              }
              username={message.username}
              likes={message.likes}
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
    getMessages: () => {
      dispatch(getMessages());
    },
    getAllUsers: () => {
      dispatch(getAllUsers());
    }
  };
};
const mapStateToProps = state => {
  return {
    messages: state.messages.allMessages.messages,
    users: state.user.getAllUsers.users
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
