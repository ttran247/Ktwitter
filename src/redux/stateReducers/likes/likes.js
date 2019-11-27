import { ADD_LIKE } from "../../actionTypes";
import { CommentAction } from "semantic-ui-react";

const initialState = { 
    loading: false,
     error: null
     }

export const addLike = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIKE.START:
            return {

                loading: true,
                error: null

            }
        case ADD_LIKE.SUCCESS:
            return {
                loading: false,
            }
        case ADD_LIKE.FAIL:
            return {
            
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}