
import { ICommentsForMyChannel } from '../../interfaces/ICommentsForMyChannel';
import ComponentCommentForMyChannel from './ComponentCommentForMyChannel';
import style_channels from './style_channels.module.css';

function CommentsForMyChannel(props:ICommentsForMyChannel) {
    return (
        <div className={style_channels.blockForComments}>
            {props.arrComments.map((comment) => (
            <ComponentCommentForMyChannel key={comment.commentId} authorID={comment.authorID} avatarChannelID={comment.avatarChannelID} commentId={comment.commentId} commentNamePost={comment.commentNamePost} commentPersonId={comment.commentPersonId} commentPersonFullname={comment.commentPersonFullname} avatarUserCommentId={comment.avatarUserCommentId} commentCreateDate={comment.commentCreateDate} commentMessage={comment.commentMessage} />
            ))}
        </div>

    )
  }
  
  export default CommentsForMyChannel;
  