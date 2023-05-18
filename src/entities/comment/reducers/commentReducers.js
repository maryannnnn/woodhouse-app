import {
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_FAIL
} from '../constants/commentConstants'

export const commentListReducer = (state = {
    comments: [],
    isLoadingComment: false,
    errorComment: ''
}, action) => {
    switch (action.type) {
        case COMMENT_LIST_REQUEST:
            return {
                ...state, isLoadingComment: true
            }
        case COMMENT_LIST_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                isLoadingComment: false
            }
        case COMMENT_LIST_FAIL:
            return {
                ...state, errorComment: action.payload, isLoadingComment: false
            }
        default:
            return state
    }
}