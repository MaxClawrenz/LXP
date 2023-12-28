
import { IComponentCommentForMyChannel } from '../../interfaces/IComponentCommentForMyChannel';
import style_channels from './style_channels.module.css';

function ComponentCommentForMyChannel(props:IComponentCommentForMyChannel) {
    return (      
            <div className={style_channels.componentComment}>
                <div className={style_channels.titlePost}>
                {props.commentNamePost}
                </div>
                <div className={style_channels.blockWithAythorCommentAndTime}>
                    <div className={style_channels.authorComment}>
                        <div className={style_channels.avatarAuthorComment}>
                            <img className={style_channels.imgAvatarAuthorComment} src={props.avatarUserCommentId} alt=''/>
                        </div>
                        <div className={style_channels.nameAuthorCommet}>{props.commentPersonFullname}</div>
                    </div>
                    <div className={style_channels.timeAgoCreateComment}>{props.commentCreateDate}</div>
                </div>
                <div className={style_channels.textComment}>
                {props.commentMessage}
                </div>
                <div className={style_channels.btnAnswer} id='`${props.commentId}`'>Ответить</div>
            </div>

    )
  }
  
  export default ComponentCommentForMyChannel;
  