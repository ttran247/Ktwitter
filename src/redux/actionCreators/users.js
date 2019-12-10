import {
  GET_USER,
  GET_ALL_USERS,
  DELETE_USER,
  CHANGE_PICTURE,
  UPDATE_ABOUT,
  CREATE_USER,
  LOGOUT
} from "../actionTypes";
import { domain, handleJsonResponse, handle401Error } from "./constants";
import { store } from "../index";
import { jsonHeaders } from "../actionCreators/constants/index";
import { login, logout } from "./auth";

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

export const changePicture = formTag => {
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
        Accept: "application/json"
      },
      body: new FormData(formTag)
    })
      .then(response => handleJsonResponse(response))
      .then(result => {
        dispatch({
          type: CHANGE_PICTURE.SUCCESS,
          payload: result
        });
        dispatch(getSingleUser(username));
      })
      .catch(error => {
        handle401Error(error, dispatch);
        dispatch({
          type: CHANGE_PICTURE.FAIL,
          payload: error
        });
      });
  };
};

export const updateAbout = bioData => {
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
        about: bioData
      })
    })
      .then(response => handleJsonResponse(response))
      .then(data => {
        dispatch({
          type: UPDATE_ABOUT.SUCCESS,
          payload: data.statusCode
        });
        dispatch(getSingleUser(username));
      })
      .catch(error => {
        handle401Error(error, dispatch);
        dispatch({
          type: UPDATE_ABOUT.FAIL,
          payload: error
        });
      });
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
export const deleteUser = username => {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_USER.START
    });

    const token = getState().auth.login.result.token;

    return fetch(URL + `/${username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        ...jsonHeaders
      }
    })
      .then(response => handleJsonResponse(response))
      .then(() => {
        dispatch({
          type: LOGOUT.SUCCESS,
          payload: { statusCode: 200 }
        });
        return dispatch({
          type: DELETE_USER.SUCCESS
        });
      })
      .catch(error => {
        handle401Error(error);
        return dispatch({
          type: DELETE_USER.FAIL,
          payload: error
        });
      });
  };
};

export const createNewUser = (username, displayName, password) => {
  return dispatch => {
    dispatch({
      type: CREATE_USER.START
    });

    return fetch(URL, {
      method: "POST",
      headers: { ...jsonHeaders },
      body: JSON.stringify({
        username: username,
        displayName: displayName,
        password: password
      })
    })
      .then(response => handleJsonResponse(response))
      .then(data => {
        dispatch({
          type: CREATE_USER.SUCCESS
        });
        return dispatch(login({ username: username, password: password }));
      })
      .catch(error => {
        return dispatch({
          type: CREATE_USER.FAIL,
          payload: error
        });
      });
  };
};
