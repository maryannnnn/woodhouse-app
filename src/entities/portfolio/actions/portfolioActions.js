import Axios from 'axios'
import {
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
  PORTFOLIO_LIST_FAIL, 
  PORTFOLIO_DETAILS_REQUEST,
  PORTFOLIO_DETAILS_SUCCESS,
  PORTFOLIO_DETAILS_FAIL
} from '../constants/portfolioConstants'

export const portfolioListAction = () => async (dispatch) => {
    dispatch({type: PORTFOLIO_LIST_REQUEST});
  try {
    const {data} = await Axios.get('/portfolio')
    console.log("data Portfolio", data)
    dispatch({type: PORTFOLIO_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: PORTFOLIO_LIST_FAIL,
      payload: error.response && error.response.data.message ?
        error.response.data.message :
        error.message,
    });
  }
}

export const portfolioDetailsAction = (projectId) => async (dispatch) => {
  dispatch({ type: PORTFOLIO_DETAILS_REQUEST, payload: projectId });
  try {
    const { data } = await Axios.get(`/portfolio/${projectId}`);
    console.log("data Project", data)
    dispatch({ type: PORTFOLIO_DETAILS_SUCCESS, payload: data });
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