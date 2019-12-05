import React from "react";
import { Menu, PageHeader } from "../components";
import "./NotFound.css";
import { store } from "../../redux";

class NotFound extends React.Component {
  render() {
    return (
      <>
        {store.getState().auth.login.result ? (
          <Menu isAuthenticated={true} />
        ) : (
          <Menu isAuthenticated={false} />
        )}
        <div id="errorPage-space">
          <PageHeader title="Oops!" tagLine={`Something's not right...`} />
          <div id="errorPage-errorSpace">
            <div id="errorPage-errorReport">
              <h2>404</h2>
              <h3>Page not found</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NotFound;
