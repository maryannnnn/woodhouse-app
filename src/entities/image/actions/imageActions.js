import Axios from 'axios'
import {
  IMAGE_CAROUSEL_REQUEST,
  IMAGE_CAROUSEL_SUCCESS,
  IMAGE_CAROUSEL_FAIL
} from '../constants/imageConstants'

export const imageCarouselAction = (pageId, typeImage) => async (dispatch) => {
  dispatch({ type: IMAGE_CAROUSEL_REQUEST, payload: { pageId, typeImage } });
  try {
    const { data } = await Axios.get(`/image?pageId=${pageId}&typeImage=${typeImage}`);
    console.log("data Carousel", data)
    dispatch({ type: IMAGE_CAROUSEL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: IMAGE_CAROUSEL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};