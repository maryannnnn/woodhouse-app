import {
  PARAMETER_DETAILS_REQUEST,
  PARAMETER_DETAILS_SUCCESS,
  PARAMETER_DETAILS_FAIL,
} from '../constants/parameterConstants'

export const parameterDetailsReducer = (state = {
  parameter: {}, isLoadingParameter: false
}, action) => {
  switch (action.type) {
    case PARAMETER_DETAILS_REQUEST:
      return {
        ...state, isLoadingParameter: true
      };
    case PARAMETER_DETAILS_SUCCESS:
      return {
        ...state, isLoadingParameter: false, parameter: action.payload
      };
    case PARAMETER_DETAILS_FAIL:
      return {
        ...state, isLoadingParameter: false, errorParameter: action.payload
      };
    default:
      return state;
  }
};