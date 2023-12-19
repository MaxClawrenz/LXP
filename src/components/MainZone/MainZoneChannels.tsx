import { IMainZoneChannels } from '../../interfaces/IMainZoneChannels';
import MyChannel from './MyChannel';


function MainZoneChannels(props:IMainZoneChannels) {
    return (
    <div className="MainZone">
        <MyChannel userId={0}/>

    </div>
    )
  }
  
  export default MainZoneChannels;
  