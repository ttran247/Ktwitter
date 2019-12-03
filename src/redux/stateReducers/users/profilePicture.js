import { CHANGE_PICTURE } from "../../actionTypes";

const initialState = {
    result: null,
    loading: false,
    error: null
  };

  export const changeUserPhoto = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_PICTURE.START:
        return {
          loading: true,
          error: null
        };
      case CHANGE_PICTURE.SUCCESS:
        return {
          result: action.payload,
          loading: false
        };
      case CHANGE_PICTURE.FAIL:
        return {
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };