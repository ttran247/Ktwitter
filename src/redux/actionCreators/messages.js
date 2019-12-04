import { GET_MESSAGES, POST_MESSAGE, DELETE_MESSAGE } from "../actionTypes";
import { domain, handleJsonResponse, jsonHeaders } from "./constants";
import { store } from "../index";

const url = domain + "/messages";

export const getMessageArray = () => {
  return dispatch => {
    dispatch({
      type: GET_MESSAGES.START
    });

    return fetch(url)
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

    return fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        ...jsonHeaders
      },
      body: JSON.stringify({ text })
    })
      .then(response => handleJsonResponse(response))
      .then(data => {
        console.log(data);
        dispatch({
          type: POST_MESSAGE.SUCCESS,
          payload: data
        });
      })
      .catch(error =>
        dispatch({
          type: POST_MESSAGE.FAIL,
          payload: error
        })
      );
  };
};

export const deleteMessage = messageId => {
  return dispatch => {
    dispatch({
      type: DELETE_MESSAGE.START
    });

    const token = store.getState().auth.login.result.token;

    return fetch(URL + messageId, {
      method: "DELETE",
      headers: {
        Authorirzation: `Bearer ${token}`,
        ...jsonHeaders
      },
      body: JSON.stringify({ messageId: messageId })
    })
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: DELETE_MESSAGE.SUCCESS
        })
      )
      .catch(error => {
        dispatch({
          type: DELETE_MESSAGE.FAIL,
          payload: error
        });
      });
  };
};
