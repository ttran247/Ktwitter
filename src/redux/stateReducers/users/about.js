import { UPDATE_ABOUT, LOGOUT } from "../../actionTypes";

const initialState = {
  result: null,
  loading: false,
  error: null
};

export const updateUserAbout = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ABOUT.START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case UPDATE_ABOUT.SUCCESS:
      return {
        ...state,
        result: action.payload,
        loading: false
      };
    case UPDATE_ABOUT.FAIL:
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
