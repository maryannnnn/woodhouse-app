import './comment-page.scss'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {commentListAction} from "../../entities/comment/actions/commentActions";
import {LoadingBox, MessageBox} from "../../shared/ui/box/boxes";
import Comment from "../../entities/comment/ui/Comment";

const CommentsPage = (props) => {

    const dispatch = useDispatch()

    const commentList = useSelector(state => state.commentListReducer)
    const {isLoadingComment, errorComment, comments} = commentList

    useEffect(() => {
        dispatch(commentListAction(props.postId, props.typePage))

    }, [dispatch, props.postId, props.typePage])
    return (
        <div className="comments">
            <h2 className="comments__title">Comments</h2>
                    {comments
                        .filter(item => item.parentId === 0)
                        .map(comment =>
                        <Comment key={comment.id} comment={comment} comments={comments} level={0}/>
                    )}
        </div>
    )
}

export default CommentsPage