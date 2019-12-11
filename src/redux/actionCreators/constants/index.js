import { LOGOUT } from "../../actionTypes";

export const domain = "https://kwitter-dream-team.herokuapp.com";

export const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const handleJsonResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then(result => {
    throw result;
  });
};

export const handle401Error = (error, dispatch) => {
  if (error.statusCode === 401) {
    return dispatch({
      type: LOGOUT.SUCCESS,
      payload: { statusCode: 200 }
    });
  }
};
