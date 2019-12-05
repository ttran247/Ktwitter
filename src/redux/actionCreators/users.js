import { GET_USER, DELETE_USER } from "../actionTypes";
import { domain, handleJsonResponse, jsonHeaders } from "./constants";
import { url } from "inspector";

const url = domain + "/users";

export const deleteUser = () => (dispatch, getState) => {
  return Promise.reject(dispatch({ type: DELETE_USER.FAIL, payload: err }));
};

export const getSingleUser = username => {
  return dispatch => {
    dispatch({
      type: GET_USER.START
    });

    return fetch(url + `/${username}`)
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: GET_USER.SUCCESS,
          payload: data.user
        })
      )
      .catch(error =>
        dispatch({
          type: GET_USER.FAIL,
          payload: error
        })
      );
  };
};
// NEED TO ADD A WAY TO GO BACK TO MAIN SCREEN
export const deleteUser = () => (dispatch, getState) => {
  dispatch({
    type: DELETE_USER.START
  });
  const username = getState().auth.login.result.username;
  const token = store.getState().auth.login.result.token;
  const startingURL = url + "/" + messageId;
  console.log(token, startingURL, username);
  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      ...jsonHeaders
    }
  })
    .then(response => handleJsonResponse(response))
    .then(data =>
      dispatch({
        type: DELETE_USER.SUCCESS
      })
    )
    .catch(error => {
      console.log(error);
      dispatch({
        type: DELETE_USER.FAIL,
        payload: error
      });
    });
};
