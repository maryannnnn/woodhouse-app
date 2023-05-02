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
import {infoProjectBodyDto} from "../../../app/dto/infoProjectBodyDto";

export const portfolioListAction = (
    pageNumber = 1,
    itemsPerPage = 3,
    // // name = '',
    // // category = '',
    // // order = '',
    // // min = 0,
    // // max = 0,

) => async (dispatch) => {
    dispatch({type: PORTFOLIO_LIST_REQUEST});
    try {
        const projects = await Axios.get(`/portfolio?_page=${pageNumber}&_limit=${itemsPerPage}`);
        console.log("Portfolio List projects: ", projects.data);
        const projectsAll = await Axios.get(`/portfolio`);
        console.log("projectsAll List: ", projectsAll.data.length);

        const imagePromises = projects.data.map(async (project) => {
            const image = await Axios.get(`/image/${project.imageProjectId}`);
            const category = await Axios.get(`/category/${project.categoryId}`);
            const user = await Axios.get(`/user/${project.architectId}`);
            const architectName = user.data.name + " " + user.data.family;
            console.log("Portfolio List image: ", image.data);
            console.log("Portfolio Widget categories: ", category.data);
            console.log("Portfolio Widget architect: ", user.data);

            return new infoProjectDto(project.id, project.title, category.data.id, category.data.name, user.data.id, architectName,
                project.anons, image.data.src, image.data.thumbnail, image.data.alt);
        });

        const projectList = await Promise.all(imagePromises);

        console.log("Portfolio projectListFull: ", projectList);
        dispatch({type: PORTFOLIO_LIST_SUCCESS, payload: {projects: projectList, projectsLength: projectsAll.data.length}});
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
        const projects = await Axios.get(`/portfolio?_start=${start}&_end=${end}`);
        console.log("Portfolio Widget projects: ", projects.data);

        const projectWidgetPromises = projects.data.map(async (project) => {
            const image = await Axios.get(`/image/${project.imageProjectId}`);
            const category = await Axios.get(`/category/${project.categoryId}`);
            const user = await Axios.get(`/user/${project.architectId}`);
            const architectName = user.data.name + " " + user.data.family;
            console.log("Portfolio List image: ", image.data);
            console.log("Portfolio Widget categories: ", category.data);
            console.log("Portfolio Widget architect: ", user.data);

            return new infoProjectDto(project.id, project.title, category.data.id, category.data.name, user.data.id, architectName,
                project.anons, image.data.src, image.data.thumbnail, image.data.alt);
        });

        const projectWidget = await Promise.all(projectWidgetPromises);

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
        const project = await Axios.get(`/portfolio/${projectId}`);
        const category = await Axios.get(`/category/${project.data.categoryId}`);
        const projectBody = new infoProjectBodyDto(project.data.id, project.data.title, category.data.id, category.data.name, project.data.architectId,
            project.data.parameterId, project.data.anons, project.data.block, project.data.text, project.data.address, project.data.status);

        console.log("data projectBody", projectBody)
        dispatch({type: PORTFOLIO_DETAILS_SUCCESS, payload: projectBody});
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