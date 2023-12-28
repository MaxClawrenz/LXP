import { IArticlesForMyChannel } from '../../interfaces/IArticlesForMyChannel';
import CommentsForMyChannel from './CommentsForMyChannel';
import MyFirstArticle from './MyFirstArticle';
import MySubscriebers from './MySubsribers';
import PostCardForMyChannel from './PostCardForMyChannel';
import style_channels from './style_channels.module.css';


function ArticlesForMyChannel(props: IArticlesForMyChannel) {
    return (
        <div className={style_channels.blockForMyChannelArticles}>
        <div className={style_channels.createAndNewArticles}>
           <div className={style_channels.blockForCreateArticle}>
                <div className={style_channels.topBlockTitle}>
                    <div className={style_channels.avatarBlock}>
                        <img alt='' src='`/download_file.html?file_id=${props.avatarChannelID}`' className={style_channels.imgChannelAvatar}/>
                    </div>
                    <div className={style_channels.btnNewPost}>Новая запись</div>
                </div>
                <div className={style_channels.blockForBtnsPhotoAndLink}>
                    <div className={style_channels.btnPhotoVideo}>
                        <div className={style_channels.iconPhotoAndVideo}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                                <path d="M4.92647 3.86964C5.43274 3.86964 5.84471 3.42149 5.84471 2.87065C5.84471 2.31973 5.43274 1.87158 4.92647 1.87158C4.42019 1.87158 4.0083 2.31973 4.0083 2.87065C4.0083 3.42149 4.42019 3.86964 4.92647 3.86964ZM4.92647 2.45752C5.13585 2.45752 5.30618 2.64284 5.30618 2.87065C5.30618 3.09839 5.13585 3.28371 4.92647 3.28371C4.71716 3.28371 4.54683 3.09839 4.54683 2.87065C4.54683 2.64284 4.71716 2.45752 4.92647 2.45752Z" fill="#0091D5"/>
                                <path d="M9.61901 0H1.09927C0.914222 0 0.763672 0.163803 0.763672 0.365143V8.21136C0.763672 8.4127 0.914222 8.57651 1.09927 8.57651H9.61901C9.80406 8.57651 9.95461 8.4127 9.95461 8.21136V0.365143C9.95461 0.163803 9.80406 0 9.61901 0ZM9.41608 0.585938V5.22278L7.72237 3.3799C7.61193 3.25996 7.43235 3.26004 7.32198 3.38013L4.92656 5.9864L3.39645 4.32167C3.34294 4.26338 3.27177 4.23126 3.19604 4.23126C3.12038 4.23126 3.04928 4.26331 2.99577 4.32152L1.3022 6.16417V0.585938H9.41608ZM1.3022 7.99057V6.9928L3.19604 4.93225L4.72609 6.59698C4.77966 6.65527 4.85083 6.68747 4.92656 6.68747C5.00215 6.68747 5.07333 6.65535 5.12676 6.59714L7.52224 3.99078L9.41615 6.05141V7.99057H1.3022Z" fill="#0091D5"/>
                            </svg>
                        </div>
                        <div className={style_channels.textBtn}>Фото и видео</div>
                    </div>

                    <div className={style_channels.btnPhotoVideo}>
                        <div className={style_channels.iconLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M4.85818 3.99144C4.75728 4.10122 4.75728 4.27727 4.85818 4.38705C5.27508 4.84065 5.27508 5.57802 4.85818 6.03162L2.66895 8.41356C2.25205 8.86716 1.57434 8.86716 1.15743 8.41356L0.828098 8.05523C0.411194 7.60163 0.411194 6.86427 0.828098 6.41066L3.01732 4.02872C3.11822 3.91895 3.11822 3.74289 3.01732 3.63311C2.91643 3.52334 2.75462 3.52334 2.65372 3.63311L0.464497 6.01505C0.16562 6.34024 0 6.77313 0 7.23295C0 7.69277 0.163716 8.12566 0.464497 8.45084L0.793832 8.80917C1.10223 9.14471 1.50771 9.31248 1.91319 9.31248C2.31868 9.31248 2.72416 9.14471 3.03255 8.80917L5.22178 6.42723C5.83857 5.75615 5.83857 4.66253 5.22178 3.99144C5.12279 3.88166 4.95907 3.88166 4.85818 3.99144Z" fill="#FFAE00"/>
                                <path d="M8.7283 0.86164L8.39896 0.503314C7.78217 -0.167771 6.77703 -0.167771 6.16024 0.503314L3.97102 2.88525C3.35423 3.55634 3.35423 4.64996 3.97102 5.32104C4.07191 5.43082 4.23372 5.43082 4.33462 5.32104C4.43551 5.21127 4.43551 5.03521 4.33462 4.92544C3.91771 4.47183 3.91771 3.73447 4.33462 3.28086L6.52384 0.898923C6.94075 0.445319 7.61846 0.445319 8.03536 0.898923L8.3647 1.25725C8.7816 1.71085 8.7816 2.44822 8.3647 2.90182L6.17547 5.28376C6.07458 5.39354 6.07458 5.56959 6.17547 5.67937C6.22497 5.73322 6.29159 5.76222 6.35632 5.76222C6.42104 5.76222 6.48767 5.73529 6.53717 5.67937L8.72639 3.29743C9.02527 2.97225 9.19089 2.53935 9.19089 2.07954C9.19089 1.61972 9.02717 1.18683 8.7283 0.86164Z" fill="#FFAE00"/>
                            </svg>
                        </div>
                        <div className={style_channels.textBtn}>Ссылка</div>
                    </div>
                </div>
           </div>
           {props.createMyFirstPost && props.arrPostsInChannel.length === 0 &&
                <MyFirstArticle 
                channelId={props.channelId} 
                authorID={props.authorID}
                />
           }
           {props.viewMyPosts && props.arrPostsInChannel.length > 0 &&
                props.arrPostsInChannel.map((post) => (
                    <PostCardForMyChannel key={post.postChannelsId} postChannelsId={post.postChannelsId} postChannelsTitle={post.postChannelsTitle} postChannelsAnonce={post.postChannelsAnonce} postText={post.postText} postCreateDate={post.postCreateDate} arrCountLikesPost={post.arrCountLikesPost} arrCountCommentsPost={post.arrCountCommentsPost} arrCountSubscriptionsPost={post.arrCountSubscriptionsPost} channelId={props.channelId} channelName={props.channelName} authorID={props.authorID} avatarChannelID={props.avatarChannelID} arrKnowlegesPost={post.arrKnowlegesPost} arrTagsPost={post.arrTagsPost} />
           ))
           }
           {props.viewMyComments && props.arrComments.length > 0 &&
                <CommentsForMyChannel arrComments={props.arrComments} />
           }
           </div>
        {props.arrSubscriptionsInChannel.length > 0 &&
        <MySubscriebers 
        arrSubscriptionsInChannel={props.arrSubscriptionsInChannel} 
        arrCountSubscriptionsChannels={props.arrCountSubscriptionsChannels}
        />
        }
       </div>

    )
  }
  
  export default ArticlesForMyChannel;
  