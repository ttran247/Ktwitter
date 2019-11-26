import { GET_USER } from "../actionTypes";
import { domain, handleJsonResponse } from "./constants";

const URL = domain + "/users";

export const getSingleUser = username => {
  return dispatch => {
    dispatch({
      type: GET_USER.START
    });

    return fetch(URL + `/${username}`)
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
