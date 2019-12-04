import { GET_MESSAGES } from "../../actionTypes";

const initialState = {
  messages: null,
  loading: false,
  error: null
};

export const getMessageFeed = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES.START:
      return {
        loading: true,
        error: null
      };
    case GET_MESSAGES.SUCCESS:
      return {
        messages: action.payload,
        loading: false
      };
    case GET_MESSAGES.FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
