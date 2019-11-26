import { LIKES } from "../../actionTypes";
import { CommentAction } from "semantic-ui-react";

const initialState ={
    likes: 0,
    error: null
}

export const Likes = (state = initialState, action ) => {
    switch(action.type){
        case LIKES.SUCCESS:
            return {
                likes: +1,
                error:null

            }
        case LIKES.FAIL:
            return {
                likes: 0,
                error: null

            }
            default:
                return state;
    }
}