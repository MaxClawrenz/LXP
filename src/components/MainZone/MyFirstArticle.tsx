import { IMyFirstArticle } from '../../interfaces/IMyFirstArticle';
import style_channels from './style_channels.module.css';

function MyFirstArticle(props:IMyFirstArticle) {
    return (
                <div className={style_channels.blockCreateFirstArticle}>
                    <div className={style_channels.descriptCreateFirstArticle}>Напишите первую статью, чтобы читатель увидел её</div>
                    <div className={style_channels.btnCreateFirstArticle}>Создать запись</div>
                </div>
    )
  }
  
  export default MyFirstArticle;
  