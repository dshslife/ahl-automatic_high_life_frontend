import React from 'react';
import './style.scss';

import Picture from 'components/picture';
import { useNavigate } from 'react-router-dom';

function RadioButton({ name = "", to }) {
    const navigate = useNavigate();
    
    function Goto() {
        navigate(to);
    }

    return (
        <div className="RadioButton">
            <input type='radio' className='NavBarButton' name='NavBar' id={name}></input>
            <label onClick={Goto} htmlFor={name}>{name}</label>
        </div>
    )
}

function Navbar({ ProfileImage = "", children }) {
    return (
        <div className='Navbar'>
            <div className="TopBar">
                <h3>{process.env.REACT_APP_NAME}</h3>
                <Picture url={ProfileImage} width="30px" height="30px"></Picture>
            </div>
            <div className="Content">
                <div className="NavTool">
                    <RadioButton name='공유 체크리스트' to="/main/share_checklist"></RadioButton>
                    <RadioButton name='시간표' to="/main/timetable"></RadioButton>
                    <RadioButton name='교실 및 교무실' to="/main/classroom"></RadioButton>
                    <RadioButton name='급식표 알리미' to="/main/bap"></RadioButton>
                </div>
                <div className="ContentReal">
                    {children}
                </div>
            </div>
        </div >
    );
}

export default Navbar;