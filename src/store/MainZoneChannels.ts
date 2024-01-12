import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";


class Channels {
    channelsArr: any[] = [];

    constructor() {
        makeAutoObservable(this);
    } 

    async getChannels() {
        try {
            const response = await axios.get('/custom_web_template.html?object_code=my_channel_axios');
            runInAction(() => {
                    this.channelsArr = response.data;
                }
            )
        } catch (error) {
            console.error('Ошибка получения каналов пользователя: ', error);
        }
    }
}

export default new Channels();