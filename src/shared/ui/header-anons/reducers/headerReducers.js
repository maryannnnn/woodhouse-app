import {HEADER_LIST_REQUEST, HEADER_LIST_SUCCESS, HEADER_LIST_FAIL} from '../constants/headerConstants'

const initialState = {
    headers: [],
    isLoadingHeader: false,
    errorHeader: ''
}

export const headerListReducer = (state = initialState, action) => {
    switch (action.type) {
        case HEADER_LIST_REQUEST:
            return {...state, isLoadingHeader: true }
        case HEADER_LIST_SUCCESS:
            return {
              ...state,
              headers: action.payload,
              isLoadingHeader: false
            }
        case HEADER_LIST_FAIL:
            return {...state, errorHeader: action.payload, isLoadingHeader: false}
        default:
            return state
    }
}