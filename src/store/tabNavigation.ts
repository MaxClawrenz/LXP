import { makeAutoObservable, runInAction } from "mobx"
import { INavigator } from "../interfaces/INavigator";

class tabNavigation {
    navigator:INavigator = {
        "Свежее": true,
        "Популярное": false,
        "Подписки": false,
        "Каналы": false,
        "Сохранённое": false
    }

    constructor(){
        makeAutoObservable(this)
    }

    navigatorUpdate(name: string){
        runInAction(()=>{
            this.navigator = Object.fromEntries(
                Object.entries(this.navigator).map(([key]) => [key, key === name])
            )
        })
    }
}

export default new tabNavigation()