import axios, { AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx"
import { IPostCard } from "../interfaces/IPostCard";
import { IResPosts } from "../interfaces/IResPosts";
import PostCard from "../components/MainZone/PostCard";
import { useState } from "react";

class News {
    newsArr: IPostCard[] = [];
    isLoading: boolean = false;
    _limit: number = 4;
    //_target: string | number = new Date().toJSON().split('T')[0];
    _target: string | number = 0;

    constructor() {
        makeAutoObservable(this)
    }

    async getNews() {
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

    async getLike(postId: string) {
        this.isLoading = true;
        try {
            const response = await axios.get('/custom_web_template.html?object_code=add_like_lxp', {
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
            })
        } catch (err) {
            console.error('Лайк не добавлен', err);
        } finally {
            this.isLoading = false;
        }
    }

    async getFavourites(postId: string) {
        this.isLoading = true;
        try {
            const response = await axios.get('/custom_web_template.html?object_code=add_favourites_lxp', {
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
            })
        } catch (err) {
            console.error('Пост не добавлен в избранное', err);
        } finally {
            this.isLoading = false;
        }
    }    

}


export default new News()