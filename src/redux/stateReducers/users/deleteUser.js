import { DELETE_USER } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  user: null,
  loading: false,
  error: null
};

const deleteUser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default withAsyncReducer(DELETE_USER, deleteUser);
