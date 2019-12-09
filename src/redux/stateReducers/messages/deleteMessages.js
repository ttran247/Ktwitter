import { DELETE_MESSAGE, LOGOUT } from "../../actionTypes";

const initialState = {
  loading: false,
  error: null
};

export const deleteMessage = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MESSAGE.START:
      return {
        loading: true,
        error: null
      };
    case DELETE_MESSAGE.SUCCESS:
      return {
        ...state,
        loading: false
      };
    case DELETE_MESSAGE.FAIL:
      return {
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
