import { IMainPageChannels } from "../interfaces/IMainPageChannels";
import style from "../style.module.css";
import MainZoneChannels from "./MainZone/MainZoneChannels";


function MainPageChannels(props: IMainPageChannels) {
  
  return (
    <div className={style.MainPage}>
      <MainZoneChannels/>
    </div>
  );
}

export default MainPageChannels;
