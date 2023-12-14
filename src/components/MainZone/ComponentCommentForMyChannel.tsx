
import style_channels from './style_channels.module.css';

function ComponentCommentForMyChannel() {
    return (      
            <div className={style_channels.componentComment}>
                <div className={style_channels.titlePost}>
                Adobe анонсировала несколько новых нейросетей — в том числе для создания векторных иллюстраций
                </div>
                <div className={style_channels.blockWithAythorCommentAndTime}>
                    <div className={style_channels.authorComment}>
                        <div className={style_channels.avatarAuthorComment}>
                            <img className={style_channels.imgAvatarAuthorComment} src='https://via.placeholder.com/150/92c952' alt=''/>
                        </div>
                        <div className={style_channels.nameAuthorCommet}>Туктаров Максим</div>
                    </div>
                    <div className={style_channels.timeAgoCreateComment}>15 минут </div>
                </div>
                <div className={style_channels.textComment}>
                Ура ура! Новые фишки подъехали! Кто уже пробовал?
                </div>
                <div className={style_channels.btnAnswer}>Ответить</div>
            </div>

    )
  }
  
  export default ComponentCommentForMyChannel;
  