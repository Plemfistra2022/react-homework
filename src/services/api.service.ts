import type {IComment, IComments} from "../models/IComments.ts";

export const getAllComments = async (): Promise<IComment[]> => {
    const response:IComments = await fetch(import.meta.env.VITE_API_URL + "/comments")
        .then(res => res.json())
    return response.comments
}