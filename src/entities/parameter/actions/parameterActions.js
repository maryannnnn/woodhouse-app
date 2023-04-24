import Axios from 'axios'
import {
  PARAMETER_DETAILS_REQUEST,
  PARAMETER_DETAILS_SUCCESS,
  PARAMETER_DETAILS_FAIL,
} from '../constants/parameterConstants'

export const parameterDetailsAction = (parameterId) => async (dispatch) => {
  dispatch({ type: PARAMETER_DETAILS_REQUEST, payload: parameterId });
  try {
    const Parameter = await Axios.get(`/parameter/${parameterId}`);
    console.log("data Parameter", Parameter.data)
    dispatch({ type: PARAMETER_DETAILS_SUCCESS, payload: Parameter.data });
  } catch (error) {
    dispatch({
      type: PARAMETER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};