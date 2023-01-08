import React, { useState } from 'react';
import './style.scss';

import Button from 'components/button';
import Input from 'components/input';

function BapPage() {
    const [IsWaitList, SetIsWaitList] = useState(false);



    return (
        <div className="BapCont">
            {
                IsWaitList
                    ? <>
                        <h1 className='green'>급식표 알리미</h1>
                        <Button text='중식' options={{ defaultChecked: true }}></Button>
                        <Button text='석식'></Button>
                        <Button text='대기순서'></Button>
                    </>
                    : <>
                        <h1 className='green'>대기 순서</h1>
                        <Input placeholder='학교 학년 반'></Input><br />
                        <Button text='중식'></Button>
                        <Button text='석식'></Button>

                    </>
            }
        </div>
    );
}

export default BapPage;