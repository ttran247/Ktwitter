import { create } from "domain";

const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
export const GET_USER = createActionTypes("GET_USER");
export const GET_MESSAGES = createActionTypes("GET_MESSAGES")
export const ADD_LIKE = createActionTypes("ADD_LIKE")
