import Axios from 'axios'
import {
    CUSTOMISE_FAIL,
    CUSTOMISE_REQUEST,
    CUSTOMISE_SUCCESS
} from "../consts";
import {customiseUpdatedData} from "../utils";

export const getCustomise = () => async (dispatch) => {
    dispatch({
        type: CUSTOMISE_REQUEST
    });
    try {
        console.log('d1a')
        const customiseUpdatedData = customiseUpdatedData()
        if (customiseUpdatedData) {
            console.log('кастомайз из локал стоража')
            dispatch({
                type: CUSTOMISE_SUCCESS,
                payload: customiseUpdatedData
            });
        } else {
            console.log('кастомайз с сервера')
            const {data} = await Axios.get('/customise')
            dispatch({
                type: CUSTOMISE_SUCCESS,
                payload: data.data
            })
            localStorage.setItem('customise', JSON.stringify(data))
        }
    } catch (error) {
        dispatch({
            type: CUSTOMISE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
}
