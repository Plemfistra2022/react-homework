import type {IPost, IPosts} from "../models/IPosts.ts";

export const getPosts = async (): Promise<IPost[]> => {
    const response:IPosts = await fetch(import.meta.env.VITE_API_URL + "/posts")
     .then(res => res.json())
    return response.posts;
}