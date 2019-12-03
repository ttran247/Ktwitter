import { GET_USER } from "../../actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null
};

export const getSingleUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER.START:
      return {
        loading: true,
        error: null
      };
    case GET_USER.SUCCESS:
      return {
        user: action.payload,
        loading: false
      };
    case GET_USER.FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
