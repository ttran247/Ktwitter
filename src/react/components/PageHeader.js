import React from "react";
import "./PageHeader.css";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header">
        <h1>{this.props.title}</h1>
        <h4>{this.props.tagLine}</h4>
      </div>
    );
  }
}

export default PageHeader;
