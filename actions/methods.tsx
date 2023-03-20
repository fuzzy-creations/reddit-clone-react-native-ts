import { CommentType, DetailsDataType, PostType, ReplyDataType } from '../constants/types'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)


export const timeFromNow = (timestamp: number): string => dayjs(dayjs.unix(timestamp)).fromNow();

export const decodeUrl = (imgUrl: string) => imgUrl.replace(/amp;/g, '');


export const formatReplies = (reply: ReplyDataType | string): CommentType[] => {
    if (typeof reply === 'string') {
        return [];
    };

    return reply.data.children
        .filter((e) => e.kind !== "more")
        .map(({ data }) => {
            const { author,  body, created: timestamp,  score, score_hidden, id,  author_fullname, collapsed,  replies } = data;
            return { author,  body, timestamp,  score, score_hidden, id,  author_fullname, collapsed,  replies: formatReplies(replies)};
        });
};


export const formatPosts = (posts: DetailsDataType): PostType[] => {
    return posts.data.children
    .map(({ data }) => {
        const { id, title, subreddit, author,  created: timestamp, permalink: url,  score,  num_comments: comments,  post_hint: type, preview, sr_detail } = data;  
        return { id, title, icon: sr_detail?.icon_img,  subreddit, author,  timestamp, url,  score,  comments,  type,  media: preview?.images[0].source.url ? decodeUrl(preview.images[0].source.url) : null };
    });
};
