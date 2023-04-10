import {
  IMAGE_CAROUSEL_REQUEST,
  IMAGE_CAROUSEL_SUCCESS,
  IMAGE_CAROUSEL_FAIL,
  IMAGE_WIDGET_REQUEST,
  IMAGE_WIDGET_SUCCESS,
  IMAGE_WIDGET_FAIL
} from '../constants/imageConstants'

export const imageCarouselReducer = (state = {
  images: [],
  isLoadingImage: false,
  errorImage: ''
}, action) => {
  switch (action.type) {
    case IMAGE_CAROUSEL_REQUEST:
      return {
        ...state, isLoadingImage: true
      }
      case IMAGE_CAROUSEL_SUCCESS:
        return {
          ...state,
          images: action.payload,
            isLoadingImage: false
        }
        case IMAGE_CAROUSEL_FAIL:
          return {
            ...state, errorImage: action.payload, isLoadingImage: false
          }
          default:
            return state
  }
}

export const imageWidgetReducer = (state = {
  images: [],
  isLoadingImage: false,
  errorImage: ''
}, action) => {
  switch (action.type) {
    case IMAGE_WIDGET_REQUEST:
      return {
        ...state, isLoadingImage: true
      }
      case IMAGE_WIDGET_SUCCESS:
        return {
          ...state,
          images: action.payload,
            isLoadingImage: false
        }
        case IMAGE_WIDGET_FAIL:
          return {
            ...state, errorImage: action.payload, isLoadingImage: false
          }
          default:
            return state
  }
}