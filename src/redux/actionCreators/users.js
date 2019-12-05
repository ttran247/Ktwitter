import { GET_USER, GET_ALL_USERS } from "../actionTypes";
import { CHANGE_PICTURE } from "../actionTypes";
import { UPDATE_ABOUT } from "../actionTypes";
import { domain, handleJsonResponse } from "./constants";
import { store } from "../index";
import { jsonHeaders } from "../actionCreators/constants/index";

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

export const changePicture = picture => {
  const username = store.getState().auth.login.result.username;
  const token = store.getState().auth.login.result.token;
  return dispatch => {
    dispatch({
      type: CHANGE_PICTURE.START
    });

    return fetch(URL + `/${username}/picture`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        ...jsonHeaders
      },
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
  const username = store.getState().auth.login.result.username;
  const token = store.getState().auth.login.result.token;
  return dispatch => {
    dispatch({
      type: UPDATE_ABOUT.START
    });

    return fetch(URL + `/${username}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        ...jsonHeaders
      },
      body: JSON.stringify({
        data: data
      })
    })
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: UPDATE_ABOUT.SUCCESS,
          payload: data.statusCode
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

export const getAllUsers = () => {
  return dispatch => {
    dispatch({
      type: GET_ALL_USERS.START
    });

    return fetch(URL)
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: GET_ALL_USERS.SUCCESS,
          payload: data.users
        })
      )
      .catch(error =>
        dispatch({
          type: GET_ALL_USERS.FAIL,
          payload: error
        })
      );
  };
};
