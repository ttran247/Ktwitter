import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  handle401Error
} from "./constants";
import { LOGIN, LOGOUT } from "../actionTypes";

const URL = domain + "/auth";

export const login = loginData => dispatch => {
  dispatch({
    type: LOGIN.START
  });

  return fetch(URL + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: LOGIN.FAIL, payload: err }));
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT.START
  });

  const token = getState().auth.login.result.token;

  return fetch(URL + "/logout", {
    method: "GET",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      handle401Error(err);
      return Promise.reject(
        dispatch({ type: LOGOUT.FAIL, payload: err.message })
      );
    });
};
