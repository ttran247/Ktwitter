import { UPDATE_ABOUT } from "../../actionTypes"

const initialState = {
    result: null,
    loading: false,
    error: null
  };

  export const updateUserAbout = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_ABOUT.START:
        return {
          loading: true,
          error: null
        };
      case UPDATE_ABOUT.SUCCESS:
        return {
          result: action.payload,
          loading: false
        };
      case UPDATE_ABOUT.FAIL:
        return {
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };