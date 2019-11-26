import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as auth from "./auth";
import * as userData from "./users";
import * as messageData from "./messages"

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: combineReducers(auth),
    user: combineReducers(userData),
    messages: combineReducers(messageData)
  });
