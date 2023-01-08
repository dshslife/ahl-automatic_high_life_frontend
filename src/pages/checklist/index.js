import React, { useState } from 'react';
import './style.scss';

import Input from 'components/input';
import Button from 'components/button';

function CheckList() {
    return (
        <div className="CheckListItem">
            <h2>체크리스트</h2>
            <h3>체크리스트 내용</h3>
        </div>
    )
}


function CheckListPage() {

    const [IsFriendCheckList, SetIsFriendCheckList] = useState(false);

    return (
        <div className="CheckListCont">
            <h1 className='green'>공유 체크리스트</h1>

            {
                !IsFriendCheckList
                    ? <>
                        <Input placeholder='제목'></Input>
                        <Input placeholder='할 일'></Input><br />
                        <Button text='등록'></Button>
                        <Button onClick={() => {SetIsFriendCheckList(true)}} text='친구의 공유 체크리스트'></Button>
                        <CheckList></CheckList>
                    </>
                    : <>
                        <Input placeholder='학번 및 이름'></Input><br />
                        <Button text='검색'></Button>
                        <Button onClick={() => {SetIsFriendCheckList(false)}} text='나의 체크리스트'></Button>
                    </>
            }
        </div>
    );
}

export default CheckListPage;