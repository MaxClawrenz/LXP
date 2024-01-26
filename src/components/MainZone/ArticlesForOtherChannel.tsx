
import { IArticlesForOtherChannel } from '../../interfaces/IArticlesForOtherChannel';
import CommentsForMyChannel from './CommentsForMyChannel';
import MySubscriebers from './MySubsribers';
import PostCardForMyChannel from './PostCardForMyChannel';
import style_channels from './style_channels.module.css';


function ArticlesForOtherChannel(props: IArticlesForOtherChannel) {
    return (
        <div className={style_channels.blockForMyChannelArticles}>
        <div className={style_channels.createAndNewArticles}>
           <div className={style_channels.blockForActionsOtherChannel}>
                <div className={style_channels.btnsPopularAndNew}>
                    <div className={style_channels.btnPopularOrNew}>Популярное</div>
                    <div className={style_channels.btnPopularOrNew}>Свежее</div>
                </div>
                <div className={style_channels.blockForTagsAndAnother}>
                    <ul className={style_channels.blockForTags}>
                        <li>#eqvanta</li>
                        <li>#технологии</li>
                    </ul>
                    <div className={style_channels.btnAnother}>
                        <div className={style_channels.btnAnotherText}>Ещё</div>
                        <div className={style_channels.iconArrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
                                <path d="M1 0.5L7 6L13 0.5" stroke="black" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

           </div>
          
           {props.arrPostsInChannel.length > 0 &&
                props.arrPostsInChannel.map((post) => (
                    <PostCardForMyChannel key={post.postChannelsId} postChannelsId={post.postChannelsId} postChannelsTitle={post.postChannelsTitle} postChannelsAnonce={post.postChannelsAnonce} postText={post.postText} postCreateDate={post.postCreateDate} arrCountLikesPost={post.arrCountLikesPost} arrCountCommentsPost={post.arrCountCommentsPost} arrCountSubscriptionsPost={post.arrCountSubscriptionsPost} channelId={props.channelId} channelName={props.channelName} authorID={props.authorID} avatarChannelID={props.avatarChannelID} arrKnowlegesPost={post.arrKnowlegesPost} arrTagsPost={post.arrTagsPost} arrKnowlegesParts={props.arrKnowlegesParts} />
           ))
           }
           {props.arrComments.length > 0 &&
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
  
  export default ArticlesForOtherChannel;
  