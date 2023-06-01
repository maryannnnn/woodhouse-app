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

export const portfolioListAction = ({
        pageNumber,
        itemsPerPage,
        status,
        categoryId,
        architectId
    }) => async (dispatch) => {
    dispatch({type: PORTFOLIO_LIST_REQUEST});
    try {
        let reqProjects, projectsAll, reqProjectsAll
        let statusStr = "", categoryStr = "", architectStr = ""
        if (status !== "All") {
            statusStr = `status=${status}`
        } else statusStr = ""
        if (categoryId !== "All") {
            categoryStr = `categoryId=${categoryId}`
        } else categoryStr = ""
        if (architectId !== "All") {
            architectStr = `architectId=${architectId}`
        } else architectStr = ""

        reqProjects = `/portfolio?${statusStr}&${categoryStr}&${architectStr}&_page=${pageNumber}&_limit=${itemsPerPage}`
        reqProjectsAll = `/portfolio?${statusStr}&${categoryStr}&${architectStr}`
        projectsAll = await Axios.get(reqProjectsAll);

        const projects = await Axios.get(reqProjects);
        const totalPages = Math.ceil(projectsAll.data.length / itemsPerPage);

        const imagePromises = projects.data.map(async (project) => {
            const image = await Axios.get(`/image/${project.imageProjectId}`);

            return new infoProjectDto(project.id, project.title, project.anons, image.data.src,
                image.data.thumbnail, image.data.alt);

            // return new infoProjectDto(project.id, project.title, category.data.id, category.data.name, user.data.id, architectName,
            //     project.anons, numberComments, image.data.src, image.data.thumbnail, image.data.alt, project.status, parameter.data.prices.price);

        });

        const projectList = await Promise.all(imagePromises);

        dispatch({type: PORTFOLIO_LIST_SUCCESS, payload: {projects: projectList, totalPages: totalPages}});
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

        const projectWidgetPromises = projects.data.map(async (project) => {
            const image = await Axios.get(`/image/${project.imageProjectId}`);
            return new infoProjectDto(project.id, project.title, project.anons, image.data.src,
                image.data.thumbnail, image.data.alt);
        });

        const projectWidget = await Promise.all(projectWidgetPromises);

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
        const parameter = await Axios.get(`/parameter/${project.data.parameterId}`);
        const projectBody = new infoProjectBodyDto(project.data.id, project.data.title, category.data.id, category.data.name, project.data.architectId,
            project.data.parameterId, project.data.anons, project.data.block, project.data.text, project.data.address, project.data.status, parameter.data.prices.price);

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