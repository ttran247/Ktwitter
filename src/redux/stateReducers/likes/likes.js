import { LIKES } from "../../actionTypes";
import { CommentAction } from "semantic-ui-react";

const initialState = { 
    likes: null, 
    loading: false,
     error: null
     }

export const Likes = (state = initialState, action) => {
    switch (action.type) {
        case LIKES.START:
            return {
                loading: true,
                error: null

            }
        case LIKES.SUCCESS
            return {
                messages: action.payload,
                loading: true 
            }
        case LIKES.FAIL:
            return {
                likes: false,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}