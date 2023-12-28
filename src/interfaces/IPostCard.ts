import { CSSProperties } from "react";

export interface IPostCard {
    id: string,
    channel_pict: string,
    channel_name: string,
    channel_id: string,
    knowledge_name: string,
    time_posted: string,
    is_follow: boolean,
    post_name: string,
    post_text: string,
    likes_count: number,
    my_like: boolean,
    comments_count: number,
    favourite_count: number,
}