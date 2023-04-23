import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_WIDGET_REQUEST,
  USER_WIDGET_SUCCESS,
  USER_WIDGET_FAIL
} from '../constants/userConstants'

export const userListReducer = (state = {
  users: [],
  isLoadingUser: false,
  errorUser: ''
}, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state, isLoadingUser: true
      }
      case USER_LIST_SUCCESS:
        return {
          ...state,
          users: action.payload,
            //   pages: action.payload.pages,
            //   page: action.payload.page,
            isLoadingUser: false
        }
        case USER_LIST_FAIL:
          return {
            ...state, errorUser: action.payload, isLoadingUser: false
          }
          default:
            return state
  }
}

export const userWidgetReducer = (state = {
  users: [],
  isLoadingUser: false,
  errorUser: ''
}, action) => {
  switch (action.type) {
    case USER_WIDGET_REQUEST:
      return {
        ...state, isLoadingUser: true
      }
      case USER_WIDGET_SUCCESS:
        return {
          ...state,
          users: action.payload,
            isLoadingUser: false
        }
        case USER_WIDGET_FAIL:
          return {
            ...state, errorUser: action.payload, isLoadingUser: false
          }
          default:
            return state
  }
}

export const userDetailsReducer = (state = {
  user: {}, isLoadingUser: false
}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state, isLoadingUser: true
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state, isLoadingUser: false, user: action.payload
      };
    case USER_DETAILS_FAIL:
      return {
        ...state, isLoadingUser: false, errorUser: action.payload
      };
    default:
      return state;
  }
};