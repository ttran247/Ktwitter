import { GET_ALL_USERS, LOGOUT } from "../../actionTypes";

const initialState = {
  users: null,
  loading: false,
  error: null
};

export const getAllUsers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS.START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_ALL_USERS.SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    case GET_ALL_USERS.FAIL:
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
