import Axios from 'axios'
import {
  IMAGE_CAROUSEL_REQUEST,
  IMAGE_CAROUSEL_SUCCESS,
  IMAGE_CAROUSEL_FAIL,
  IMAGE_WIDGET_REQUEST,
  IMAGE_WIDGET_SUCCESS,
  IMAGE_WIDGET_FAIL
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

export const imageWidgetAction = (start, end, typeImage) => async (dispatch) => {
  dispatch({ type: IMAGE_WIDGET_REQUEST, payload: { start, end, typeImage } });
  try {
    const { data } = await Axios.get(`/image?typeImage=${typeImage}&_start=${start}&_end=${end}`);
    console.log("data Portfolio Widget", data)
    dispatch({ type: IMAGE_WIDGET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: IMAGE_WIDGET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};