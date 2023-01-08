import React from 'react';
import './style.scss';

import Input from 'components/input';
import Button from 'components/button';

function TimetablePage() {
    return (
        <div className="TimetableCont">
            <h1 className='green'>시간표</h1>
            <Input placeholder='학번'></Input><br />
            <Button text='시간표 조회'></Button>
            <Button text='내 시간표 보기'></Button>
        </div>
    );
}

export default TimetablePage;