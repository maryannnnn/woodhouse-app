import {PORTFOLIO_LIST_REQUEST, PORTFOLIO_LIST_SUCCESS, PORTFOLIO_LIST_FAIL} from '../constants/portfolioConstants'

const initialState = {
    projects: [],
    isLoadingPortfolio: false,
    errorPortfolio: ''
}

export const portfolioListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PORTFOLIO_LIST_REQUEST:
            return {...state, isLoadingPortfolio: true }
        case PORTFOLIO_LIST_SUCCESS:
            return {
              ...state,
              projects: action.payload,
           //   pages: action.payload.pages,
           //   page: action.payload.page,
              isLoadingPortfolio: false
            }
        case PORTFOLIO_LIST_FAIL:
            return {...state, errorPortfolio: action.payload, isLoadingPortfolio: false}
        default:
            return state
    }
}