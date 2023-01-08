import React from 'react';
import './style.scss';

import DSHSLogo from "asset/image/dshslogo.png";

function Logo() {
    return (
        <div className="coin">
            <div className="front" style={{background:`url(${DSHSLogo})`, backgroundSize:'cover', backgroundColor:'rgba(240, 240, 240, 0.9)'}}></div>
            <div className="back" style={{background:`url(${DSHSLogo})`, backgroundSize:'cover', backgroundColor:'rgba(240, 240, 240, 0.9)'}}></div>
            <div className="side">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default Logo;