import Axios from 'axios'
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
import {infoUserDto} from "../../../app/dto/infoUserDto";

export const userListAction = () => async (dispatch) => {
    dispatch({type: USER_LIST_REQUEST});
  try {
    const {data} = await Axios.get('/user')
    console.log("data User", data)
    dispatch({type: USER_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error.response && error.response.data.message ?
        error.response.data.message :
        error.message,
    });
  }
}

export const userWidgetAction = (start, end) => async (dispatch) => {
  dispatch({ type: USER_WIDGET_REQUEST, payload: { start, end } });
  try {
    const { data } = await Axios.get(`/user_start=${start}&_end=${end}`);
    console.log("data User Widget", data)
    dispatch({ type: USER_WIDGET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_WIDGET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userDetailsAction = (userId) => async (dispatch) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: userId });
  try {
    const user = await Axios.get(`/user/${userId}`);
    console.log("data User", user.data)

    const imageUser = await Axios.get(`/image/${user.data.imageId}`);
    console.log("user images: ", imageUser.data);

    const projectsUser = await Axios.get(`/portfolio?architectId=${userId}`);
    console.log("projectsUser: ", projectsUser.data);

    const userFull = new infoUserDto(user.data.id, user.data.name, user.data.family, user.data.nik, imageUser.data.src, imageUser.data.thumbnail, imageUser.data.alt,
        user.data.anons, user.data.info, user.data.profession, user.data.role, projectsUser.data);
    console.log("userFull: ", userFull);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: userFull });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};