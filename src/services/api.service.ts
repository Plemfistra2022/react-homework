import type {IPost} from "../models/IPost.ts";

export const getPosts = async (): Promise<IPost[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(res => res.json())
}

export const getPost = async (id: string): Promise<IPost> => {
    return await fetch(import.meta.env.VITE_API_URL + '/' + id)
    .then(res => res.json())
}