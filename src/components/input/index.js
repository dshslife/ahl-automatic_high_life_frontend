import React from 'react';
import './style.scss';

function Input({type = 'text', placeholder="", options={}}) {
    return (
        <input {...options} type={type} className="Input" placeholder={placeholder}/>
    );
}

export default Input;