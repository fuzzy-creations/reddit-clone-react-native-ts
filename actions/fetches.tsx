import { PostDataType, CommentType } from "../constants/types";
import { QueryFunctionContext } from "@tanstack/react-query";
import { formatPosts, formatReplies } from "./methods";

export const fetchPosts = async ({ pageParam }: QueryFunctionContext): Promise<PostDataType> => {
    const response = await  fetch(`https://www.reddit.com/r/all/hot.json?after=${pageParam}&sr_detail=1`);
    const json = await response.json();
    const posts = formatPosts(json);
    return { posts, nextPageToken: json.data.after };
};


export const fetchComments = async ( query: string[] | string ):  Promise<CommentType[]> => {
    const url = typeof query === 'string' ? query : query.join("/");
    const response = await  fetch(`https://www.reddit.com/${url}.json?sr_detail=1`);
    const json = await response.json();
    return formatReplies(json[1]);
};