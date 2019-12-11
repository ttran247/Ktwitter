import { GET_MESSAGES, LOGOUT } from "../../actionTypes";

const initialState = {
  messages: null,
  loading: false,
  error: null
};

export const allMessages = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES.START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_MESSAGES.SUCCESS:
      return {
        ...state,
        messages: action.payload,
        loading: false
      };
    case GET_MESSAGES.FAIL:
      return {
        ...state,
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
