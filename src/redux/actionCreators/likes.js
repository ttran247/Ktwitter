import { ADD_LIKE } from "../actionTypes"
import { domain, handleJsonResponse } from "./constants"
import { store } from "../index"
const URL = domain + "/likes"

export const addLike = (messageId) => {
    return dispatch => {
        dispatch({
            type: ADD_LIKE.START
        });
        const token = store.getState().auth.login.result.token

        return fetch(URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                ...handleJsonResponse
            },
            body: JSON.stringify({messageId:messageId})
        })
            .then(response => handleJsonResponse)
            .then(data =>
                dispatch({
                    type: ADD_LIKE.SUCCESS
                
                })
            )
            .catch(error =>
                dispatch({
                    type: ADD_LIKE.FAIL,
                    payload: error
                }))
    };
};