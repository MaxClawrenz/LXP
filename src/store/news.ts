import axios, { AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx"
import { IPostCard } from "../interfaces/IPostCard";
import { IResPosts } from "../interfaces/IResPosts";

class News {

    newsArr:IPostCard[] = []; //пустой массив для новых постов
    populArr:IPostCard[] = []; //пустой массив для популярных постов
    savedArr:IPostCard[] = []; //пустой массив для сохраненных постов
    filteredArr: IPostCard[] = []; //пустой массив для отфильтрованных постов
    isLoading:boolean = false; //признак выполнения загрузки. По умолчанию false, в момент начала загрузки ставится в true
    _limit:number = 4; //количество запрашиваемых с сервера постов
    _target: string | number = 0; //дата последнего выгруженного поста
    _targetPop: string | number = 0; //дата последнего выгруженного популярного поста
    _targetSaved: string | number = 0; //дата последнего выгруженного сохраненного поста
    veryNewPostsCounter: number = 0; //счетчик новейших постов 
    isLoadingVeryNewPosts:boolean = false; //признак выполнения загрузки новейших постов. По умолчанию false, в момент начала загрузки ставится в true
    newsScrollTop: number = 0; //дефолтная позиция курсора в свежих постах
    popularrScrollTop: number = 0; //дефолтная позиция курсора в свежих постах
    savedScrollTop: number = 0; //дефолтная позиция курсора в свежих постах
    searchString: string = ''; //строка хранения состояния поисковой строки
    modeString: string = 'newsArr'; //строка для хранения текущего mode, которая используется для фильтрации массива

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
                this.findText();
            })
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
        } finally {
            this.isLoading = false;
        }

    }

    getLike(postId: string, event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault();
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
                        item.likes_count--
                        item.my_like = !item.my_like
                    }else {
                        item.likes_count++
                        item.my_like = !item.my_like
                       }
                   } 
                }  
                for(let item of this.populArr){
                   if(item.id === postId){
                    if(item.my_like){
                        item.likes_count--
                        item.my_like = !item.my_like
                    }else {
                        item.likes_count++
                        item.my_like = !item.my_like
                       }
                   } 
                }  
                for(let item of this.savedArr){
                   if(item.id === postId){
                    if(item.my_like){
                        item.likes_count--
                        item.my_like = !item.my_like
                    }else {
                        item.likes_count++
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

    getFavourites(postId: string, favourite: boolean, event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault();
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
                        item.my_favourite = !item.my_favourite;
                        item.favourite_count--;
                    }else{
                        item.my_favourite = !item.my_favourite;
                        item.favourite_count++;
                       }
                   } 
                }  
                for(let item of this.populArr){
                   if(item.id === postId){
                    if(item.my_favourite){
                        item.my_favourite = !item.my_favourite;
                        item.favourite_count--;
                    }else {
                        item.my_favourite = !item.my_favourite;
                        item.favourite_count++;
                       }
                   } 
                }  
                for(let item of this.savedArr){
                   if(item.id === postId){
                    if(item.my_favourite){
                        item.my_favourite = !item.my_favourite;
                        item.favourite_count--;
                    }
                   } 
                }  

                //тут надо добавить добавление постов из newsArr в savedArr при условии, если savedArr не пустой 
                        //или если в нем нет поста с таким же айди
                        if(!favourite){
                            const foundSavedIndex = this.savedArr.findIndex(element => element.id === postId);
                            if(foundSavedIndex === -1){
                                const foundNew = this.newsArr.find(element => element.id === postId);
                                //const foundNew2 = this.populArr.find(element => element.id === postId);
                                if(foundNew) this.savedArr.push(foundNew);
                            }
                        }else{
                            //удаление из массива сохраненных постов (savedArr) постов, которые были убраны из избранного
                            this.savedArr = this.savedArr.filter(element => element.id !== postId);
                        }


                //после этого добавить сортировку по дате
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
                //добавляем загруженные сохраненные посты в массив только в случае, если их нет в массиве
                response.data.posts.forEach(post => {
                    console.table(post)
                    if(!this.savedArr.some(savedPost => savedPost.id === post.id)){
                        this.savedArr.push(post);
                    }
                })
                //this.savedArr.push(...response.data.posts);
                this._targetSaved = response.data.new_target_date;
            })
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
        } finally {
            this.isLoading = false;
        }

    }

    //метод для получения количества новых постов если старые посты уже были загружены ранее
    async getVeryNewPostsCount(postId: string){ 
        // this.isLoading = true;
        try {
            const response: AxiosResponse<number> = await axios.get('/custom_web_template.html?object_code=very_new_posts_counter', {
                params: {
                    post_id: postId
                }
            });
            runInAction(() => {
                this.veryNewPostsCounter = response.data;
            })
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
        } 

    }

    //метод для загрузки новых постов если старые посты уже были загружены ранее
    async getVeryNewPosts(){ 
        this.isLoadingVeryNewPosts = true;
        this.veryNewPostsCounter = 0;
        try {
            const response: AxiosResponse<IResPosts> = await axios.get('/custom_web_template.html?object_code=get_very_new_posts', {
                params: {
                    post_id: this.newsArr[0].id
                }
            });
            runInAction(() => {
                this.newsArr = [...response.data.posts, ...this.newsArr];
                this.filteredArr = [...response.data.posts, ...this.filteredArr];
            })
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
        } finally {
            this.isLoadingVeryNewPosts = false;
        }

    }

    //метод для удаления поста из всех массивов
    deletePost(postId: string){ 
            runInAction(() => {
                this.newsArr = this.newsArr.filter(post => post.id !== postId);
                this.populArr = this.populArr.filter(post => post.id !== postId);
                this.savedArr = this.savedArr.filter(post => post.id !== postId);
                this.filteredArr = this.filteredArr.filter(post => post.id !== postId);
            })
    }

    //метод для выделения искомых слов желтым цветом
    findText(){
        runInAction(() => {
            if(this.searchString && this.searchString !== ' '){
                this.filteredArr = this.filterArray(this.searchString);
                this.filteredArr = this.filteredArr.map(post => {
                    if(post.post_text.includes(this.searchString) || post.post_name.includes(this.searchString)){ 
                        return {
                        ...post,
                        post_text: post.post_text.replaceAll(this.searchString, 
                            `<span className="selectedText">${this.searchString}</span>`),
                        post_name: post.post_name.replaceAll(this.searchString, 
                            `<span className="selectedText">${this.searchString}</span>`)
                        }
                    }
                    return post
                })
            }else{
                //console.log(this.modeString);
                this.filteredArr = this[this.modeString as keyof this] as IPostCard[];
            }

        })
    }

    //фильтрация массива новостей с возвращением нового массива
    filterArray(searchString: string){
        let filteredArray: IPostCard[] = [];
            filteredArray = (this[this.modeString as keyof this] as IPostCard[]).filter(post => post.post_name.includes(searchString) || post.post_text.includes(searchString));
        return filteredArray
    }
}


export default new News()