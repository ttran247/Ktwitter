import { CHANGE_PICTURE, LOGOUT } from "../../actionTypes";

const initialState = {
  result: null,
  loading: false,
  error: null
};

export const changeUserPhoto = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PICTURE.START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case CHANGE_PICTURE.SUCCESS:
      return {
        ...state,
        result: action.payload,
        loading: false
      };
    case CHANGE_PICTURE.FAIL:
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
