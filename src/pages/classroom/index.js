import React from 'react';
import './style.scss';

import Button from 'components/button';
import Input from 'components/input';


function ClassroomPage() {
    return (
        <div className="ClassroomCont">
            <h1 className='green'>교실 및 교무실</h1>
            <Button text='교실 입력'></Button>
            <Button text='교사 입력'></Button>
            <Button text='과목 입력'></Button><br />
            <Input placeholder='값을 입력해주세요.'></Input>
        </div>
    );
}

export default ClassroomPage;