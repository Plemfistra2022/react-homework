import './CommentsCss.css'
import {useEffect, useState} from "react";
import {Comment} from "../comment/Comment.tsx";
import type {IComment} from "../../models/IComment.ts";
import {getComments} from "../../services/api.service.ts";

export const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        const fatchData = async () =>{
            const comments = await getComments();
            setComments(comments);
        }
        fatchData();
    },[]);
    return (
        <div className="comments-container">
            {
                comments.map((comment) => (
                    <Comment comment={comment} key={comment.id}/>
                ))
            }
        </div>
    );
};