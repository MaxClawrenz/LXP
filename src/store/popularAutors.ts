import { makeAutoObservable, runInAction } from "mobx";
import { IAutor } from "../interfaces/IAutor";
import axios from "axios";

class PopularAutors {
    popularAutors: IAutor[] = [];
    isLoading: boolean = false;

    constructor(){
        makeAutoObservable(this)
    }

    async getPopularAutors(){
        try {
            const response = await axios.get('/custom_web_template.html?object_code=popular_authors_back');
            runInAction(()=>{
                this.popularAutors = response.data;
            })
        } catch (error) {
            console.log('Ошибка получения рейтинга пользователей')
        }finally{
            this.isLoading = false;
        }
    }


}

export default new PopularAutors()