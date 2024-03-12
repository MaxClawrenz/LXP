export interface IMyChannel{
    key: number,
    channelId: number,
    channelName: string;
    authorID: number,
    authorFullname: string,
    channelDecript: string,
    avatarChannelID: number,
    coverChannelID: number,
    arrPostsInChannel: any[],
    arrSubscriptionsInChannel: any[],
    arrKnowlegesParts: any[],
    arrTags: any[],
    arrComments: any[],
    arrCountSubscriptionsChannels: number,
    arrAuthors: any[],
    arrAllClassificators: any[]
}