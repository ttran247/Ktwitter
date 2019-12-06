import { CREATE_USER, LOGIN } from "../../actionTypes";

const initialState = {
  loading: false,
  error: null
};

export const createUser = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER.START:
      return {
        loading: true,
        error: null
      };
    case CREATE_USER.SUCCESS:
      return {
        ...state,
        loading: false
      };
    case CREATE_USER.FAIL:
      return {
        loading: false,
        error: action.payload
      };
    case LOGIN.SUCCESS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
