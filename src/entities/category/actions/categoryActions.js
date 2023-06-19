import Axios from 'axios'
import {
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAIL,
 } from '../constants/categoryConstants'
import {categoryDto} from "../../../app/dto/categoryDto";
import {infoProjectDto} from "../../../app/dto/infoProjectDto";

export const categoryDetailsAction = (categoryId) => async (dispatch) => {
  dispatch({ type: CATEGORY_DETAILS_REQUEST, payload: categoryId });
  try {
    const category = await Axios.get(`/category/${categoryId}`);
    const categoryImage = await Axios.get(`/image/${category.data.imageId}`);
    const categoryProjects = await Axios.get(`/portfolio?categoryId=${categoryId}`);

    const categoryPromises = categoryProjects.data.map(async (project) => {
      const image = await Axios.get(`/image/${project.imageProjectId}`);
      const parameter = await Axios.get(`/parameter/${project.parameterId}`);

      return new infoProjectDto(project.id, project.title, project.anons,
          image.data.src, image.data.thumbnail, image.data.alt, parameter.data.prices.price);
    });

    const categoryProjectsList = await Promise.all(categoryPromises);
    const categoryProjectsListArray = Object.values(categoryProjectsList)
    const categoryFull = new categoryDto(category.data.id, category.data.name, category.data.description, categoryImage.data.src );
    dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: {category: categoryFull, categoryProjects: categoryProjectsListArray} });
  } catch (error) {
    dispatch({
      type: CATEGORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};