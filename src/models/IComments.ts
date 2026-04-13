export interface IComments {
    comments:IComment[],
    total: number,
    skip: number,
    limit: number
}

export interface IComment {
    id:number,
    body: string,
    postId:number,
    likes: number,
    user: IUser
}

export interface IUser{
    id:number,
    username:string,
    fullName:string
}