import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as auth from "./auth";
import * as users from "./users";
import * as messages from "./messages";
import * as likes from "./likes";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth: combineReducers(auth),
    user: combineReducers(users),
    messages: combineReducers(messages),
    likes: combineReducers(likes)
  });
export { default as deleteUser } from "./deleteUser";
