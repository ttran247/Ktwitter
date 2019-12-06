import { POST_MESSAGE, LOGOUT } from "../../actionTypes";

const initialState = {
  result: null,
  loading: false,
  error: null
};

export const postMessage = (state = initialState, action) => {
  switch (action.payload) {
    case POST_MESSAGE.START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case POST_MESSAGE.SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload
      };
    case POST_MESSAGE.FAIL:
      return {
        result: null,
        loading: false,
        error: action.payload
      };
    case LOGOUT.SUCCESS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
