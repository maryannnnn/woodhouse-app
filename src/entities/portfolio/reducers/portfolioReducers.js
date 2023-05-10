import {
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
  PORTFOLIO_LIST_FAIL,
  PORTFOLIO_DETAILS_REQUEST,
  PORTFOLIO_DETAILS_SUCCESS,
  PORTFOLIO_DETAILS_FAIL,
  PORTFOLIO_WIDGET_REQUEST,
  PORTFOLIO_WIDGET_SUCCESS,
  PORTFOLIO_WIDGET_FAIL
} from '../constants/portfolioConstants'

export const portfolioListReducer = (state = {
  projects: [],
  totalPages: 0,
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
          projects: action.payload.projects,
          totalPages: action.payload.totalPages,
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

export const portfolioWidgetReducer = (state = {
  projects: [],
  isLoadingProject: false,
  errorProject: ''
}, action) => {
  switch (action.type) {
    case PORTFOLIO_WIDGET_REQUEST:
      return {
        ...state, isLoadingProject: true
      }
    case PORTFOLIO_WIDGET_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        isLoadingProject: false
      }
    case PORTFOLIO_WIDGET_FAIL:
      return {
        ...state, errorProject: action.payload, isLoadingProject: false
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