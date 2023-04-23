import Axios from 'axios'
import {infoProjectDto} from "../../../app/dto/infoProjectDto";
import {
    IMAGE_CAROUSEL_REQUEST,
    IMAGE_CAROUSEL_SUCCESS,
    IMAGE_CAROUSEL_FAIL,
    IMAGE_PHOTO_REQUEST,
    IMAGE_PHOTO_SUCCESS,
    IMAGE_PHOTO_FAIL,
    IMAGE_WIDGET_REQUEST,
    IMAGE_WIDGET_SUCCESS,
    IMAGE_WIDGET_FAIL
} from '../constants/imageConstants'

export const imageCarouselAction = (pageId, typeImage) => async (dispatch) => {
    dispatch({type: IMAGE_CAROUSEL_REQUEST, payload: {pageId, typeImage}});
    try {
        const {data} = await Axios.get(`/image?pageId=${pageId}&typeImage=${typeImage}`);
        console.log("data Carousel", data)
        dispatch({type: IMAGE_CAROUSEL_SUCCESS, payload: data});
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

export const imagePhotoAction = (pageId, typeImage) => async (dispatch) => {
    dispatch({type: IMAGE_PHOTO_REQUEST, payload: {pageId, typeImage}});
    try {
        const {data} = await Axios.get(`/image?pageId=${pageId}&typeImage=${typeImage}`);
        console.log("data Photo", data)
        dispatch({type: IMAGE_PHOTO_SUCCESS, payload: data});
    } catch (error) {
        dispatch({
            type: IMAGE_PHOTO_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const imageWidgetAction = (start, end) => async (dispatch) => {
    dispatch({type: IMAGE_WIDGET_REQUEST, payload: {start, end}});
    try {
        const projectWidget = [];
        const projects = await Axios.get(`/portfolio?_start=${start}&_end=${end}`);
        console.log("Portfolio Widget projects: ", projects.data);

        const images = await Axios.get(`/image?id=${projects.data[0].imageProjectId}&id=${projects.data[1].imageProjectId}&id=${projects.data[2].imageProjectId}`);
        console.log("Portfolio Widget images: ", images.data);

        projects.data.forEach((project, index) => {
            const projectTmp = new infoProjectDto(project.id, project.title, project.category, images.data[index].src, images.data[index].thumbnail, images.data[index].alt);
            projectWidget.push(projectTmp);
        });

        console.log("Portfolio Widget projectWidget: ", projectWidget);
        dispatch({type: IMAGE_WIDGET_SUCCESS, payload: projectWidget});
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