import { useEffect, useRef, useState } from "react";
import styles from "../../style.module.css";
import style_channels from "../MainZone/style_channels.module.css";
import { CSSTransition } from 'react-transition-group';
import CreateChannelForm from "../MainZone/CreateChannelForm";
import { observer } from "mobx-react-lite";
import createChannel from "../../store/createChannel";

function HeaderButton() {

  const [dialogCreateChannel, setDialogCreateChannel] = useState<boolean>(false);
  const dialogCreateChannelRef = useRef<HTMLDivElement>(null);
  const [createChannelForm, setCreateChannelForm] = useState<boolean>(false);
  const [createdChannelData, setCreatedChannelData] = useState<any>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (dialogCreateChannelRef.current && !dialogCreateChannelRef.current.contains(event.target as Node)) {
          setDialogCreateChannel(false);
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dialogCreateChannelRef]);

  const createChannelStageOne = async () => {
      const newChannelData = await createChannel.createChannelStageOne();
      setCreatedChannelData(newChannelData);
      setDialogCreateChannel(false);
      setCreateChannelForm(true);
  }

  return (
    <div className="blockBtnAndItem">
      <div className={styles.HeaderButton} onClick={() => {dialogCreateChannel ? setDialogCreateChannel(false) : setDialogCreateChannel(true)} }>+ Создать статью или канал</div>
    
      {dialogCreateChannel && (
        <CSSTransition in={dialogCreateChannel} timeout={300} classNames="fadeBtns" unmountOnExit>
          <div className={style_channels.blockCreateChannelOrArticle} ref={dialogCreateChannelRef}>
            <div className={style_channels.blockItemsBtn}>
              <div className={style_channels.btnsInBlockCreateChannel} onClick={createChannelStageOne}>Создать канал</div>
              <div className={style_channels.btnsInBlockCreateChannel}>Создать статью</div>
            </div>
          </div>
        </CSSTransition>
      )}

      {createChannelForm && (
        <div className="blockForFormCreateChannel">
          <CreateChannelForm createChannelForm={createChannelForm} setCreateChannelForm={setCreateChannelForm} channelData={createdChannelData}/>
        </div>
      )}
    </div>
  )
}

export default observer(HeaderButton);
