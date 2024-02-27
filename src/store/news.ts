import axios, { AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx"
import { IPostCard } from "../interfaces/IPostCard";
import { IResPosts } from "../interfaces/IResPosts";

class News {

    newsArr:IPostCard[] = []; //пустой массив для новых постов
    populArr:IPostCard[] = []; //пустой массив для популярных постов
    savedArr:IPostCard[] = []; //пустой массив для сохраненных постов
    isLoading:boolean = false; //признак выполнения загрузки. По умолчанию false, в момент начала загрузки ставится в true
    _limit:number = 4; //количество запрашиваемых с сервера постов
    _target: string | number = 0; //дата последнего выгруженного поста
    _targetPop: string | number = 0; //дата последнего выгруженного популярного поста
    _targetSaved: string | number = 0; //дата последнего выгруженного сохраненного поста

    constructor() {
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
                }
            });
            runInAction(() => {
                this.newsArr.push(...response.data.posts);
                this._target = response.data.new_target_date;
            })
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
        } finally {
            this.isLoading = false;
        }

    }

    getLike(postId: string) {
        this.isLoading = true;
        try {
            axios.get('/custom_web_template.html?object_code=add_like_lxp', {
                params: {
                    _value: postId
                }
            });
            runInAction(() => {
                for(let item of this.newsArr){
                   if(item.id === postId){
                    if(item.my_like){
                        item.likes_count = item.likes_count - 1
                        item.my_like = !item.my_like
                    }else {
                        item.likes_count = item.likes_count + 1
                        item.my_like = !item.my_like
                       }
                   } 
                }  
                for(let item of this.populArr){
                   if(item.id === postId){
                    if(item.my_like){
                        item.likes_count = item.likes_count - 1
                        item.my_like = !item.my_like
                    }else {
                        item.likes_count = item.likes_count + 1
                        item.my_like = !item.my_like
                       }
                   } 
                }  
                for(let item of this.savedArr){
                   if(item.id === postId){
                    if(item.my_like){
                        item.likes_count = item.likes_count - 1
                        item.my_like = !item.my_like
                    }else {
                        item.likes_count = item.likes_count + 1
                        item.my_like = !item.my_like
                       }
                   } 
                }  
            })
        } catch (err) {
            console.error('Лайк не добавлен', err);
        } finally {
            this.isLoading = false;
        }
    }

    getFavourites(postId: string) {
        this.isLoading = true;
        try {
            axios.get('/custom_web_template.html?object_code=add_favourites_lxp', {
                params: {
                    _value: postId
                }
            });
            runInAction(() => {
                
                for(let item of this.newsArr){
                   if(item.id === postId){
                    if(item.my_favourite){
                        item.my_favourite = !item.my_favourite
                        item.favourite_count = item.favourite_count - 1
                    }else {
                        item.my_favourite = !item.my_favourite
                        item.favourite_count = item.favourite_count + 1
                       }
                   } 
                }  
                for(let item of this.populArr){
                   if(item.id === postId){
                    if(item.my_favourite){
                        item.my_favourite = !item.my_favourite
                        item.favourite_count = item.favourite_count - 1
                    }else {
                        item.my_favourite = !item.my_favourite
                        item.favourite_count = item.favourite_count + 1
                       }
                   } 
                }  
                for(let item of this.savedArr){
                   if(item.id === postId){
                    if(item.my_favourite){
                        item.my_favourite = !item.my_favourite;
                        item.favourite_count = item.favourite_count - 1;
                    }else {
                        item.my_favourite = !item.my_favourite
                        item.favourite_count = item.favourite_count + 1
                       }
                   } 
                }  
                this.savedArr = this.savedArr.filter(element => element.id !== postId);
            })
        } catch (err) {
            console.error('Пост не добавлен в избранное', err);
        } finally {
            this.isLoading = false;
        }
    }    

    async blogFollow(blogId: string){
        runInAction(()=>{    
            this.newsArr = this.newsArr.map(post => {
                if(post.blog_id === blogId){
                    return {
                        ...post,
                        is_follow: !post.is_follow
                    }
                }else{
                    return post
                }
            })
            this.populArr = this.populArr.map(post => {
                if(post.blog_id === blogId){
                    return {
                        ...post,
                        is_follow: !post.is_follow
                    }
                }else{
                    return post
                }
            })
            this.savedArr = this.savedArr.map(post => {
                if(post.blog_id === blogId){
                    return {
                        ...post,
                        is_follow: !post.is_follow
                    }
                }else{
                    return post
                }
            })
        })
        await axios.post("/custom_web_template.html?object_code=lxp_make_follow", {
            params: {blog_id: blogId}
        })
    }
    //метод для загрузки популярных постов
    async getPopular(){ 
        this.isLoading = true;
        try {
            const response: AxiosResponse<IResPosts> = await axios.get('/custom_web_template.html?object_code=lxp_popular', {
                params: {
                    _limit: this._limit,
                    _target: this._targetPop
                }
            });
            runInAction(() => {
                this.populArr.push(...response.data.posts);
                this._targetPop = response.data.new_target_date;
            })
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
        } finally {
            this.isLoading = false;
        }

    }
    //метод для загрузки сохраненных постов
    async getSaved(){ 
        this.isLoading = true;
        try {
            const response: AxiosResponse<IResPosts> = await axios.get('/custom_web_template.html?object_code=lxp_saved', {
                params: {
                    _limit: this._limit,
                    _target: this._targetSaved
                }
            });
            runInAction(() => {
                this.savedArr.push(...response.data.posts);
                this._targetSaved = response.data.new_target_date;
            })
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
        } finally {
            this.isLoading = false;
        }

    }
}


export default new News()