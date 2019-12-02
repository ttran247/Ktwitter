import { DELETE_MESSAGE } from "../actionTypes";
import { domain, handleJsonResponse, jsonHeaders } from ".constants";
import { store } from "../index";
const URL = domain + "/delete/messages/{messageId}";

export const deleteMessage = messageId => {
  return dispatch => {
    dispatch({
      type: DELETE_MESSAGE.START
    });

    const token = store.getState().auth.login.result.token;

    return fetch(URL, {
      method: "POST",
      headers: {
        Authorirzation: `Bearer ${token}`,
        ...jsonHeaders
      },
      body: JSON.stringify({ messageID: messageId })
    })
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: DELETE_MESSAGE.SUCCESS
        })
      )
      .catch(error => {
        dispatch({
          type: DELETE_MESSAGE,
          payload: error
        });
      });
  };
};
