
import useTime from '../../hooks/useTime';
import useTimeName from '../../hooks/useTimeName';
import { IPostCardForMyChannel } from '../../interfaces/IPostCardForMyChannel';
import style_channels from './style_channels.module.css';

function PostCardForMyChannel(props: IPostCardForMyChannel) {

    // const { hours, minutes } = useTime(props.postCreateDate);
    // const hoursName = useTimeName(hours, ["час", "часа", "часов"]);
    // const minutesName = useTimeName(minutes, ["минута", "минуты", "минут"]);
    
    return (
                  
                <div className={style_channels.blockForMyReadyArticles}>
                    <div className={style_channels.cardMyArticles}>
                        <div className={style_channels.titleCardMyArticle}>
                            <div className={style_channels.avatarChannel}>
                                <img src={`/download_file.html?file_id=${props.avatarChannelID}`} className={style_channels.imgAvatarChannelArticle} alt=''/>
                            </div>
                            <div className={style_channels.nameChannel}>{props.channelName}</div>

                            {props.arrKnowlegesParts.map((knowlege) => (
                            <div className={style_channels.channelTheme} key={knowlege.knowlegeId} title={knowlege.knowlegeName}>
                                <svg className={style_channels.iconTheme} xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                    <g clipPath="url(#clip0_565_7)">
                                    <path d="M0.623337 5.77214C0.623337 4.48716 0.623337 3.84467 0.965733 3.46994C1.0873 3.33689 1.23504 3.2304 1.3997 3.15715C1.86349 2.95083 2.47301 3.154 3.69204 3.56034C4.62273 3.87057 5.08807 4.02569 5.55828 4.00963C5.73098 4.00373 5.90266 3.98074 6.07082 3.94099C6.52869 3.83276 6.9368 3.56068 7.75311 3.0165L8.95853 2.21284C10.0042 1.51578 10.527 1.16725 11.1271 1.08688C11.7272 1.00651 12.3233 1.20521 13.5154 1.6026L14.5312 1.94116C15.3945 2.22894 15.8262 2.37284 16.0731 2.7154C16.32 3.05796 16.32 3.51298 16.32 4.42302V11.5113C16.32 12.7962 16.32 13.4388 15.9776 13.8135C15.8561 13.9466 15.7083 14.053 15.5436 14.1263C15.0799 14.3326 14.4703 14.1294 13.2513 13.723C12.3206 13.4129 11.8553 13.2577 11.3851 13.2738C11.2124 13.2797 11.0407 13.3026 10.8726 13.3424C10.4147 13.4506 10.0065 13.7227 9.19023 14.2669L7.98481 15.0705C6.93915 15.7676 6.41637 16.1162 5.81626 16.1965C5.21613 16.2769 4.62005 16.0782 3.42789 15.6808L2.41216 15.3422C1.54882 15.0545 1.11715 14.9106 0.870245 14.568C0.623337 14.2254 0.623337 13.7704 0.623337 12.8603V5.77214Z" />
                                    <path d="M5.85556 3.96643V16.054" />
                                    <path d="M11.0878 0.793335V13.0019" />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_565_7">
                                    <rect width="17" height="17" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            ))}

                            <div className={style_channels.articleTimeAgo}>
                                {props.postCreateDate}
                            </div>
                        </div>
                        <div className={style_channels.titleForArticle}>{props.postChannelsTitle}</div>
                        <div className={style_channels.textShortForArticle}>{props.postChannelsAnonce}</div>
                        <div className={style_channels.blockForStatisticArticle}>
                            <div className={style_channels.likesCountForArticle}>
                                <div className={style_channels.likeIconArticle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <g clipPath="url(#clip0_20_379)">
                                            <path d="M11.1245 1.74064C10.5326 1.06906 9.71152 0.699219 8.8125 0.699219C7.54809 0.699219 6.74759 1.45437 6.29871 2.08789C6.18225 2.25228 6.08318 2.41712 6 2.57223C5.91682 2.41712 5.81777 2.25228 5.70129 2.08789C5.25241 1.45437 4.45191 0.699219 3.1875 0.699219C2.28848 0.699219 1.4674 1.06909 0.875508 1.74066C0.310945 2.3813 0 3.2393 0 4.1566C0 5.15511 0.389836 6.08382 1.22684 7.07926C1.97489 7.96894 3.05107 8.88601 4.29727 9.94794C4.76163 10.3437 5.24184 10.7529 5.75309 11.2002L5.76844 11.2136C5.83472 11.2717 5.91736 11.3007 6 11.3007C6.08264 11.3007 6.16528 11.2716 6.23156 11.2136L6.24691 11.2002C6.75816 10.7529 7.23837 10.3437 7.70281 9.94789C8.94893 8.88603 10.0251 7.96897 10.7732 7.07926C11.6102 6.0838 12 5.15511 12 4.1566C12 3.2393 11.6891 2.3813 11.1245 1.74064ZM7.24671 9.41277C6.8464 9.75387 6.43441 10.1049 6 10.4826C5.56561 10.105 5.1536 9.7539 4.75322 9.41272C2.31434 7.33444 0.703125 5.96145 0.703125 4.1566C0.703125 3.41059 0.95168 2.71768 1.40302 2.20555C1.85953 1.6876 2.49326 1.40234 3.1875 1.40234C4.15146 1.40234 4.77459 1.9962 5.12756 2.49439C5.44418 2.9412 5.60939 3.39162 5.66573 3.56452C5.71287 3.70925 5.8478 3.80719 6 3.80719C6.1522 3.80719 6.28713 3.70925 6.33427 3.56452C6.39061 3.39162 6.55582 2.9412 6.87244 2.49437C7.22541 1.9962 7.84854 1.40234 8.8125 1.40234C9.50674 1.40234 10.1405 1.6876 10.597 2.20555C11.0483 2.71768 11.2969 3.41059 11.2969 4.1566C11.2969 5.96145 9.68566 7.33444 7.24671 9.41277Z" fill="black" fillOpacity="0.65"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_20_379">
                                        <rect width="12" height="12" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={style_channels.textStatistic}>{props.arrCountLikesPost}</div>
                            </div>
                            <div className={style_channels.commentsCountForArticles}>
                                <div className={style_channels.iconComments}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M11.6837 11.9869H11.5953L8.98686 11.2037C7.72553 11.9277 6.24417 12.1689 4.81831 11.8825C3.39246 11.596 2.11917 10.8015 1.23528 9.64655C0.351387 8.49162 -0.0829319 7.05497 0.0131028 5.6038C0.109138 4.15263 0.728988 2.78574 1.75736 1.75736C2.78574 0.728988 4.15263 0.109138 5.6038 0.0131028C7.05497 -0.0829319 8.49162 0.351387 9.64655 1.23528C10.8015 2.11917 11.596 3.39246 11.8825 4.81831C12.1689 6.24417 11.9277 7.72553 11.2037 8.98686L11.9869 11.5953C12.002 11.6495 12.0024 11.7068 11.9879 11.7612C11.9735 11.8156 11.9448 11.8652 11.9048 11.9048C11.8755 11.9328 11.8407 11.9546 11.8027 11.9687C11.7647 11.9828 11.7242 11.989 11.6837 11.9869ZM5.9995 0.618454C5.17116 0.618044 4.35396 0.809322 3.61186 1.17732C2.86975 1.54532 2.22287 2.08006 1.72183 2.73968C1.2208 3.39931 0.879202 4.16593 0.723776 4.97956C0.56835 5.79319 0.603311 6.63174 0.825924 7.42961C1.04854 8.22747 1.45276 8.963 2.00697 9.57863C2.56117 10.1943 3.25032 10.6733 4.02048 10.9782C4.79064 11.2832 5.62093 11.4058 6.44636 11.3364C7.27179 11.2671 8.06997 11.0076 8.77844 10.5784C8.81615 10.5534 8.85921 10.5374 8.90417 10.5319C8.94913 10.5265 8.99475 10.5316 9.03739 10.5469L11.21 11.1784L10.5784 9.00581C10.5645 8.96295 10.5602 8.91757 10.5656 8.87285C10.5711 8.82812 10.5862 8.78512 10.61 8.74686C11.0986 7.93176 11.362 7.00158 11.3735 6.05133C11.3849 5.10109 11.1438 4.16485 10.675 3.33825C10.2061 2.51165 9.52624 1.82432 8.70481 1.34648C7.88337 0.868634 6.94981 0.617405 5.9995 0.618454Z" fill="black" fillOpacity="0.65"/>
                                    </svg>
                                </div>
                                <div className={style_channels.textStatistic}>{props.arrCountCommentsPost}</div>
                            </div>
                            <div className={style_channels.bookmarksCountForArticles}>
                                <div className={style_channels.iconBookmarks}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                        <path d="M1 3V10.6888C1 12.1935 2.59899 13.1593 3.93078 12.459L6.17413 11.2794L8.01783 12.3188C9.35106 13.0704 11 12.1071 11 10.5766V3C11 1.89543 10.1046 1 9 1H3C1.89543 1 1 1.89543 1 3Z" stroke="black" strokeOpacity="0.65"/>
                                    </svg>
                                </div>
                                <div className={style_channels.textStatistic}>{props.arrCountSubscriptionsPost}</div>
                            </div>
                        </div>
                    </div>
                </div>


    )
  }
  
  export default PostCardForMyChannel;
  