import {
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
  PORTFOLIO_LIST_FAIL,
  PORTFOLIO_DETAILS_REQUEST,
  PORTFOLIO_DETAILS_SUCCESS,
  PORTFOLIO_DETAILS_FAIL
} from '../constants/portfolioConstants'

export const portfolioListReducer = (state = {
  projects: [],
  isLoadingPortfolio: false,
  errorPortfolio: ''
}, action) => {
  switch (action.type) {
    case PORTFOLIO_LIST_REQUEST:
      return {
        ...state, isLoadingPortfolio: true
      }
      case PORTFOLIO_LIST_SUCCESS:
        return {
          ...state,
          projects: action.payload,
            //   pages: action.payload.pages,
            //   page: action.payload.page,
            isLoadingPortfolio: false
        }
        case PORTFOLIO_LIST_FAIL:
          return {
            ...state, errorPortfolio: action.payload, isLoadingPortfolio: false
          }
          default:
            return state
  }
}

export const portfolioDetailsReducer = (state = {
  project: {}, isLoadingProject: false
}, action) => {
  switch (action.type) {
    case PORTFOLIO_DETAILS_REQUEST:
      return {
        ...state, isLoadingProject: true
      };
    case PORTFOLIO_DETAILS_SUCCESS:
      return {
        ...state, isLoadingProject: false, project: action.payload
      };
    case PORTFOLIO_DETAILS_FAIL:
      return {
        ...state, isLoadingProject: false, errorProject: action.payload
      };
    default:
      return state;
  }
};