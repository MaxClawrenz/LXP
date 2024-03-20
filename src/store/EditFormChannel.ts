import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";


class EditFormChannel {
    result: number = 0;
    
    constructor() {
        makeAutoObservable(this);
    } 

    async deleteAuthor(id_channel:number, id_author:number) {
        try {
            const response = await axios.get('/custom_web_template.html?object_code=delete_author_channel_lxp',
            {params: {
                id_author: id_author,
                id_channel: id_channel
              }
            }
            );
            runInAction(() => {
                    this.result = response.data;
                }
            )
        } catch (error) {
            console.error('Ошибка получения каналов пользователя: ', error);
        }
    }

    
}

export default new EditFormChannel();