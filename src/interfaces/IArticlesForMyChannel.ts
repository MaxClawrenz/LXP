export interface IArticlesForMyChannel{
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
    viewMyPosts: any,
    setViewMyPosts: any,
    viewMyComments: any,
    setViewMyComments: any,
    createMyFirstPost: any,
    setCreateMyFirstPost: any,
    arrCountSubscriptionsChannels: number
}