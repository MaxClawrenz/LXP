export interface IArticlesForOtherChannel{
    channelId: number,
    channelName: string,
    authorID: number,
    authorFullname: string,
    avatarChannelID: number,
    coverChannelID: number,
    arrPostsInChannel: any[],
    arrSubscriptionsInChannel: any[],
    arrKnowlegesParts: any[],
    arrTags: any[],
    arrComments: any[],
    arrCountSubscriptionsChannels: number
}