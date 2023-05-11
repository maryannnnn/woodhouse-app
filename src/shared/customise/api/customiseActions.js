import Axios from 'axios'
import {
    CUSTOMISE_FAIL,
    CUSTOMISE_REQUEST,
    CUSTOMISE_SUCCESS
} from "../consts";

export const getCustomise = () => async (dispatch) => {
    dispatch({
        type: CUSTOMISE_REQUEST
    });
    try {
        const currentCustomiseVersion = process.env.REACT_APP_CUSTOMISE_VERSION
        const storageCustomise = JSON.parse(localStorage.getItem('customise'))

        if (storageCustomise?.version === currentCustomiseVersion) {
            dispatch({
                type: CUSTOMISE_SUCCESS,
                payload: storageCustomise.data
            });
        } else {
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
