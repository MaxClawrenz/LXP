import { Dispatch, SetStateAction } from "react";

export interface ICreatePostModal{
    avatarChannelID: number,
    channelName: string,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}