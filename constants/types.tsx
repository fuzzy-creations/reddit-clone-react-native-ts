export interface PostDataType { 
    nextPageToken: string, 
    posts: PostType[]
};

export interface PostType {
    id: string,
    title: string,
    media?: string | null,
    icon: string, 
    subreddit: string,
    author: string, 
    timestamp: number,
    url: string, 
    score: number, 
    comments: number, 
    type: string, 
};


export interface CommentType {
    author: string, 
    body: string,
    timestamp: number, 
    score: number,
    score_hidden: boolean,
    id: string, 
    author_fullname: string,
    collapsed: boolean, 
    replies: CommentType[] | null, 
};


export interface ReplyType {
    kind: string,
    data: {
        author: string,
        body: string,
        created: number,
        score: number,
        score_hidden: boolean,
        id: string,
        author_fullname: string,
        collapsed: boolean,
        replies: ReplyDataType | "",
    };
};


export interface ReplyDataType {
    data: {
        children: ReplyType[]
    };
};

export interface DetailsDataType {
    data: {
        children: DetailsType[]
    };
};

export interface DetailsType {
    data: {
        id: string, 
        title: string, 
        subreddit: string, 
        author: string, 
        created: number, 
        permalink: string, 
        score: number, 
        num_comments: number, 
        post_hint: string, 
        preview?: any, 
        sr_detail?: any
    };
};

export interface QueryType {
    query: string[] | string
}