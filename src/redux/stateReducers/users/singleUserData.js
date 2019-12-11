import { GET_USER, LOGOUT } from "../../actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null
};

export const getSingleUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER.START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_USER.SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case GET_USER.FAIL:
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
