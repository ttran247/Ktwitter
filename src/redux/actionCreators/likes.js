import { ADD_LIKE } from "../actionTypes"
import { domain, handleJsonResponse, jsonHeaders } from "./constants"
import { store } from "../index"
const URL = domain + "/likes"

export const addLike = (messageId) => {
    return dispatch => {
        dispatch({
            type: ADD_LIKE.START
        });
        const token = store.getState().auth.login.result.token
        console.log(messageId, token)

        return fetch(URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                ...jsonHeaders
            },
            body: JSON.stringify({messageId:messageId})
        })
            .then(response => handleJsonResponse(response))
            .then(data =>
                dispatch({
                    type: ADD_LIKE.SUCCESS
                
                })
            )
            .catch(error=>{
                console.log(error.headers)
                dispatch({
                    type:ADD_LIKE.FAIL,
                    payload:error
                })
            })
                
    };
};