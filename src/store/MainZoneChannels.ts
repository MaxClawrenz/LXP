import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";


class Channels {
    channelsArr: any[] = [];

    constructor() {
        makeAutoObservable(this);
    } 

    async getChannels() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response);
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