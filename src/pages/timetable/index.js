import React, { useState } from 'react';
import './style.scss';
import Picture from "../../components/picture";
import Lock from "../../asset/image/lock.png";
import Unlock from "../../asset/image/unlock.png";

import Input from 'components/input';
import Button, {GLoginButton} from 'components/button';
import {useNavigate} from "react-router-dom";
import Data from "../json/schedule.json";

function TimetablePage() {
    // const navigate = useNavigate();
    const [isTimetable, SetisTimetable] = useState(false);

    function lookTimetable(e) {
        SetisTimetable(true);
    }

    const callSchedule = (day, period) => {
        return(
            <>
                    <td>
                        {Data[day][period-1]['name']}<br />
                        {Data[day][period-1]['location']}<br />
                        {Data[day][period-1]['teacher']}<br />
                    </td>
            </>
        )
    };

    return (
        <div className="TimetableCont">
            <h1 className='green'>시간표</h1>
            <Input placeholder='학번'></Input><br />
            <Button text='시간표 조회'></Button>
            <Button text='내 시간표 보기' onClick={lookTimetable}></Button>
                {
                    !isTimetable
                        ? <>
                        </>
                        : <>
                            <div className="Timetable">
                                <table id="normal">
                                    <thead>
                                    <tr>
                                        <td></td>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <th>1교시</th>
                                            {callSchedule('monday', 1)}
                                            {callSchedule('tuesday', 1)}
                                            {callSchedule('wednesday', 1)}
                                            {callSchedule('thursday', 1)}
                                            {callSchedule('friday', 1)}
                                    </tr>
                                    <tr>
                                        <th>2교시</th>
                                            {callSchedule('monday', 2)}
                                            {callSchedule('tuesday', 2)}
                                            {callSchedule('wednesday', 2)}
                                            {callSchedule('thursday', 2)}
                                            {callSchedule('friday', 2)}
                                    </tr>
                                    <tr>
                                        <th>3교시</th>
                                            {callSchedule('monday', 3)}
                                            {callSchedule('tuesday', 3)}
                                            {callSchedule('wednesday', 3)}
                                            {callSchedule('thursday', 3)}
                                            {callSchedule('friday', 3)}
                                    </tr>
                                    <tr>
                                        <th>4교시</th>
                                            {callSchedule('monday', 4)}
                                            {callSchedule('tuesday', 4)}
                                            {callSchedule('wednesday', 4)}
                                            {callSchedule('thursday', 4)}
                                            {callSchedule('friday', 4)}
                                    </tr>
                                    <tr>
                                        <th>5교시</th>
                                            {callSchedule('monday', 5)}
                                            {callSchedule('tuesday', 5)}
                                            {callSchedule('wednesday', 5)}
                                            {callSchedule('thursday', 5)}
                                            {callSchedule('friday', 5)}
                                    </tr>
                                    <tr>
                                        <th>6교시</th>
                                            {callSchedule('monday', 6)}
                                            {callSchedule('tuesday', 6)}
                                            {callSchedule('wednesday', 6)}
                                            {callSchedule('thursday', 6)}
                                            {callSchedule('friday', 6)}
                                    </tr>
                                    <tr>
                                        <th>7교시</th>
                                            {callSchedule('monday', 7)}
                                            {callSchedule('tuesday', 7)}
                                            {callSchedule('wednesday', 7)}
                                            {callSchedule('thursday', 7)}
                                            {callSchedule('friday', 7)}
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                }
        </div>
    );
}

export default TimetablePage;