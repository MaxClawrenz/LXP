import axios, { AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx"
import { IPostCard } from "../interfaces/IPostCard";
import { IResPosts } from "../interfaces/IResPosts";

class News {
    newsArr:IPostCard[] = []; //пустой массив для новых постов
    isLoading:boolean = false; //признак выполнения загрузки. По умолчанию false, в момент начала загрузки ставится в true
    _limit:number = 4; //количество запрашиваемых с сервера постов
    _target: string | number = 0; //дата последнего выгруженного поста

    constructor(){
        makeAutoObservable(this)
    }

    //метод для загрузки новых постов
    async getNews(){ 
        this.isLoading = true;
        try {
           const response: AxiosResponse<IResPosts> = await axios.get('/custom_web_template.html?object_code=lxp_news', {
            params: {
                _limit: this._limit, 
                _target: this._target
            }});
           runInAction(() => {
               this.newsArr.push(...response.data.posts);
               this._target = response.data.new_target_date;
           })
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
        }finally{
            this.isLoading = false;
        }
        
    }

}


export default new News()