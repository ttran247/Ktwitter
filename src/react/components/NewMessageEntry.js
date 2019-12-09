import React from "react";
import { connect } from "react-redux";
import { postMessage, getMessages } from "../../redux/actionCreators";
import { Button, Icon, Modal } from "semantic-ui-react";
import "./NewMessageEntry.css";

class NewMessageEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      error: null,
      modalOpen: false
    };
  }

  handleChange = event => {
    if (this.state.inputValue.length <= 140) {
      this.setState({
        inputValue: event.target.value,
        error: null
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
      this.setState({ inputValue: "" });
      this.closeModal();
    } else {
      this.setState({
        inputValue: "",
        error:
          "Oops! Clearly you have something to say, but why not type it first?"
      });
    }
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  render() {
    let typedChars = this.state.inputValue.length;
    return (
      <div id="entryContainer">
        <Modal
          trigger={
            <Button
              icon
              animated
              style={{
                backgroundColor: "var(--kenzieBlue)",
                color: "var(--kenzieGreen)",
                width: "15%"
              }}
              onClick={this.openModal}
            >
              <Button.Content visible>
                <Icon name="edit" size="big" />
              </Button.Content>
              <Button.Content hidden>New Post</Button.Content>
            </Button>
          }
          style={{ width: "40%", height: "30%" }}
          open={this.state.modalOpen}
          closeIcon
          onClose={this.closeModal}
        >
          <Modal.Content
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <textarea
              placeholder="Write a new post here..."
              maxLength="140"
              onChange={this.handleChange}
              value={this.state.inputValue}
              style={{
                width: "100%",
                border: "none"
              }}
              rows="6"
              autoFocus="true"
            />
            {typedChars}/140 characters
            <Button
              animated
              style={{
                backgroundColor: "var(--kenzieBlue)",
                color: "var(--kenzieGreen)",
                textAlign: "center"
              }}
              onClick={this.postNewMessage}
            >
              <Button.Content visible>
                <Icon name="comments" />
              </Button.Content>
              <Button.Content hidden>Post</Button.Content>
            </Button>
            {this.state.error && (
              <div id="errorContainer">{this.state.error}</div>
            )}
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postMessage: text => {
      dispatch(postMessage(text));
    },
    reloadMessages: () => {
      dispatch(getMessages());
    }
  };
};

export default connect(null, mapDispatchToProps)(NewMessageEntry);
