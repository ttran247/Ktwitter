import React from "react";
import { Menu } from "semantic-ui-react";
import "./ProfileFeed.css";

class ProfileFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "Messages"
    };
  }

  switchTabs = (event, { name }) => {
    this.setState({ active: name });
  };

  render() {
    const { active } = this.state;
    return (
      <React.Fragment>
        <div id="profileFeed-space">
          <Menu pointing>
            <Menu.Item
              name="Messages"
              active={active === "Messages"}
              onClick={this.switchTabs}
            />
            <Menu.Item
              name="Likes"
              active={active === "Likes"}
              onClick={this.switchTabs}
            />
          </Menu>
        </div>
        <div id="profileFeed-feed">
          {active === "Messages"
            ? "this shows if messages is selected"
            : "this shows if likes is selected"}
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileFeed;
