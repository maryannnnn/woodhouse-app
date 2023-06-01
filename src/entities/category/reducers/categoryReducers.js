import {
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAIL,
} from '../constants/categoryConstants'

export const categoryDetailsReducer = (state = {
  category: {},
  categoryProjects: [],
  isLoadingCategory: false,
  errorCategory: ''
}, action) => {
  switch (action.type) {
    case CATEGORY_DETAILS_REQUEST:
      return {
        ...state, isLoadingCategory: true
      };
    case CATEGORY_DETAILS_SUCCESS:
      return {
        ...state,
        category: action.payload.category,
        categoryProjects: action.payload.categoryProjects,
        isLoadingCategory: false
      };
    case CATEGORY_DETAILS_FAIL:
      return {
        ...state, isLoadingCategory: false, errorCategory: action.payload
      };
    default:
      return state;
  }
};