import React from 'react';
import "./style.scss";
import ErrorImage from 'asset/image/server.png';


function Picture({ width, height, url = "1", animation = true, delay = 500, options = {} }) {

    function onPictureLoaded(e) {
        if (animation) {
            setTimeout(() => {
                e.target.classList.remove("LoadingImg");
            }, delay);
        }
    }

    function onPictureError(e) {
        e.target.src = ErrorImage;
    }

    return (
        <div className='PictureCont' style={{ width: width, height: height }}>
            <img {...options} className='LoadingImg' src={url} alt="로딩중" onError={onPictureError} onLoad={onPictureLoaded} />
        </div>
    );
}

export default Picture;