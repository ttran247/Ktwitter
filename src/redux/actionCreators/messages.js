import {GET_MESSAGES} from "../actionTypes"
import { domain, handleJsonResponse } from "./constants"

const url = domain + "/messages"

export const getMessageArray = () => {
    return dispatch => {
        dispatch ({
            type: GET_MESSAGES.START
        })
    

        return fetch(url)
        .then(response => handleJsonResponse(response))
        .then(data =>
          dispatch({
            type: GET_MESSAGES.SUCCESS,
            payload: data.messages
          })
        )

        .catch(error => 
            dispatch({
            type: GET_MESSAGES.FAIL,
            payload: error
            }))
    } 
}
