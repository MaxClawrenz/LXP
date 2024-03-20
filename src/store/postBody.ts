import axios, { AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx"
import { IPostCard } from "../interfaces/IPostCard";

class postBody {
    post: IPostCard = {
        id: "",
        channel_pict: "",
        channel_name: "",
        channel_id: "",
        knowledge_name: "",
        time_posted: 0,
        create_date: "",
        is_follow: false,
        post_name: "",
        post_text: "",
        likes_count: 0,
        my_like: false,
        comments_count: 0,
        favourite_count: 0,
        my_favourite: false,
        is_my_blog: false,
        blog_id: "",
        file_id: ""
    };
    isLoading: boolean = false;

    constructor(){
        makeAutoObservable(this)
    }

    //метод получения объекта поста со всеми данными
    async getPostObject(id: string){
        try {
            const response: AxiosResponse<IPostCard> = await axios.get('/custom_web_template.html?object_code=get_post_lxp', {params: {id: id}})
            runInAction(()=>{
                this.post = response.data;
            })
        } catch (error) {
            console.log('Ошибка получения поста: ', error)
        } finally {
            this.isLoading = false;
        }
    }

    //метод обновления лайка
    updateLikes(){
        runInAction(()=>{
            if(this.post.my_like){
                this.post.likes_count--;
            }else{
                this.post.likes_count++
            }
            this.post.my_like = !this.post.my_like;
        })
    }

    //метод обновления счетчика сохраненных
    updateFavorites(){
        runInAction(()=>{
            if(this.post.my_favourite){
                this.post.favourite_count--;
            }else{
                this.post.favourite_count++
            }
            this.post.my_favourite = !this.post.my_favourite;
        })
    }
}

export default new postBody()