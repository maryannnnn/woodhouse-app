import Axios from 'axios'
import {
    IMAGE_CAROUSEL_REQUEST,
    IMAGE_CAROUSEL_SUCCESS,
    IMAGE_CAROUSEL_FAIL,
    IMAGE_PHOTO_REQUEST,
    IMAGE_PHOTO_SUCCESS,
    IMAGE_PHOTO_FAIL,
} from '../constants/imageConstants'

export const imageCarouselAction = (pageId, typeImage) => async (dispatch) => {
    dispatch({type: IMAGE_CAROUSEL_REQUEST, payload: {pageId, typeImage}});
    try {
        const {data} = await Axios.get(`/image?pageId=${pageId}&typeImage=${typeImage}`);
        console.log("data Carousel", data)
        dispatch({type: IMAGE_CAROUSEL_SUCCESS, payload: data});
    } catch (error) {
        dispatch({
            type: IMAGE_CAROUSEL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const imagePhotoAction = (pageId, typeImage) => async (dispatch) => {
    dispatch({type: IMAGE_PHOTO_REQUEST, payload: {pageId, typeImage}});
    try {
        const Images = await Axios.get(`/image?pageId=${pageId}&typeImage=${typeImage}`);
        console.log("data Images", Images.data)
        const imagesSet = new Set();

        Images.data.map(item => {
            imagesSet.add({
                title: item.title,
                src: item.original,
                width: item.width,
                height: item.height
            })
        })
        const myArray = [...imagesSet];
        console.log("imagesSet", myArray)
        dispatch({type: IMAGE_PHOTO_SUCCESS, payload: myArray});
    } catch (error) {
        dispatch({
            type: IMAGE_PHOTO_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
