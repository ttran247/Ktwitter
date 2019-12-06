import { DELETE_USER, LOGOUT } from "../../actionTypes";

const initialState = {
  loading: false,
  error: null
};

export const deleteUser = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER.START:
      return {
        loading: true,
        error: null
      };
    case DELETE_USER.SUCCESS:
      return {
        loading: false
      };
    case DELETE_USER.FAIL:
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
