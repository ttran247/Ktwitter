import { DELETE_LIKE } from "../../actionTypes";

const initialState = {
  loading: false,
  error: null
};

export const deleteLike = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_LIKE.START:
      return {
        loading: true,
        error: null
      };
    case DELETE_LIKE.SUCCESS:
      return {
        loading: false
      };

    case DELETE_LIKE.FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
