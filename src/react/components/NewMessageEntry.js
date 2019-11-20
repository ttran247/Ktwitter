import React from "react";
import "./NewMessageEntry.css";

class NewMessageEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  handleChange = event => {
    if (this.state.inputValue.length <= 140) {
      this.setState({
        inputValue: event.target.value
      });
    }
  };

  render() {
    let typedChars = this.state.inputValue.length;
    return (
      <div id="entryContainer">
        <textarea
          placeholder="Write a new post here..."
          maxLength="140"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
        <div id="infoContainer">
          {typedChars}/140 characters
          <button className="ui primary button">Post</button>
        </div>
      </div>
    );
  }
}

export default NewMessageEntry;
