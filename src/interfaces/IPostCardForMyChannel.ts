export interface IPostCardForMyChannel{
    key: number,
    postChannelsId: number,
    postChannelsTitle: string;
    postChannelsAnonce: string;
    postText: string;
    postCreateDate: number,
    arrCountLikesPost: number,
    arrCountCommentsPost: number,
    arrCountSubscriptionsPost: number,
    channelId: number,
    channelName: string,
    authorID: number,
    avatarChannelID: number,
    arrKnowlegesPost: any[],
    arrTagsPost: any[],
    arrKnowlegesParts:any[]
}