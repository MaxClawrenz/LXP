import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";


class EditFormChannel {
    result: number = 0;
    arrAuthors: any[] = [];
    
    constructor() {
        makeAutoObservable(this, {
            arrAuthors: false, // Исключаем arrAuthors из MobX отслеживания
        });
    } 

    async deleteAuthor(id_channel:number, id_author:number, arrAuthors: any) {
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
                    this.arrAuthors = this.arrAuthors.filter((author: { id: number; }) => author.id !== id_author);
                }
            )
        } catch (error) {
            console.error('Ошибка получения каналов пользователя: ', error);
        }
    }

    async saveChannelChanges(forma: any) {
        try {
            const response = await axios.post('/custom_web_template.html?object_code=save_change_channel_lxp',
            forma,
            {
                headers: {
                            'Content-Type': 'multipart/form-data'
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