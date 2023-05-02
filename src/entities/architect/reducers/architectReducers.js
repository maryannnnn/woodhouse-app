import {
  ARCHITECT_LIST_REQUEST,
  ARCHITECT_LIST_SUCCESS,
  ARCHITECT_LIST_FAIL,
  ARCHITECT_DETAILS_REQUEST,
  ARCHITECT_DETAILS_SUCCESS,
  ARCHITECT_DETAILS_FAIL,
  ARCHITECT_WIDGET_REQUEST,
  ARCHITECT_WIDGET_SUCCESS,
  ARCHITECT_WIDGET_FAIL
} from '../constants/architectConstants'

export const architectListReducer = (state = {
  architects: [],
  isLoadingArchitect: false,
  errorArchitect: ''
}, action) => {
  switch (action.type) {
    case ARCHITECT_LIST_REQUEST:
      return {
        ...state, isLoadingArchitect: true
      }
      case ARCHITECT_LIST_SUCCESS:
        return {
          ...state,
          architects: action.payload,
            //   pages: action.payload.pages,
            //   page: action.payload.page,
            isLoadingArchitect: false
        }
        case ARCHITECT_LIST_FAIL:
          return {
            ...state, errorArchitect: action.payload, isLoadingArchitect: false
          }
          default:
            return state
  }
}

export const architectWidgetReducer = (state = {
  architects: [],
  isLoadingArchitect: false,
  errorArchitect: ''
}, action) => {
  switch (action.type) {
    case ARCHITECT_WIDGET_REQUEST:
      return {
        ...state, isLoadingArchitect: true
      }
      case ARCHITECT_WIDGET_SUCCESS:
        return {
          ...state,
          architects: action.payload,
            isLoadingArchitect: false
        }
        case ARCHITECT_WIDGET_FAIL:
          return {
            ...state, errorArchitect: action.payload, isLoadingArchitect: false
          }
          default:
            return state
  }
}

export const architectDetailsReducer = (state = {
  architect: {}, isLoadingArchitect: false
}, action) => {
  switch (action.type) {
    case ARCHITECT_DETAILS_REQUEST:
      return {
        ...state, isLoadingArchitect: true
      };
    case ARCHITECT_DETAILS_SUCCESS:
      return {
        ...state, isLoadingArchitect: false, architect: action.payload
      };
    case ARCHITECT_DETAILS_FAIL:
      return {
        ...state, isLoadingArchitect: false, errorArchitect: action.payload
      };
    default:
      return state;
  }
};