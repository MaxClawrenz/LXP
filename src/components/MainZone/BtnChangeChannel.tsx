import { useEffect, useRef, useState } from 'react';
import { IBtnChangeChannel } from '../../interfaces/IBtnChangeChannel';
import BtnsEditAndChangeChannel from './BtnsEditAndChangeChannel';
import style_channels from './style_channels.module.css';
import { CSSTransition } from 'react-transition-group';

function BtnChangeChannel(props:IBtnChangeChannel) {
    const [showBtnsChange, setShowBtnsChange] = useState<boolean>(false);
    const btnsChangeAndThemeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (btnsChangeAndThemeRef.current && !btnsChangeAndThemeRef.current.contains(event.target as Node)) {
                setShowBtnsChange(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [btnsChangeAndThemeRef]);

    return (
        <div className={style_channels.btnsChangeAndTheme} ref={btnsChangeAndThemeRef}>
                    <div className={style_channels.buttonChange} onClick={() => {showBtnsChange?setShowBtnsChange(false):setShowBtnsChange(true)}}>
                        <svg className={style_channels.buttonChangeSvg} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99994 4.69751C6.62744 4.69751 4.69714 6.62781 4.69714 9.00031C4.69714 11.3728 6.62744 13.3031 8.99994 13.3031C11.3724 13.3031 13.3027 11.3728 13.3027 9.00031C13.3027 6.62781 11.3724 4.69751 8.99994 4.69751ZM8.99994 12.2274C7.22057 12.2274 5.77284 10.7797 5.77284 9.00031C5.77284 7.22093 7.22057 5.77321 8.99994 5.77321C10.7793 5.77321 12.227 7.22093 12.227 9.00031C12.227 10.7797 10.7793 12.2274 8.99994 12.2274Z" fill="#CCCCCC"/>
                        <path d="M17.5765 6.9505L16.193 6.64975C16.0727 6.28143 15.9237 5.92218 15.7478 5.57611L16.5137 4.38478C16.6505 4.17192 16.6204 3.89246 16.4416 3.71365L14.2863 1.55841C14.1075 1.37961 13.8281 1.34953 13.6152 1.48631L12.4239 2.2522C12.0778 2.07628 11.7186 1.92728 11.3503 1.80698L11.0495 0.423523C10.9958 0.176331 10.7769 0 10.5239 0H7.47606C7.2231 0 7.0042 0.176331 6.9505 0.423523L6.64975 1.80698C6.28143 1.92728 5.92218 2.07628 5.57611 2.2522L4.38478 1.48631C4.17192 1.34953 3.89246 1.37961 3.71365 1.55841L1.55841 3.71365C1.37961 3.89246 1.34953 4.17192 1.48631 4.38478L2.2522 5.57611C2.07628 5.92218 1.92728 6.28143 1.80698 6.64975L0.423523 6.9505C0.176331 7.00433 0 7.2231 0 7.47606V10.5239C0 10.7769 0.176331 10.9957 0.423523 11.0495L1.80698 11.3503C1.92728 11.7186 2.07628 12.0778 2.2522 12.4239L1.48631 13.6152C1.34953 13.8281 1.37961 14.1075 1.55841 14.2863L3.71365 16.4416C3.89246 16.6204 4.17192 16.6505 4.38478 16.5137L5.57611 15.7478C5.92218 15.9237 6.28143 16.0727 6.64975 16.193L6.9505 17.5765C7.0042 17.8237 7.2231 18 7.47606 18H10.5239C10.7769 18 10.9958 17.8237 11.0495 17.5765L11.3503 16.193C11.7186 16.0727 12.0778 15.9237 12.4239 15.7478L13.6152 16.5137C13.8281 16.6505 14.1075 16.6205 14.2863 16.4416L16.4416 14.2863C16.6204 14.1075 16.6505 13.8281 16.5137 13.6152L15.7478 12.4239C15.9237 12.0778 16.0727 11.7186 16.193 11.3503L17.5765 11.0495C17.8237 10.9957 18 10.7769 18 10.5239V7.47606C18 7.2231 17.8237 7.00433 17.5765 6.9505ZM16.9243 10.0904L15.6558 10.3661C15.4609 10.4086 15.3055 10.5553 15.2519 10.7472C15.1125 11.2473 14.912 11.7308 14.656 12.1844C14.558 12.3581 14.564 12.5718 14.672 12.7396L15.3744 13.8322L13.8323 15.3744L12.7396 14.672C12.5718 14.564 12.3581 14.558 12.1845 14.656C11.7308 14.912 11.2473 15.1125 10.7472 15.2519C10.5553 15.3055 10.4086 15.4609 10.3661 15.6558L10.0904 16.9243H7.90961L7.63385 15.6558C7.59142 15.4609 7.44475 15.3055 7.25276 15.2519C6.75275 15.1125 6.26921 14.912 5.81561 14.656C5.64189 14.558 5.42821 14.5642 5.26039 14.672L4.1678 15.3744L2.62573 13.8322L3.32803 12.7396C3.43597 12.5718 3.44215 12.3581 3.3441 12.1844C3.08812 11.7308 2.88762 11.2473 2.74809 10.7472C2.69453 10.5553 2.53922 10.4086 2.34435 10.3661L1.0757 10.0904V7.90961L2.34421 7.63385C2.53908 7.59142 2.69453 7.44475 2.74809 7.25276C2.88748 6.75275 3.08798 6.26921 3.34396 5.81561C3.44202 5.64189 3.43597 5.42821 3.32803 5.26039L2.6256 4.1678L4.16766 2.6256L5.26039 3.32803C5.42821 3.43597 5.64189 3.44202 5.81548 3.34396C6.26921 3.08798 6.75275 2.88748 7.25276 2.74809C7.44475 2.69453 7.59142 2.53908 7.63385 2.34421L7.90961 1.0757H10.0904L10.3661 2.34421C10.4086 2.53908 10.5553 2.69453 10.7472 2.74809C11.2473 2.88748 11.7308 3.08798 12.1844 3.34396C12.3581 3.44202 12.5718 3.43584 12.7396 3.32803L13.8322 2.6256L15.3743 4.1678L14.672 5.26039C14.564 5.42821 14.5578 5.64189 14.6559 5.81561C14.912 6.26921 15.1124 6.75275 15.2519 7.25276C15.3055 7.44475 15.4608 7.59142 15.6557 7.63385L16.9243 7.90961V10.0904Z" fill="#CCCCCC"/>
                        </svg>
                    </div>
                    {showBtnsChange &&
                    <CSSTransition in={showBtnsChange} timeout={300} classNames="fadeBtns" unmountOnExit>
                    <div className={`${style_channels.btnsChangeAndTheme}${style_channels.fadeBtns}`}>
                            <BtnsEditAndChangeChannel
                            key={props.channelId}
                            channelId={props.channelId}
                            channelName={props.channelName}
                            authorID={props.authorID}
                            authorFullname={props.authorFullname}
                            channelDecript={props.channelDecript}
                            avatarChannelID={props.avatarChannelID}
                            coverChannelID={props.coverChannelID}
                            arrPostsInChannel={props.arrPostsInChannel}
                            arrSubscriptionsInChannel={props.arrSubscriptionsInChannel}
                            arrKnowlegesParts={props.arrKnowlegesParts}
                            arrTags={props.arrTags}
                            arrComments={props.arrComments}
                            arrCountSubscriptionsChannels={props.arrCountSubscriptionsChannels}
                            arrAuthors={props.arrAuthors}
                            arrAllClassificators={props.arrAllClassificators}
                            coverChannel={props.coverChannel}
                            setCoverChannel={props.setCoverChannel} 
                            avatarChannel={props.avatarChannel} 
                            setAvatarChannel={props.setAvatarChannel} 
                            channelAvatarDialog={props.channelAvatarDialog} 
                            setChannelAvatarDialog={props.setChannelAvatarDialog}
                            nameChannel = {props.nameChannel}
                            setNameChannel = {props.setNameChannel}
                            descriptChannel = {props.descriptChannel}
                            setDescriptChannel = {props.setDescriptChannel}  />
                        </div>
                        </CSSTransition>
                    }
     
    </div>
                    
    );
}

export default BtnChangeChannel;