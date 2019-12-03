import { ADD_LIKE, DELETE_LIKE } from "../actionTypes";
import { domain, handleJsonResponse, jsonHeaders } from "./constants";
import { store } from "../index";

const URL = domain + "/likes";

export const addLike = messageId => {
  return dispatch => {
    dispatch({
      type: ADD_LIKE.START
    });
    const token = store.getState().auth.login.result.token;
    console.log(messageId, token);

    return fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        ...jsonHeaders
      },
      body: JSON.stringify({ messageId: messageId })
    })
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: ADD_LIKE.SUCCESS
        })
      )
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
      method: "POST",
      headers: {
        Authorirzation: `Bearer ${token}`,
        ...jsonHeaders
      },
      body: JSON.stringify({ likedId: likeId })
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
