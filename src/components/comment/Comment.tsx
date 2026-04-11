import './CommentCss.css'
import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";

interface CommentProps {
    comment: IComment;
}

export const Comment:FC<CommentProps> = ({comment}) => {
    return (
        <div className="comment-card">
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
        </div>
    );
};