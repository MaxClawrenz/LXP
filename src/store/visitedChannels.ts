import { makeAutoObservable, runInAction } from "mobx";
import { IChannelElement } from "../interfaces/IChannelElement";

class visitedChannels{
    storedChannelsArr = localStorage.getItem('channelsArr');
    channelsArr:IChannelElement[] = this.storedChannelsArr ? JSON.parse(this.storedChannelsArr) : [];

    constructor(){
        makeAutoObservable(this);
    }

    //метод для обновления массива
    unshiftChannels(channel:IChannelElement){
        runInAction(()=>{
            const hasObject = this.channelsArr.some(item => item.channel_id === channel.channel_id);
            if(!hasObject){
                this.channelsArr.push(channel);
                this.channelsArr = this.channelsArr.filter((item, index, self) => {
                    return index === self.findIndex(t => (
                        t.channel_id === item.channel_id
                    ))
                })
                this.channelsArr = this.channelsArr.slice(0,5);
            }else{
                this.channelsArr = this.channelsArr.map(item => {
                    if(item.channel_id === channel.channel_id){
                        return {
                            ...item,
                            count: ++item.count
                        }
                    }
                    return item;
                })
            }
            this.channelsArr = this.channelsArr.sort((a,b)=> b.count - a.count);
            const channelsArrJson = JSON.stringify(this.channelsArr);
            localStorage.setItem('channelsArr', channelsArrJson);
        })
    }
}

export default new visitedChannels()