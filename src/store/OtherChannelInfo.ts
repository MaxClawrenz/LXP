import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";


class OtherChannelInfo {
    channelsInfo: any[] = [];

    constructor() {
        makeAutoObservable(this);
    } 

    async getChannelsInfo(channelId:number | string) {
        try {
            const response = await axios.get('/custom_web_template.html?object_code=get_channel_info_axios', {
                params: {
                    channel_id: channelId
                }
            });
            runInAction(() => {
                    this.channelsInfo = response.data;
                }
            )
        } catch (error) {
            console.error('Ошибка получения каналов пользователя: ', error);
        }
    }
}

export default new OtherChannelInfo();