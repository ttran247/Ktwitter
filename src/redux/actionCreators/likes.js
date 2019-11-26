import {LIKES} from "../actionTypes"
import {domain, handleJsonResponse } from "./constants"

const URL = domain + "/likes"

export const likes = () => {
    return dispatch => {
        dispatch({
            type:LIKES
        });
        return fetch (URL)
        .then (response => handleJsonResponse)
        .then (data => 
            dispatch({
                type: LIKES,
                payload: data.likes
            })
            )
            .catch (error =>
                dispatch({
                    type:LIKES.FAIL,
                    payload:error
                }) )
    };
};