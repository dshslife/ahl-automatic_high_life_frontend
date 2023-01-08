import React from 'react';
import "./style.scss";

import Picture from 'components/picture';
import GLogo from 'asset/image/glogin.png';


function Button({ text = "", onClick, options = {} }) {
    return (
        <button {...options} className='Button' onClick={onClick}>{text}</button>
    );
}



export function GLoginButton({onClick}) {
    return (
        <div className="GoogleLogin" onClick={onClick}>
        <div style={{ width: "30px", height: "30px" }}>
            <Picture url={GLogo}></Picture>
        </div>
        <h3>구글계정으로 로그인하기</h3>
    </div>

    )
}

export default Button;