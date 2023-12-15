
import ComponentCommentForMyChannel from './ComponentCommentForMyChannel';
import style_channels from './style_channels.module.css';

function CommentsForMyChannel() {
    return (
        <div className={style_channels.blockForComments}>
            <ComponentCommentForMyChannel />
            <ComponentCommentForMyChannel />
            <ComponentCommentForMyChannel />
        </div>

    )
  }
  
  export default CommentsForMyChannel;
  