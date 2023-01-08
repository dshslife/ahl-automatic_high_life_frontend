import "./style.scss";
import React, { useState } from 'react';

import Input from "components/input";
import Picture from "components/picture";
import Button, { GLoginButton } from "components/button";

import { useNavigate } from "react-router-dom";

function AuthPage() {
    const navigate = useNavigate();
    const [isRegister, SetisRegister] = useState(false);


    function OnGoogleLoginClick(e) {
        // 구글 로그인 이벤트


        navigate('/main');
    }


    // 회원가입버튼 클릭시 이동
    function ToRegisterClick(e) {
        SetisRegister(true);
    }

    // 회원가입창에서 로그인 창 이동
    function ToLoginClick(e) {
        SetisRegister(false);
    }

    // 회원가입 버튼 클릭시
    function OnRegisterClick() {
        navigate('/reg_suc')
    }

    return (
        <div className="LoginCont">
            <div className="GreenBar">
                {/* 왼쪽에 사진 뜨는 영역 */}
                <Picture url="https://picsum.photos/1920/1080"></Picture>
            </div>
            <div className="Cont">
                {
                    !isRegister
                        ? <>
                            <h1 className="title">{process.env.REACT_APP_NAME}</h1>
                            <h2>을 사용하려면 로그인해주세요.</h2>

                            {/* 아이디 비번 로그인 사용할거면 수정 ㄱㄱ */}
                            <Input options={{ disabled: true }} placeholder="현재 구글로그인 밖에 지원하지 않습니다."></Input>



                            {/* 구글 로그인 버튼 */}
                            <GLoginButton onClick={OnGoogleLoginClick}></GLoginButton>
                            <p className="register" onClick={ToRegisterClick}>새로운계정 만들기</p>

                        </>
                        : <>
                            <h1 className="title">회원가입</h1>
                            <p>계정이 없다면 아래 정보를 입력해주세요.</p>
                            <p className="ToLogin" onClick={ToLoginClick}>이미 계정이 있나요?</p>

                            <form onSubmit={OnRegisterClick}>
                                <Input placeholder="이름"></Input>
                                <Input placeholder="학교이름"></Input>
                                <Input placeholder="학번"></Input>
                                <Button text="회원가입" onClick={OnRegisterClick}></Button>
                            </form>
                        </>
                }

            </div>
        </div>
    );
}

export default AuthPage;