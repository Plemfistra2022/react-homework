import type {FC} from "react";
import './Comment.css'
import type {IComment} from "../../models/IComments.ts";

interface ICommentProps {
    comment: IComment
}

export const Comment: FC<ICommentProps> = ({comment}) => {
    return (
        <div className={'comment-card'}>
            <p>{comment.body}</p>
        </div>
    );
};