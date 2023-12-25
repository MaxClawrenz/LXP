import axios, { AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx"
import { IPostCard } from "../interfaces/IPostCard";
import { IResPosts } from "../interfaces/IResPosts";

class News {
    newsArr:IPostCard[] = [];
    isLoading:boolean = false;
    _limit:number = 4;
    //_target: string | number = new Date().toJSON().split('T')[0];
    _target: string | number = 0;

    constructor(){
        makeAutoObservable(this)
    }

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