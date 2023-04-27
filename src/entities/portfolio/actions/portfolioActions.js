import Axios from 'axios'
import {
    PORTFOLIO_LIST_REQUEST,
    PORTFOLIO_LIST_SUCCESS,
    PORTFOLIO_LIST_FAIL,
    PORTFOLIO_DETAILS_REQUEST,
    PORTFOLIO_DETAILS_SUCCESS,
    PORTFOLIO_DETAILS_FAIL,
    PORTFOLIO_WIDGET_REQUEST,
    PORTFOLIO_WIDGET_SUCCESS,
    PORTFOLIO_WIDGET_FAIL
} from '../constants/portfolioConstants'
import {infoProjectDto} from "../../../app/dto/infoProjectDto";

export const portfolioListAction = () => async (dispatch) => {
    dispatch({type: PORTFOLIO_LIST_REQUEST});
    try {
       // const projectList = [];
        const projects = await Axios.get(`/portfolio`);
        console.log("Portfolio List projects: ", projects.data);

        const imagePromises = projects.data.map(async (project) => {
            const image = await Axios.get(`/image/${project.imageProjectId}`);
            console.log("Portfolio List image: ", image.data);
            return new infoProjectDto(project.id, project.title, project.category, project.anons, image.data.src, image.data.thumbnail, image.data.alt);
        });

        const projectList = await Promise.all(imagePromises);

        console.log("Portfolio projectListFull: ", projectList);
        dispatch({type: PORTFOLIO_LIST_SUCCESS, payload: projectList});
    } catch (error) {
        dispatch({
            type: PORTFOLIO_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
}

export const portfolioWidgetAction = (start, end) => async (dispatch) => {
    dispatch({type: PORTFOLIO_WIDGET_REQUEST, payload: {start, end}});
    try {
        const projectWidget = [];
        const projects = await Axios.get(`/portfolio?_start=${start}&_end=${end}`);
        console.log("Portfolio Widget projects: ", projects.data);

        const images = await Axios.get(`/image?id=${projects.data[0].imageProjectId}&id=${projects.data[1].imageProjectId}&id=${projects.data[2].imageProjectId}`);
        console.log("Portfolio Widget images: ", images.data);

        projects.data.forEach((project, index) => {
            const projectTmp = new infoProjectDto(project.id, project.title, project.category, project.anons, images.data[index].src, images.data[index].thumbnail, images.data[index].alt);
            projectWidget.push(projectTmp);
        });

        console.log("Portfolio Widget projectWidget: ", projectWidget);
        dispatch({type: PORTFOLIO_WIDGET_SUCCESS, payload: projectWidget});
    } catch (error) {
        dispatch({
            type: PORTFOLIO_WIDGET_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const portfolioDetailsAction = (projectId) => async (dispatch) => {
    dispatch({type: PORTFOLIO_DETAILS_REQUEST, payload: projectId});
    try {
        const {data} = await Axios.get(`/portfolio/${projectId}`);
        console.log("data Project", data)
        dispatch({type: PORTFOLIO_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({
            type: PORTFOLIO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};