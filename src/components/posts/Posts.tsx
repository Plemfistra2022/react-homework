import './PostsCss.css'
import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPosts.ts";
import {getPosts} from "../../services/api.service.ts";
import {Post} from "../post/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts();
            setPosts(posts);
        }
        fetchData();

    },[]);

    return (
        <div className={'posts-container'}>
            {
                posts.map((post) => (
                    <Post key={post.id} post={post}/>
                ))
            }
        </div>
    );
};