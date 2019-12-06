import {
  GET_MESSAGES,
  POST_MESSAGE,
  DELETE_MESSAGE,
  GET_SINGLE_MESSAGE
} from "../actionTypes";
import {
  domain,
  handleJsonResponse,
  jsonHeaders,
  handle401Error
} from "./constants";
import { store } from "../index";

const URL = domain + "/messages";

export const getMessages = () => {
  return dispatch => {
    dispatch({
      type: GET_MESSAGES.START
    });

    return fetch(URL)
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: GET_MESSAGES.SUCCESS,
          payload: data.messages
        })
      )

      .catch(error =>
        dispatch({
          type: GET_MESSAGES.FAIL,
          payload: error
        })
      );
  };
};

export const postMessage = text => {
  return dispatch => {
    dispatch({
      type: POST_MESSAGE.START
    });

    const token = store.getState().auth.login.result.token;

    return fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        ...jsonHeaders
      },
      body: JSON.stringify({ text })
    })
      .then(response => handleJsonResponse(response))
      .then(data => {
        dispatch({
          type: POST_MESSAGE.SUCCESS,
          payload: data
        });
        return dispatch(getMessages());
      })
      .catch(error => {
        handle401Error(error);
        return dispatch({
          type: POST_MESSAGE.FAIL,
          payload: error
        });
      });
  };
};

export const deleteMessage = messageId => {
  return dispatch => {
    dispatch({
      type: DELETE_MESSAGE.START
    });

    const token = store.getState().auth.login.result.token;

    return fetch(URL + `/${messageId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        ...jsonHeaders
      }
    })
      .then(response => handleJsonResponse(response))
      .then(data => {
        dispatch({
          type: DELETE_MESSAGE.SUCCESS
        });
        return dispatch(getMessages());
      })
      .catch(error => {
        dispatch({
          type: DELETE_MESSAGE.FAIL,
          payload: error
        });
      });
  };
};
