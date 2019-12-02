import { DELETE_LIKE } from "../actionTypes"
import {domain, handleJsonResponse, jsonHeaders } from ".constants"
import { store } from "../index"
const URL = domain + "/delete/likes"

export const deleteLike = (likeId) => {
    return dispatch => {
        dispatch({
            type: ADD_DELETE_LIKE.START
        });
    

const token = store.getState().auth.login.result.token

return fetch (URL, {
    method: "POST",
    headers: {
        Authorirzation: `Bearer ${token}`,
        ...jsonHeaders

    },
    body: JSON.stringify({likedID:likedId})
})

    .then(response => handleJsonResponse (response))
    .then(data => 
        dispatch ({
            type:DELETE_LIKE.SUCCESS
        })
        )
        .catch(error =>{
            dispatch({
                type: DELETE_LIKE,
                payload: error
            })
        })

    };

}; 