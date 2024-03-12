import Cropper from 'react-easy-crop';
import { IEditCoverChannelForm } from '../../interfaces/IEditCoverChannelForm';
import style_channels from './style_channels.module.css';
import { forwardRef, useRef, useState } from 'react';
import axios from 'axios';

const EditCoverChannelForm = forwardRef((props:IEditCoverChannelForm, ref:any) => {
    const [image, setImage] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);

    const onCropComplete = (croppedArea: any, croppedAreaPixels:any) => { setCroppedAreaPixels(croppedAreaPixels) }; 
    
    const handleFileChange = (e:any) => { 
        const file = e.target.files[0]; 
        if (file) { 
            const reader = new FileReader(); 
            reader.onload = () => { 
                setImage(reader.result as string); 
            }; 
            reader.readAsDataURL(file); 
        } 
    }; 

    const handleCrop = async (croppedImage: string, channelId: number) => {
        try {
            const form = new FormData();
            form.append('imgSrc', await fetch(croppedImage).then((r) => r.blob()), 'image-from-base64.png');
            form.append('id_channel', channelId.toString());
    
            const result = await axios.post(
                'custom_web_template.html?object_code=save_new_channel_cover_back',
                form,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
    
            // Обработка результата
        } catch (error) {
            console.log(error);
        }
    }; 

    return (
        <div className={style_channels.blockDialogForEditCover} ref={ref}>
            <div className={style_channels.title_and_close}>
                <div className={style_channels.title_edit_cover}>Редактировать обложку</div>
                <div className={style_channels.btn_close_dialogEditCover} onClick={() => {props.setchannelCoverDialog(false)}}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L20 20" stroke="#606060" strokeWidth="3" strokeLinecap="round"/>
                        <path d="M20 2L2 20" stroke="#606060" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>
            <div className={style_channels.text_editor}>Выберите картинку и отредактируйте при необходимости. 
            <p>Вы можете изменять масштаб изображения колёсиком мыши или тачпадом.</p>
            </div>
            <input className='img_for_inp' type="file" accept="image/png, image/gif, image/jpeg" onChange={handleFileChange} />

            {image &&
                <div className={style_channels.block_for_cropper}>
                    <Cropper 
                    image={image} 
                    crop={crop} 
                    zoom={zoom} 
                    aspect={12/3} 
                    onCropChange={setCrop} 
                    onZoomChange={setZoom} 
                    onCropComplete={onCropComplete} 
                    ref={imgRef as any} /> 
                    <button className="btn_save_photo" onClick={() => handleCrop(image, props.channelId)}>Сохранить</button> 
                </div> 
            }
        </div>
    )
});

export default EditCoverChannelForm;

