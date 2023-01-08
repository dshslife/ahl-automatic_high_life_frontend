import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import AuthPage from './auth';
import RegisterSuccessPage from './register_success';
import EmptyPage from './empty';
import CheckListPage from './checklist';
import TimetablePage from './timetable';
import BapPage from './bap';
import ClassroomPage from './classroom';

import Navbar from 'components/navbar';

function App() {
    return (
        <Router>
            <Routes>
                {/* 로그인 정보 라우팅 필요 */}
                <Route path='/auth' element={<AuthPage></AuthPage>}></Route>
                <Route path='/reg_suc' element={<RegisterSuccessPage></RegisterSuccessPage>}></Route>
                <Route path='/main/*' element={<Navbar>
                    <Routes>
                        <Route path='/' element={<EmptyPage></EmptyPage>}></Route>
                        <Route path='/share_checklist' element={<CheckListPage></CheckListPage>}></Route>
                        <Route path='/timetable' element={<TimetablePage></TimetablePage>}></Route>
                        <Route path='/bap' element={<BapPage></BapPage>}></Route>
                        <Route path='/classroom' element={<ClassroomPage></ClassroomPage>}></Route>
                    </Routes>
                </Navbar>}></Route>


            
            </Routes>
        </Router>
    );
}

export default App;