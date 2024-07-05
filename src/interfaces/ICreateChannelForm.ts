export interface IAuthor {
    authorId: number;
    authorFullname: string;
    authorInArrId: number;
}

export interface IChannelData {
    channelId: string;
    channelName: string;
    channelDecript: string;
    coverChannelID: string;
    avatarChannelID: string;
    arrAuthors: IAuthor[];
    arrKnowlegesParts: { knowlegeName: string; classificatorId: number }[];
    arrAllClassificators: IClassificators[];
    arrPostsInChannel: any[];
    arrSubscriptionsInChannel: any[];

}

export interface ICreateChannelForm {
    createChannelForm: boolean;
    setCreateChannelForm: (value: boolean) => void;
    channelData: IChannelData;
}

export interface IClassificators {
    classificatorId: number;
    classificatorName: string
}

export interface ICreateChannel {
    addNewAuthor: (collId: number, collFullname: string, channelId: string) => Promise<IAuthor[]>;
    searchAuthor: (query: string) => Promise<any[]>;
    deleteAuthor: (id_channel: number, id_author: number) => Promise<void>;
}
