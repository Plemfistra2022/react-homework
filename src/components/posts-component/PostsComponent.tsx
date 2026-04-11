import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";
import {getPosts} from "../../services/api.service.ts";
import './postsCss.css'

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts();
            setPosts(posts);
        }
        fetchData();

    },[]);

    return (
        <div className="posts-container">
            {
                posts.map((post) => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};