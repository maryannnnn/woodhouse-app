import {
    COMMENT_LIST_FAIL,
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_SUCCESS
} from "../constants/commentConstants";
import Axios from "axios";
import {commentDto} from "../../../app/dto/commentDto";

export const commentListAction = (postId, typePage) => async (dispatch) => {
    dispatch({type: COMMENT_LIST_REQUEST});
    try {
        const comments = await Axios.get(`/comments?postId=${postId}&typePage=${typePage}`);

        const commentsPromises = comments.data.map(async (comment) => {
            const user = await Axios.get(`/user/${comment.userId}`);
            const image = await Axios.get(`/image/${user.data.imageId}`);

            return new commentDto(comment.id, comment.title, comment.body, comment.timestamp, comment.parentId,
                user.data.nik, user.data.profession, image.data.thumbnail, comment.likes, comment.children);
        });

        const commentsList = await Promise.all(commentsPromises);

        dispatch({type: COMMENT_LIST_SUCCESS, payload: commentsList});
    } catch (error) {
        dispatch({
            type: COMMENT_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
}