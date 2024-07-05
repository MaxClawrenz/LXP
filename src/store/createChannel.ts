import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";


class createChannel {
    result: number = 0;
    arrAuthors: any[] = [];
    arrCollaborators: any[] = [];
    newChannel: any = {};
    
    constructor() {
        makeAutoObservable(this, {
            arrAuthors: false, // Исключаем arrAuthors из MobX отслеживания
        });
    } 

    async deleteAuthor(id_channel: string, id_author: number) {
        try {
            // console.log('Отправка запроса на сервер с данными:', { id_author, id_channel });
    
            const response = await axios.post('/custom_web_template.html?object_code=delete_author_channel_lxp', null, {
                params: {
                id_author: id_author,
                id_channel: id_channel
                }
            });
    
            // Логирование ответа сервера для отладки
            // console.log('Ответ сервера:', response.data);
    
            // Проверка на успешный ответ
            if (response.data === 1) {
                runInAction(() => {
                    this.arrAuthors = this.arrAuthors.filter((author: { id: number; }) => author.id !== id_author);
                });
            } else {
                console.error('Ошибка удаления автора канала: Неверный ответ от сервера', response.data);
            }
        } catch (error) {
            console.error('Ошибка удаления автора канала: ', error);
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

    async searchAuthor(input_value: string) {
        try {
            const response = await axios.get('/custom_web_template.html?object_code=search_author_lxp', {
                params: {
                    input_user_value: input_value
                }
            });
            
            runInAction(() => {
                this.result = response.data;
                this.arrCollaborators = response.data;
            });
            return response.data; // Возвращаем данные для использования в компоненте
        } catch (error) {
            console.error('Ошибка поиска автора: ', error);
            return []; // Возвращаем пустой массив в случае ошибки
        }
    }


    async addNewAuthor(collId: number, collFullname: string, channelId: string) {
        try {
            const response = await axios.post('/custom_web_template.html?object_code=add_new_author_lxp', null, {
                params: {
                    id_author: collId,
                    id_channel: channelId,
                    coll_fullname: collFullname
                }
            });
            
            runInAction(() => {
                this.result = response.data;
                this.arrAuthors = response.data;
            });
            
            return response.data;
        } catch (error) {
            console.error('Ошибка добавления автора: ', error);
            return [];
        }
    }

    async createChannelStageOne() {
        try {
            const response = await axios.post('/custom_web_template.html?object_code=create_new_channel_back', null);
            
            runInAction(() => {
                this.result = response.data;
                this.newChannel = response.data;
            });
            return response.data; // Возвращаем данные для использования в компоненте
        } catch (error) {
            console.error('Ошибка поиска автора: ', error);
            return []; // Возвращаем пустой массив в случае ошибки
        }
    }

    // Удаление канала

    async deleteChannel(id_channel: string) {
        try {
            // console.log('Отправка запроса на сервер с данными:', { id_author, id_channel });
    
            const response = await axios.post('/custom_web_template.html?object_code=lxp_delete_channel_back', null, {
                params: {
                id_channel: id_channel
                }
            });

    
            // Логирование ответа сервера для отладки
            // console.log('Ответ сервера:', response.data);
    
            // Проверка на успешный ответ
            if (response.data === 1) {
                runInAction(() => {
                    this.result = response.data;
                });
            } else {
                console.error('Ошибка удаления автора канала: Неверный ответ от сервера', response.data);
            }
        } catch (error) {
            console.error('Ошибка удаления автора канала: ', error);
        }
    }
    


    
}

export default new createChannel();