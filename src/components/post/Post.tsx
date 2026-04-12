import './PostCss.css'
import type {FC} from "react";
import type {IPost} from "../../models/IPosts.ts";

interface IPostProps {
    post: IPost
}

export const Post:FC<IPostProps> = ({post}) => {
    return (
        <div className={'post-card'}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};