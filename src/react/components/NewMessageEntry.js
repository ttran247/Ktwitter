import React from "react";

class NewMessageEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div id="entryContainer">
        <textarea placeholder="Write a new post here..." />
      </div>
    );
  }
}

export default NewMessageEntry;
