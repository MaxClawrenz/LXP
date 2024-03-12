import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { IComment } from "../interfaces/IComment";

class comments {
    allComments:IComment[] = [];
    isLoading: boolean = false;

    constructor(){
        makeAutoObservable(this);
    }

    async getAllComments() {
        try {
            const response = await axios.get('/custom_web_template.html?object_code=all_comments_saved_posts');
            runInAction(()=>{
                this.allComments = response.data;
            })
        } catch (error) {
            console.log('Ошибка получения комментариев пользователей')
        } finally{
            this.isLoading = false;
        }
        
    }
}

export default new comments()