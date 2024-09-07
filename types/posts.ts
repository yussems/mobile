export type IPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
export type IPostComment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};