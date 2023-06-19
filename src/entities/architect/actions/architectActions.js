import Axios from 'axios'
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
import {infoUserDto} from "../../../app/dto/infoUserDto";
import {infoProjectDto} from "../../../app/dto/infoProjectDto";

export const architectListAction = () => async (dispatch) => {
    dispatch({type: ARCHITECT_LIST_REQUEST});
  try {
    const architects = await Axios.get('/user?role=architect')
    //console.log("data architect List", architects.data)
    dispatch({type: ARCHITECT_LIST_SUCCESS, payload: architects.data});
  } catch (error) {
    dispatch({
      type: ARCHITECT_LIST_FAIL,
      payload: error.response && error.response.data.message ?
        error.response.data.message :
        error.message,
    });
  }
}

export const architectWidgetAction = (start, end) => async (dispatch) => {
  dispatch({ type: ARCHITECT_WIDGET_REQUEST, payload: { start, end } });
  try {
    const architects = await Axios.get(`/user?_start=${start}&_end=${end}&role=architect`);
    //console.log("data architects  Widget", architects.data)
    dispatch({ type: ARCHITECT_WIDGET_SUCCESS, payload: architects.data });
  } catch (error) {
    dispatch({
      type: ARCHITECT_WIDGET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const architectDetailsAction = (userId) => async (dispatch) => {
  dispatch({ type: ARCHITECT_DETAILS_REQUEST, payload: userId });
  try {
    const architect = await Axios.get(`/user/${userId}`);

    const imageArchitect = await Axios.get(`/image/${architect.data.imageId}`);

    const projectsUser = await Axios.get(`/portfolio?architectId=${userId}`);

    const architectPromises = projectsUser.data.map(async (project) => {
      const image = await Axios.get(`/image/${project.imageProjectId}`);
      const parameter = await Axios.get(`/parameter/${project.parameterId}`);

      return new infoProjectDto(project.id, project.title, project.anons,
          image.data.src, image.data.thumbnail, image.data.alt, parameter.data.prices.price);
    });

    const architectProjectsList = await Promise.all(architectPromises);
    const architectProjectsListArray = Object.values(architectProjectsList)

    const userFull = new infoUserDto(architect.data.id, architect.data.name, architect.data.family, architect.data.nik,
        imageArchitect.data.src, imageArchitect.data.thumbnail, imageArchitect.data.alt,
        architect.data.anons, architect.data.info, architect.data.profession, architect.data.role);
    dispatch({ type: ARCHITECT_DETAILS_SUCCESS, payload: {architect: userFull, architectProjects: architectProjectsListArray} });
  } catch (error) {
    dispatch({
      type: ARCHITECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};