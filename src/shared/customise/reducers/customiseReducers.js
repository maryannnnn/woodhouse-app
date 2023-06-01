import {
  CUSTOMISE_REQUEST,
  CUSTOMISE_SUCCESS,
  CUSTOMISE_FAIL
} from "../consts";

const initialState={
  customise: {},
  isLoadingCustomise: false,
  errorCustomise: false
}

export const customiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMISE_REQUEST:
      return {...state, isLoadingCustomise: true }
    case CUSTOMISE_SUCCESS:
      return {
        ...state,
        customise: action.payload,
        isLoadingCustomise: false
      }
    case CUSTOMISE_FAIL:
      return {...state, errorCustomise: action.payload, isLoadingCustomise: false}
    default:
      return state
  }
}
