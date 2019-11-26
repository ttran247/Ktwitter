import React from "react";
import { connect } from "react-redux";
import { postMessage } from "../../redux/actionCreators";
import { Button, Icon } from "semantic-ui-react";
import "./NewMessageEntry.css";

class NewMessageEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      error: null
    };
  }

  handleChange = event => {
    if (this.state.inputValue.length <= 140) {
      this.setState({
        inputValue: event.target.value
      });
    }
  };

  postNewMessage = () => {
    this.setState({ error: null });

    if (
      this.state.inputValue.length > 0 &&
      this.state.inputValue.replace(/\s/g, "") !== ""
    ) {
      this.props.postMessage(this.state.inputValue);
    } else {
      this.setState({
        inputValue: "",
        error:
          "Oops! Clearly you have something to say, but why not type it first?"
      });
      document.getElementsByTagName("textarea")[0].focus();
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
          <Button
            animated
            style={{
              backgroundColor: "var(--kenzieBlue)",
              color: "var(--kenzieGreen)",
              width: "50%",
              textAlign: "center"
            }}
            onClick={this.postNewMessage}
          >
            <Button.Content visible>
              <Icon name="comments" />
            </Button.Content>
            <Button.Content hidden>Post</Button.Content>
          </Button>
        </div>
        {this.state.error && <div id="errorContainer">{this.state.error}</div>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postMessage: text => {
      dispatch(postMessage(text));
    }
  };
};

export default connect(null, mapDispatchToProps)(NewMessageEntry);
