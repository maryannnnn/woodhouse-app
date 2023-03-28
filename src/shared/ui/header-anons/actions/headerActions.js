import Axios from 'axios'
import {HEADER_LIST_REQUEST, HEADER_LIST_SUCCESS, HEADER_LIST_FAIL} from '../constants/headerConstants'

export const headerListAction = () => async (dispatch) => {
    dispatch({type: HEADER_LIST_REQUEST});
  try {
    const {data} = await Axios.get('/header')
    console.log("data Header", data)
    dispatch({type: HEADER_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: HEADER_LIST_FAIL,
      payload: error.response && error.response.data.message ?
        error.response.data.message :
        error.message,
    });
  }
}