import Axios from 'axios'
import {
    HEADER_LIST_REQUEST,
    HEADER_LIST_SUCCESS,
    HEADER_LIST_FAIL,
    HEADER_ZERO_REQUEST,
    HEADER_ZERO_SUCCESS,
    HEADER_ZERO_FAIL,
    HEADER_ONE_REQUEST,
    HEADER_ONE_SUCCESS,
    HEADER_ONE_FAIL
} from '../constants/headerConstants'

export const headerListAction = () => async (dispatch) => {
    dispatch({
        type: HEADER_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/header')
        dispatch({
            type: HEADER_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: HEADER_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
}

export const headerDetailsAction = (headerId) => async (dispatch) => {
    if (headerId === 0) {
        dispatch({
            type: HEADER_ZERO_REQUEST,
            payload: headerId
        });
    }
    if (headerId === 1) {
        dispatch({
            type: HEADER_ONE_REQUEST,
            payload: headerId
        });
    }
    try {
        const { data } = await Axios.get(`/header/${headerId}`);
        if (headerId === 0) {
            dispatch({
                type: HEADER_ZERO_SUCCESS,
                payload: data
            });
        }
        if (headerId === 1) {
            dispatch({
                type: HEADER_ONE_SUCCESS,
                payload: data
            });
        }
    } catch (error) {
        if (headerId === 0) {
            dispatch({
                type: HEADER_ZERO_FAIL,
                payload: error.response && error.response.data.message ?
                    error.response.data.message : error.message,
            });
        }
        if (headerId === 1) {
            dispatch({
                type: HEADER_ONE_FAIL,
                payload: error.response && error.response.data.message ?
                    error.response.data.message : error.message,
            });
        }
    }
};