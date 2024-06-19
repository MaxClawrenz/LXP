import { Dispatch, SetStateAction } from "react";

export interface ICreatePostModal{
    avatarChannelID: number,
    channelName: string,
    openModal: () => void,
    channelId: number
}