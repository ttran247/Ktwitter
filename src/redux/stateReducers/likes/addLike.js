import { ADD_LIKE, LOGOUT } from "../../actionTypes";

const initialState = {
  loading: false,
  error: null
};

export const addLike = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE.START:
      return {
        loading: true,
        error: null
      };
    case ADD_LIKE.SUCCESS:
      return {
        ...state,
        loading: false
      };
    case ADD_LIKE.FAIL:
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
