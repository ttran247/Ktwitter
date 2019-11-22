import React from "react";
import MessageCard from "./MessageCard";

const messages = [
  {
    id: 980,
    text: "This is my fifth Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:35:06.752Z",
    likes: []
  },
  {
    id: 979,
    text: "This is my fourth Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:35:03.092Z",
    likes: []
  },
  {
    id: 978,
    text: "This is my third Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:34:58.952Z",
    likes: []
  },
  {
    id: 977,
    text: "This is my second Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:34:48.026Z",
    likes: []
  },
  {
    id: 976,
    text: "This is my first Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:34:30.285Z",
    likes: []
  },
  {
    id: 975,
    text: "hello",
    username: "test",
    createdAt: "2019-11-20T20:22:10.258Z",
    likes: []
  },
  {
    id: 974,
    text: "Hello world!",
    username: "test",
    createdAt: "2019-11-20T19:24:16.142Z",
    likes: []
  },
  {
    id: 973,
    text: "Hello world!",
    username: "test",
    createdAt: "2019-11-20T19:24:13.896Z",
    likes: []
  },
  {
    id: 972,
    text: "how's everyone doing?",
    username: "test",
    createdAt: "2019-11-20T02:54:29.182Z",
    likes: []
  },
  {
    id: 971,
    text: "or maybe it's me you can't stand?",
    username: "test",
    createdAt: "2019-11-20T02:36:47.429Z",
    likes: []
  }
];

class MessageList extends React.Component {
  render() {
    return messages.map(message => {
      return (
        <MessageCard
          username={message.username}
          text={message.text}
          createdAt={message.createdAt}
          key={message.id}
        />
      );
    });
  }
}

export default MessageList;
