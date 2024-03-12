import axios, { AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx"
import { ISubscription } from "../interfaces/ISubscription";

class mySubscriptions{
    subsArr: ISubscription[] = []; //массив для хранения подписок
    isLoading: boolean = false;

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
}


export default new mySubscriptions()