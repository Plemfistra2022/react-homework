import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import './postCss.css'

interface IPostProps {
    post: IPost
}

export const PostComponent: FC<IPostProps> = ({post}) => {
    return (
        <div className='post-card'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};