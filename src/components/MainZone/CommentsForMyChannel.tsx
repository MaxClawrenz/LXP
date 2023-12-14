
import style_channels from './style_channels.module.css';

function CommentsForMyChannel() {
    return (
        <div className="blockForComments">
            <div className="componentComment">
                <div className="titlePost">
                Adobe анонсировала несколько новых нейросетей — в том числе для создания векторных иллюстраций
                </div>
                <div className="blockWithAythorCommentAndTime">
                    <div className="authorComment">
                        <div className="avatarAuthorComment">
                            <img className='imgAvatarAuthorComment' src='https://via.placeholder.com/150/92c952' alt=''/>
                        </div>
                        <div className="nameAuthorCommet">Туктаров Максим</div>
                    </div>
                    <div className="timeAgoCreateComment">15 минут </div>
                </div>
                <div className="textComment">
                Ура ура! Новые фишки подъехали! Кто уже пробовал?
                </div>
                <div className="btnAnswer">Ответить</div>
            </div>
        </div>

    )
  }
  
  export default CommentsForMyChannel;
  