import { DataType, CommentType, PostType } from "../constants/types";
import { useQuery, useInfiniteQuery, UseInfiniteQueryResult, UseQueryResult } from "@tanstack/react-query";
import { fetchComments, fetchPosts } from "./fetches";


export const useGetPosts = (): UseInfiniteQueryResult<DataType, Error> => 
    useInfiniteQuery<DataType, Error>({
      queryKey: ["posts", "infinite"], 
      getNextPageParam: (prevData) => prevData.after,
      queryFn: (pageParam) => fetchPosts(pageParam)
    }); 
  

export const useGetComments = (post: string[] | string): UseQueryResult<CommentType[], Error> => 
    useQuery<CommentType[], Error>({
        queryKey: ["comments"],
        queryFn: () => fetchComments(post),
    });



export const useGetPost = (id?: string): PostType | null => {
    if(typeof id === 'undefined') {
        return null
    };
    const posts = useGetPosts();
    return posts.data?.pages.flatMap(item => item.posts).find(post => post.id === id) ?? null;
};
