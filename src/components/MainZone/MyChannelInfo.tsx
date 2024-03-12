import { useState } from 'react';
import { IMyChannelInfo } from '../../interfaces/IMyChannelInfo';
import ArticlesForMyChannel from './ArticlesForMyChannel';
import CoverMyChannel from './CoverMyChannel';
import style_channels from './style_channels.module.css';
import AddCoverChannel from './AddCoverChannel';
import BtnChangeChannel from './BtnChangeChannel';

function MyChannelInfo(props:IMyChannelInfo) {

    const [viewMyPosts, setViewMyPosts] = useState<boolean>(true);
    const [viewMyComments, setViewMyComments] = useState<boolean>(false);
    const [createMyFirstPost, setCreateMyFirstPost] = useState<boolean>(false);
    const [activeTabPost, setActiveTabPost] = useState<string>(style_channels.nameTab_active);
    const [activeTabComment, setActiveTabComment] = useState<string>(style_channels.nameTab);

    return (
        <>
    <CoverMyChannel channelId={props.channelId} authorID={props.authorID} coverChannelID={props.coverChannelID} />
        <div className={style_channels.blockForMyChannelInfo_cover}>
            <div className={style_channels.blockForTopButtons}>
                <div className={style_channels.avatarChannelButton}>
                    <div className={style_channels.hoverBlockImg}>
                        <div className={style_channels.iconChangedAndText}>
                            <div className={style_channels.blockicon}>
                                <svg id={style_channels.iconChangedAvatar} xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M8.25138 7.67001C9.2549 7.67001 10.0715 6.7817 10.0715 5.68985C10.0715 4.59784 9.2549 3.70953 8.25138 3.70953C7.24786 3.70953 6.43143 4.59784 6.43143 5.68985C6.43143 6.7817 7.24786 7.67001 8.25138 7.67001ZM8.25138 4.87095C8.66641 4.87095 9.00402 5.23828 9.00402 5.68985C9.00402 6.14126 8.66641 6.50859 8.25138 6.50859C7.83649 6.50859 7.49888 6.14126 7.49888 5.68985C7.49888 5.23828 7.83649 4.87095 8.25138 4.87095Z" fill="white" />
                                <path d="M17.5527 0H0.665214C0.298415 0 0 0.324684 0 0.723771V16.2762C0 16.6753 0.298415 17 0.665214 17H17.5527C17.9195 17 18.2179 16.6753 18.2179 16.2762V0.723771C18.2179 0.324684 17.9195 0 17.5527 0ZM17.1504 1.16142V10.3524L13.7932 6.69949C13.5743 6.46177 13.2184 6.46192 12.9996 6.69995L8.25151 11.866L5.21858 8.56624C5.11253 8.4507 4.97145 8.38703 4.82134 8.38703C4.67137 8.38703 4.53043 8.45055 4.42438 8.56594L1.06746 12.2184V1.16142H17.1504ZM1.06746 15.8386V13.8608L4.82134 9.7765L7.85413 13.0763C7.96032 13.1918 8.1014 13.2556 8.25151 13.2556C8.40134 13.2556 8.54242 13.192 8.64833 13.0766L13.3966 7.91037L17.1506 11.9948V15.8386H1.06746Z" fill="white" />
                                </svg>
                            </div>
                            <div className={style_channels.changedText}>Изменить</div>
                        </div>
                        <img alt='' className={style_channels.imgChannel} src={`/download_file.html?file_id=${props.avatarChannelID}`} id="" />
                    </div>
                </div>
               <BtnChangeChannel 
               key={props.channelId} 
               channelId={props.channelId} 
               channelName={props.channelName} 
               authorID={props.authorID} 
               authorFullname={props.authorFullname} 
               channelDecript={props.channelDecript} 
               avatarChannelID={props.avatarChannelID} 
               coverChannelID={props.coverChannelID} 
               arrPostsInChannel={props.arrPostsInChannel} 
               arrSubscriptionsInChannel={props.arrSubscriptionsInChannel} 
               arrKnowlegesParts={props.arrKnowlegesParts} 
               arrTags={props.arrTags} 
               arrComments={props.arrComments} 
               arrCountSubscriptionsChannels={props.arrCountSubscriptionsChannels} 
               arrAuthors={props.arrAuthors}
               arrAllClassificators = {props.arrAllClassificators}
               />
               
            </div>
            <div className={style_channels.titleChannel}>{props.channelName}</div>
            <div className={style_channels.channelDescript}>{props.channelDecript}</div>
            <div className={style_channels.changeDescript}>Изменить описание</div>
            <div className={style_channels.authorChannel}>Авторы канала:
            <div className={style_channels.listAuthors}>
                <ul className={style_channels.ulListAuthors}>
            {props.arrAuthors.map( (author) =>
                <li className={style_channels.liListAuthors}><span className={style_channels.nameAuthor}><a className={style_channels.linkAuthor} href={`/_wt/${author.authorInArrId}`} target='_blank'> {author.authorInArrFullname}</a></span></li>
            )
            }
            </ul>
            </div>
            </div>
            <div className={style_channels.tabsForCommentsOrArticles}>
                <div className={activeTabPost} id={style_channels.articlesChannel} onClick={() => {setViewMyPosts(true), setViewMyComments(false), setActiveTabComment(style_channels.nameTab), setActiveTabPost(style_channels.nameTab_active)}}>Статьи</div>
                <div className={activeTabComment} id={style_channels.commentsChannel} onClick={() => {setViewMyPosts(false), setViewMyComments(true), setActiveTabComment(style_channels.nameTab_active), setActiveTabPost(style_channels.nameTab)}}>Комментарии</div>
            </div>
        </div>
        
        <ArticlesForMyChannel 
                viewMyPosts={viewMyPosts}
                setViewMyPosts={setViewMyPosts}
                viewMyComments={viewMyComments}
                setViewMyComments={setViewMyComments}
                createMyFirstPost={createMyFirstPost}
                setCreateMyFirstPost={setCreateMyFirstPost}
                channelId={props.channelId}
                channelName={props.channelName}
                authorID={props.authorID}
                authorFullname={props.authorFullname}
                avatarChannelID={props.avatarChannelID}
                coverChannelID={props.coverChannelID}
                arrPostsInChannel={props.arrPostsInChannel}
                arrSubscriptionsInChannel={props.arrSubscriptionsInChannel}
                arrKnowlegesParts={props.arrKnowlegesParts}
                arrTags={props.arrTags}
                arrComments={props.arrComments} 
                arrCountSubscriptionsChannels={props.arrCountSubscriptionsChannels}
                />
        </>
    )
  }
  
  export default MyChannelInfo;
  