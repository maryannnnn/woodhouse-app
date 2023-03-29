import Axios from 'axios'
import {MENU_LIST_REQUEST, MENU_LIST_SUCCESS, MENU_LIST_FAIL} from '../constants/menuConstants'

export const menuListAction = () => async (dispatch) => {
    dispatch({type: MENU_LIST_REQUEST});
  try {
    const {data} = await Axios.get('/menu')
    console.log("data Menu", data)
    dispatch({type: MENU_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: MENU_LIST_FAIL,
      payload: error.response && error.response.data.message ?
        error.response.data.message :
        error.message,
    });
  }
}