import { DataType, CommentType } from "../constants/types";
import { QueryFunctionContext } from "@tanstack/react-query";
import { format_posts, format_replies } from "./methods";


export const fetchPosts = async ({ pageParam }: QueryFunctionContext): Promise<DataType> => {
    const response = await  fetch(`https://www.reddit.com/r/all/hot.json?after=${pageParam}&sr_detail=1`);
    const json = await response.json();
    const posts = format_posts(json);
    return { posts, after: json.data.after };
};


export const fetchComments = async ( post: string[] | string ):  Promise<CommentType[]> => {
    const url = typeof post === 'string' ? post : post.join("/");
    const response = await  fetch(`https://www.reddit.com/${url}.json?sr_detail=1`);
    const json = await response.json();
    return format_replies(json[1]);
};