import { GET_USER } from "../../actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null
};

export default getCurrentUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER.START:
      console.log("We've started getting user data");
      return {
        loading: true,
        error: null
      };
    case GET_USER.SUCCESS:
      console.log("We've got a user object!");
      return {
        user: action.payload,
        loading: false
      };
    case GET_USER.FAIL:
      console.log("We couldn't get a user");
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
