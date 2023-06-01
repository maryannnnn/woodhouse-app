import './comment.scss'
import React from "react";

const Comment = ({key, comment, comments, level}) => {

    const date = new Date(comment.timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    return (
        <div className={`comment level-${level}`}>
            <div className="comment__user">
                <img className="comment__image" src={comment.userImage} alt={comment.title}/>
                <div className="comment__info">
                    <h3 className="comment__title">{comment.title}</h3>
                    <div
                        className="comment__profession">{comment.userNik},&nbsp;&nbsp;{comment.userProfession}</div>
                    <div className="comment__submitted">submitted&nbsp;&nbsp;{formattedDate}</div>
                </div>
            </div>
            <div className="comment__body">{comment.body}</div>
            <div className="comment__likes">likes:&nbsp;{comment.likes}</div>
            {/*{console.log("comment.children", comment.children)}*/}
            {comment.children &&
            comments
                .filter(item => item.parentId === comment.id)
                .map((childComment) => (
                <Comment key={childComment.id} comment={childComment} comments={comments} level={level + 1} />
            ))}
        </div>
    );
}

export default Comment
