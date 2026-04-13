import './Comments.css'
import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComments.ts";
import {getAllComments} from "../../services/api.service.ts";
import {Comment} from "../comment/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const comments = await getAllComments();
          setComments(comments);
        }
        fetchData();
    },[])
    return (
        <div className={'comments-container'}>
            {
                comments.map((comment) => (
                    <Comment key={comment.id} comment={comment}/>
                ))
            }
        </div>
    );
};