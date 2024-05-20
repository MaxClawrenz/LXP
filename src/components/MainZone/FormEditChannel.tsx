import { useState } from 'react';
import { IFormEditChannel } from '../../interfaces/IFormEditChannel';
import style_channels from './style_channels.module.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Cropper from 'react-easy-crop';
import EditCoverChannelForm from './EditCoverChannelForm';
import EditAvatarChannelForm from './EditAvatarChannelForm';
import { observer } from 'mobx-react-lite';
import EditFormChannel from '../../store/EditFormChannel';
import { values } from 'mobx';
import MainZoneChannels from '../../store/MainZoneChannels';



function FormEditChannel(props:IFormEditChannel) {
    const [channelCoverDialog, setchannelCoverDialog] = useState<boolean>(false);
    const [channelName, setChannelName] = useState<string>(props.channelName);
    const [channelDecript, setChannelDecript] = useState<string>(props.channelDecript);
    const [arrAuthors, setArrAuthors] = useState<any>(props.arrAuthors);
    const [themeChannel, setThemeChannel] = useState<any>(props.arrKnowlegesParts[0].knowlegeName);
    const [searchAuthor, setSearchAuthor] = useState<string>('');

    const handleChannelNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChannelName(e.target.value);
    };

    const handleChannelDecriptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChannelDecript(e.target.value);
    };

    const handleThemeChannel = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setThemeChannel(e.target.value);
    };


    // Удаление автора канала
    const handleDeleteAuthor = (key: number, id: number, arrAuthors: any) => () => {
        EditFormChannel.deleteAuthor(key, id, arrAuthors);
        // Обновление массива авторов в компоненте после удаления
        const updatedAuthors = arrAuthors.filter((author: any) => author.authorInArrId !== id);
        setArrAuthors(updatedAuthors);
    };

    const saveChangeChannel = () => {
       // Создаем объект с данными для отправки
    const formData = {
        channel_id: props.channelId,
        channel_name: channelName,
        channel_decript: channelDecript,
        selected_classificatorId: themeChannel
    };

    // Вызываем метод в MobX для сохранения изменений
    EditFormChannel.saveChannelChanges(formData);
    props.setEditChannelForm(false);
    props.setNameChannel(channelName);
    props.setDescriptChannel(channelDecript);
    };

    const handleSearchAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchAuthor(e.target.value);
    }

      

    return (
        <>
        <div className={style_channels.GrayMaskForFormEdit}></div>
        {channelCoverDialog &&
            <EditCoverChannelForm channelId={props.channelId} coverChannelID={props.coverChannelID} channelCoverDialog={channelCoverDialog} setchannelCoverDialog={setchannelCoverDialog} coverChannel={props.coverChannel} setCoverChannel={props.setCoverChannel} />
        }

        {props.channelAvatarDialog &&
            <EditAvatarChannelForm channelId={props.channelId} coverChannelID={props.coverChannelID} avatarChannel={props.avatarChannel} setAvatarChannel={props.setAvatarChannel} channelAvatarDialog={props.channelAvatarDialog} setChannelAvatarDialog={props.setChannelAvatarDialog} />
        }

               <div className={style_channels.blockForFormEdit}>
                    <div className={style_channels.allInfoChannelBlock}>
                        <div className={style_channels.blockForImgCoverChannelFormEdit}>
                            <div className={style_channels.iconChangedAndTextFormEdit} onClick={() => {setchannelCoverDialog(true)}}>
                                            <div className={style_channels.blockicon}>
                                                <svg id={style_channels.iconChangedAvatarCover} xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                                <path d="M8.25138 7.67001C9.2549 7.67001 10.0715 6.7817 10.0715 5.68985C10.0715 4.59784 9.2549 3.70953 8.25138 3.70953C7.24786 3.70953 6.43143 4.59784 6.43143 5.68985C6.43143 6.7817 7.24786 7.67001 8.25138 7.67001ZM8.25138 4.87095C8.66641 4.87095 9.00402 5.23828 9.00402 5.68985C9.00402 6.14126 8.66641 6.50859 8.25138 6.50859C7.83649 6.50859 7.49888 6.14126 7.49888 5.68985C7.49888 5.23828 7.83649 4.87095 8.25138 4.87095Z" fill="white" />
                                                <path d="M17.5527 0H0.665214C0.298415 0 0 0.324684 0 0.723771V16.2762C0 16.6753 0.298415 17 0.665214 17H17.5527C17.9195 17 18.2179 16.6753 18.2179 16.2762V0.723771C18.2179 0.324684 17.9195 0 17.5527 0ZM17.1504 1.16142V10.3524L13.7932 6.69949C13.5743 6.46177 13.2184 6.46192 12.9996 6.69995L8.25151 11.866L5.21858 8.56624C5.11253 8.4507 4.97145 8.38703 4.82134 8.38703C4.67137 8.38703 4.53043 8.45055 4.42438 8.56594L1.06746 12.2184V1.16142H17.1504ZM1.06746 15.8386V13.8608L4.82134 9.7765L7.85413 13.0763C7.96032 13.1918 8.1014 13.2556 8.25151 13.2556C8.40134 13.2556 8.54242 13.192 8.64833 13.0766L13.3966 7.91037L17.1506 11.9948V15.8386H1.06746Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div className={style_channels.changedText}>Изменить</div>
                            </div>
                            <img src={`/download_file.html?file_id=${props.coverChannel}`} className={style_channels.imgCoverChannel} alt=''/>
                        </div>
                        <div className={style_channels.backgroundBlockForm}>
                            <div className={style_channels.avatarChannelButtonFormEdit}>
                                <div className={style_channels.blockForIconChangeAndAvatar} onClick={() => {props.setChannelAvatarDialog(true)}}>
                                    <div className={style_channels.iconAndTextFormEditAvatar}>
                                        <svg id={style_channels.iconChangedAvatarFormEdit} xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M8.25138 7.67001C9.2549 7.67001 10.0715 6.7817 10.0715 5.68985C10.0715 4.59784 9.2549 3.70953 8.25138 3.70953C7.24786 3.70953 6.43143 4.59784 6.43143 5.68985C6.43143 6.7817 7.24786 7.67001 8.25138 7.67001ZM8.25138 4.87095C8.66641 4.87095 9.00402 5.23828 9.00402 5.68985C9.00402 6.14126 8.66641 6.50859 8.25138 6.50859C7.83649 6.50859 7.49888 6.14126 7.49888 5.68985C7.49888 5.23828 7.83649 4.87095 8.25138 4.87095Z" fill="white" />
                                            <path d="M17.5527 0H0.665214C0.298415 0 0 0.324684 0 0.723771V16.2762C0 16.6753 0.298415 17 0.665214 17H17.5527C17.9195 17 18.2179 16.6753 18.2179 16.2762V0.723771C18.2179 0.324684 17.9195 0 17.5527 0ZM17.1504 1.16142V10.3524L13.7932 6.69949C13.5743 6.46177 13.2184 6.46192 12.9996 6.69995L8.25151 11.866L5.21858 8.56624C5.11253 8.4507 4.97145 8.38703 4.82134 8.38703C4.67137 8.38703 4.53043 8.45055 4.42438 8.56594L1.06746 12.2184V1.16142H17.1504ZM1.06746 15.8386V13.8608L4.82134 9.7765L7.85413 13.0763C7.96032 13.1918 8.1014 13.2556 8.25151 13.2556C8.40134 13.2556 8.54242 13.192 8.64833 13.0766L13.3966 7.91037L17.1506 11.9948V15.8386H1.06746Z" fill="white" />
                                        </svg>
                                        <div className={style_channels.changedTextFormEditAvatar}>Изменить</div>
                                    </div>
                                    <img alt='' className={style_channels.imgChannelEditForm} src={`/download_file.html?file_id=${props.avatarChannel}`} id="" />
                                </div>
                            </div>
                            <div className={style_channels.blockForInfoFormEdit}>
                                <div className={style_channels.titleAndCloseFormEdit}>
                                    <div className={style_channels.titleFormEdit}>Информация о канале</div>
                                    <div className={style_channels.btnCloseFormEdit} onClick={() => {props.setEditChannelForm(false)}}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L20 20" stroke="#606060" stroke-width="3" stroke-linecap="round"/>
                                            <path d="M20 2L2 20" stroke="#606060" stroke-width="3" stroke-linecap="round"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className={style_channels.inputsInfoEditForm}>
                                    <div className={style_channels.titleInputFormEdit}>Название канала</div>
                                    <div className={style_channels.inputStyleBlockFormEdit}>
                                        <input id="channelNameInputEditForm" className={style_channels.inputFormEdit} placeholder='' value={channelName} onChange={handleChannelNameChange} maxLength={50}/>
                                        <output className={style_channels.outputFormEdit}> {channelName.length}/ 50</output>
                                    </div>
                                </div>

                                <div className={style_channels.inputsInfoEditForm}>
                                    <div className={style_channels.titleInputFormEdit}>Описание канала</div>
                                    <div className={style_channels.inputStyleBlockFormEdit}>
                                        <input id="channelNameInputEditForm" className={style_channels.inputFormEdit} placeholder='' value={channelDecript} onChange={handleChannelDecriptChange} maxLength={80}/>
                                        <output className={style_channels.outputFormEdit}>{channelDecript.length} / 80</output>
                                    </div>
                                </div>

                                <div className={style_channels.inputsInfoEditForm}>
                                    <div className={style_channels.titleInputFormEdit}>Авторы канала</div>
                                    <div className={style_channels.inputStyleBlockFormEdit}>
                                       
                                    {arrAuthors.length > 1 &&
                                        <Stack direction="row" spacing={1}>
                                            {arrAuthors.map( (author: any) => (
                                                <Chip
                                                key = {props.channelId}
                                                sx={{ fontSize: 14}}
                                                label={author.authorInArrFullname}
                                                onDelete={handleDeleteAuthor(props.channelId, author.authorInArrId, arrAuthors)}
                                                id={author.authorInArrId}
                                                size="medium"
                                                /> 
                                            )
                                            )
                                            }
                                        </Stack>
                                    }

                                    {arrAuthors.length === 1 &&
                                        <Stack direction="row" spacing={1}>
                                            {arrAuthors.map( (author:any) => (
                                               
                                                <Chip
                                                sx={{ fontSize: 14}}
                                                label={author.authorInArrFullname}
                                                id={author.authorInArrId}
                                                size="medium"
                                                />
                                            )
                                            )
                                            }
                                        </Stack>
                                    }



                                      
                                        <input id="channelNameInputEditForm" className={style_channels.inputFormEditAddAuthor} placeholder='Добавить автора' value={searchAuthor} onChange={handleSearchAuthor} />
                                    </div>


                                </div>

                                <div className={style_channels.blockForThemes}>
                                    <div className={style_channels.titlesBlockThemes}>На какие темы вам хочется публиковать статьи</div>
                                    <div className={style_channels.textDescriptThemes}>
                                        Выберите тему, которую вы будете освещать в своём канале. Обратите внимание, что канал можно вести только на <b>одну выбранную тему</b>. Если вы планируете публиковать контент на разные темы, то вам необходимо завести отдельный канал.
                                    </div>
                                    <div className={style_channels.allThemesBlock}>
                                    <label>
                                    <select className={style_channels.radioLabel} value={themeChannel} onChange={handleThemeChannel}>
                                        {props.arrAllClassificators.map( (classificator) => 
                                            <option className={style_channels.radioVariant} value={classificator.classificatorId} id="idTheme" >{classificator.classificatorName}</option>
                                        )
                                        }
                                    </select>
                                        </label>
                                    </div>
                                </div>

                                <div className={style_channels.blockButtonsSaveAndDel}>
                                    <div className={style_channels.btnSaveChannel} onClick={saveChangeChannel}>Сохранить</div>
                                    <div className={style_channels.btnDeleteChannel}>Удалить канал</div>
                                </div>

                            </div>

                        </div>
                      



                    </div>
               </div>
        </>
    )
  }
  
  export default observer(FormEditChannel);
  