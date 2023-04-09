import {
  HEADER_LIST_REQUEST,
  HEADER_LIST_SUCCESS,
  HEADER_LIST_FAIL,
  HEADER_ZERO_REQUEST,
  HEADER_ZERO_SUCCESS,
  HEADER_ZERO_FAIL,
  HEADER_ONE_REQUEST,
  HEADER_ONE_SUCCESS,
  HEADER_ONE_FAIL
} from '../constants/headerConstants'

export const headerListReducer = (state = {
  headers: [],
  isLoadingHeader: false,
  errorHeader: ''
}, action) => {
  switch (action.type) {
    case HEADER_LIST_REQUEST:
      return {
        ...state, isLoadingHeader: true
      }
      case HEADER_LIST_SUCCESS:
        return {
          ...state,
          headers: action.payload,
            isLoadingHeader: false
        }
        case HEADER_LIST_FAIL:
          return {
            ...state, errorHeader: action.payload, isLoadingHeader: false
          }
          default:
            return state
  }
}

export const headerZeroReducer = (state = {
  header: {},
  isLoadingHeader: false
}, action) => {
  switch (action.type) {
    case HEADER_ZERO_REQUEST:
      return {
        ...state, isLoadingHeader: true
      };
    case HEADER_ZERO_SUCCESS:
      return {
        ...state, isLoadingHeader: false, header: action.payload
      };
    case HEADER_ZERO_FAIL:
      return {
        ...state, isLoadingHeader: false, errorHeader: action.payload
      };
    default:
      return state;
  }
};

export const headerOneReducer = (state = {
  header: {},
  isLoadingHeader: false
}, action) => {
  switch (action.type) {
    case HEADER_ONE_REQUEST:
      return {
        ...state, isLoadingHeader: true
      };
    case HEADER_ONE_SUCCESS:
      return {
        ...state, isLoadingHeader: false, header: action.payload
      };
    case HEADER_ONE_FAIL:
      return {
        ...state, isLoadingHeader: false, errorHeader: action.payload
      };
    default:
      return state;
  }
};