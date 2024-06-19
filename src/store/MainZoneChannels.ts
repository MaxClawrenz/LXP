import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";


class Channels {
    channelsArr: any[] = [];
    isLoading:boolean = false; //признак выполнения загрузки. По умолчанию false, в момент начала загрузки ставится в true
    isLoadingPosts: boolean = false;

    constructor() {
        makeAutoObservable(this);
    } 

    async getChannels() {
        this.isLoading = true;
        try {
            const response = await axios.get('/custom_web_template.html?object_code=my_channel_axios');
            runInAction(() => {
                    this.channelsArr = response.data;
                    console.log(this.channelsArr)
                }
            )
        } catch (error) {
            console.error('Ошибка получения каналов пользователя: ', error);
        } finally {
            this.isLoading = false;
        }
    }

    updateLikesMyChannel(id: string){
        runInAction(()=>{
            for(let item of this.channelsArr){
                const arrPosts = item.posts; 
                let myPost = arrPosts.find((post: any) => post.id === id );
           
                 if(myPost.my_like){
                    myPost.likes_count--
                    myPost.my_like = !myPost.my_like
                 }else {
                    myPost.likes_count++
                    myPost.my_like = !myPost.my_like
                    }
            }
             
        })
    }

    updateSavedPostsMyChannel(id: string) {
        runInAction( () => {
            for(let item of this.channelsArr){
                const arrPosts = item.posts; 
                let myPost = arrPosts.find((post: any) => post.id === id );
                 if(myPost.my_favourite){
                    myPost.my_favourite = !myPost.my_favourite;
                    myPost.favourite_count--;
                 }else{
                    myPost.my_favourite = !myPost.my_favourite;
                    myPost.favourite_count++;
                    }
             }  
        }
        )
    }

    async addNewPost(channelId: number, postName: string, content: string){
        this.isLoadingPosts = true;
        try {
            const response = await axios.post('/custom_web_template.html?object_code=create_post_lxp', {params: {
                channel_id: channelId, post_name: postName, content: content
            }});
            runInAction(() => {
                const needChannel = this.channelsArr.find(obj => obj.channelId === String(channelId));
                if(needChannel) needChannel.posts.unshift(response.data);
                }
            )
        } catch (error) {
            console.error('Ошибка создания поста: ', error);
        } finally {
            this.isLoadingPosts = false;
        }
    }

}

export default new Channels();