import { ADD_LIKE, DELETE_LIKE } from "../actionTypes";
import { domain, handleJsonResponse, jsonHeaders } from "./constants";
import { store } from "../index";
import { getMessages } from "./messages";

const URL = domain + "/likes/";

export const addLike = messageId => {
  return dispatch => {
    dispatch({
      type: ADD_LIKE.START
    });

    const token = store.getState().auth.login.result.token;

    return fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        ...jsonHeaders
      },
      body: JSON.stringify({ messageId: messageId })
    })
      .then(response => handleJsonResponse(response))
      .then(data => {
        dispatch({
          type: ADD_LIKE.SUCCESS
        });
        dispatch(getMessages());
      })
      .catch(error => {
        console.log(error.headers);
        dispatch({
          type: ADD_LIKE.FAIL,
          payload: error
        });
      });
  };
};

export const deleteLike = likeId => {
  return dispatch => {
    dispatch({
      type: DELETE_LIKE.START
    });

    const token = store.getState().auth.login.result.token;

    return fetch(URL + `${likeId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        ...jsonHeaders
      }
    })
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: DELETE_LIKE.SUCCESS
        })
      )
      .catch(error => {
        dispatch({
          type: DELETE_LIKE.FAIL,
          payload: error
        });
      });
  };
};
