import axios, { AxiosResponse } from "axios";
import { makeAutoObservable, runInAction, toJS } from "mobx";
import { IPostCard } from "../interfaces/IPostCard";
import { IPostCommentsObj } from "../interfaces/IPostCommentsObj";
import { CommentLxp } from "../interfaces/CommentLxp";


class postBody {
  reaction(arg0: () => void) {
    throw new Error("Method not implemented.");
  }
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
    file_id: "",
  };
  isLoading: boolean = false;
  postComments: IPostCommentsObj = {
    allComments: [],
  };
  isLoadingComments: boolean = false;
  //скелет для нового комментария
  isNewCommentLoading: boolean = false;

  setIsNewCommentLoading(value: boolean) {
    this.isNewCommentLoading = value;
  }

  commentsCount: number = 0;

  // метод для обновления счетчика комментариев
  setCommentsCount(newCount: number) {
    runInAction(() => {
      this.commentsCount = newCount;
    });
  }

  constructor() {
    makeAutoObservable(this);
  }

  //   Обновление комментария
  updateComment(updatedComment: CommentLxp) {
    const index = this.postComments.allComments.findIndex(
      (comment) => comment.id === updatedComment.id
    );
    if (index !== -1) {
      runInAction(() => {
        this.postComments.allComments[index].message = updatedComment.message;
      });
    }
  }

  // Метод для добавления нового комментария в массив allComments
  addNewComment(newComment: CommentLxp) {
    runInAction(() => {
      this.postComments.allComments.unshift(newComment);
    });
  }

  //Удаление ответа
  deleteReply(commentId: string, replyId: string) {
    const commentIndex = this.postComments.allComments.findIndex(
      (comment) => comment.id === commentId
    );

    if (commentIndex !== -1) {
      const updatedReplies = this.postComments.allComments[
        commentIndex
      ].childrenArr.filter((reply) => reply.id !== replyId);

      runInAction(() => {
        this.postComments.allComments[commentIndex].childrenArr =
          updatedReplies;
      });
    }
  }

  //   Обновление Children
  updateChildComment(
    commentId: string,
    childCommentId: string,
    updatedMessage: string
  ) {
    const commentIndex = this.postComments.allComments.findIndex(
      (comment) => comment.id === commentId
    );

    if (commentIndex !== -1) {
      const childCommentIndex = this.postComments.allComments[
        commentIndex
      ].childrenArr.findIndex((child) => child.id === childCommentId);

      if (childCommentIndex !== -1) {
        runInAction(() => {
          this.postComments.allComments[commentIndex].childrenArr[
            childCommentIndex
          ].message = updatedMessage;
        });
      }
    }
  }
  //добавление ответа в children
  addReply(commentId: string, newReply: CommentLxp) {
    const commentIndex = this.postComments.allComments.findIndex(
      (comment) => comment.id === commentId
    );

    if (commentIndex !== -1) {
      runInAction(() => {
        this.postComments.allComments[commentIndex].childrenArr.push(newReply);
      });
    }
  }

  getChildrenArr(commentId: string): CommentLxp[] | null {
    const commentIndex = this.postComments.allComments.findIndex(
      (comment) => comment.id === commentId
    );

    if (commentIndex !== -1) {
      return this.postComments.allComments[commentIndex].childrenArr;
    }

    return null;
  }

  //метод получения объекта поста со всеми данными
  async getPostObject(id: string) {
    try {
      const response: AxiosResponse<IPostCard> = await axios.get(
        "/custom_web_template.html?object_code=get_post_lxp",
        { params: { id: id } }
      );
      runInAction(() => {
        this.post = response.data;
        this.commentsCount = response.data.comments_count;
      });
    } catch (error) {
      // console.log("Ошибка получения поста: ", error);
    } finally {
      this.isLoading = false;
    }
  }

  //метод обновления лайка
  updateLikes() {
    runInAction(() => {
      if(typeof this.post !== "number"){
        if (this.post.my_like) {
          this.post.likes_count--;
        } else {
          this.post.likes_count++;
        }
        this.post.my_like = !this.post.my_like;
      }
    });
  }

  //метод обновления счетчика сохраненных
  updateFavorites() {
    runInAction(() => {
      if(typeof this.post !== "number"){
        if (this.post.my_favourite) {
          this.post.favourite_count--;
        } else {
          this.post.favourite_count++;
        }
        this.post.my_favourite = !this.post.my_favourite;
      }
    });
  }

  //метод загрузки комментариев к посту
  async getPostComment(id: string) {
    this.isLoadingComments = true;
    try {
      const response: AxiosResponse<IPostCommentsObj> = await axios.get(
        "/custom_web_template.html?object_code=comments_ajax_recursion",
        { params: { new_id: id } }
      );
      runInAction(() => {
        this.postComments.allComments = response.data.allComments;

        // console.log(this.postComments.allComments);
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoadingComments = false;
    }
  }

  //метод удаления поста с сервера
  async deletePostFromServer(postId: string) {
    try {
      const response: AxiosResponse<string> = await axios.delete(
        "/custom_web_template.html?object_code=delete_post_lxp",
        { params: { id: postId } }
      );
      runInAction(() => {
        //@ts-ignore
        //когда-нибудь переделаем, пока некогда(
        this.post = 0;
      });
    } catch (error) {
      console.log("Ошибка при удалении поста: ", error);
    }
  }


}

export default new postBody();
