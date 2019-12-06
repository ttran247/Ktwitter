import {GET_SINGLE_MESSAGE, LOGOUT} from '../../actionTypes'

const initialState = {
    message: null,
    loading: false,
    error: null
}

export const singleMessage = (state = initialState, action) => {
    switch(action.type) {
        case GET_SINGLE_MESSAGE.START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_SINGLE_MESSAGE.SUCCESS:
            return {
                ...state,
                message: action.payload,
                loading: false
            };
        case GET_SINGLE_MESSAGE.FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case LOGOUT.SUCCESS:
            return {
                ...initialState
            };
        default:
            return state
    };
};