import axios, { AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx"
import { ISubscription } from "../interfaces/ISubscription";
import { IRecommend } from "../interfaces/IRecommend";

class mySubscriptions{
    subsArr: ISubscription[] = []; //массив для хранения подписок
    recommendsArr: IRecommend[] = [];
    isLoading: boolean = false;
    isLoadingRecommends: boolean = false;

    constructor(){
        makeAutoObservable(this);
    }

    async getMySubscriptions(){
        try {
            const response: AxiosResponse<ISubscription[]> = await axios.get('/custom_web_template.html?object_code=my_subscribes_lxp');
            runInAction(() => {

                this.subsArr = [...response.data];
            })
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
        } finally {
            this.isLoading = false;
        }
    }

    unfollow(id:string){
        runInAction(()=>{
            this.subsArr = this.subsArr.filter(element => element.id !== id);
        })
    }


    async getRecommendChannels(){

            try {
                const response: AxiosResponse<IRecommend[]> = await axios.get('/custom_web_template.html?object_code=my_recommends_lxp');
                runInAction(()=>{
                    this.recommendsArr = response.data;
                })
            } catch (error) {
                
            } finally {
                this.isLoadingRecommends = false;
            }
        
    }
}


export default new mySubscriptions()