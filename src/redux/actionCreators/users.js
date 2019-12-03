import { GET_USER } from "../actionTypes";
import { CHANGE_PICTURE } from "../actionTypes";
import { UPDATE_ABOUT } from "../actionTypes"
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

export const ChangePicture = picture => {
  return dispatch => {
    dispatch({
      type: CHANGE_PICTURE.START
    });

    return fetch(URL + `/${username}/picture`, {
    method: "PUT",
    headers: jsonHeaders,
    body: JSON.stringify({
        picture: picture
    })
})  
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: CHANGE_PICTURE.SUCCESS,
          payload: data.statusCode
        })
      )
      .catch(error =>
        dispatch({
          type: CHANGE_PICTURE.FAIL,
          payload: error 
        })
      );
  };
};

export const updateAbout = data => {
  return dispatch => {
    dispatch({
      type: UPDATE_ABOUT.START
    });

    return fetch(URL + `/${username}`, {
    method: "PATCH",
    headers: jsonHeaders,
    body: JSON.stringify({
        data: data
    })
})  
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: UPDATE_ABOUT.SUCCESS,
          payload: data.about
        })
      )
      .catch(error =>
        dispatch({
          type: UPDATE_ABOUT.FAIL,
          payload: error 
        })
      );
  };
};