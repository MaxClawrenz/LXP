import { makeAutoObservable, runInAction } from "mobx";
import { IAutor } from "../interfaces/IAutor";
import axios from "axios";

class PopularAutors {
    popularAutors: IAutor[] = [];

    constructor(){
        makeAutoObservable(this)
    }

    async getPopularAutors(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=4');
            runInAction(()=>{
                this.popularAutors = response.data;
            })
        } catch (error) {
            console.log('Ошибка получения рейтинга пользователей')
        }
    }


}

export default new PopularAutors()