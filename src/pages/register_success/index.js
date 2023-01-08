import React, { useEffect } from 'react';
import "./style.scss";

import { useNavigate } from 'react-router-dom';
import LottieAnimation from 'components/lottie';

import CheckAnimation from 'asset/animation/check.json';

function RegisterSuccessPage() {
    const navigate = useNavigate();


    function RedirectMainPage() {
        navigate('/main');
    }

    useEffect(() => {
        setTimeout(() => {
            RedirectMainPage();
        }, 5000)
    }, []);

    return (
        <div className='RegCont'>
            <div className="InnerBox">

                <LottieAnimation
                    Data={CheckAnimation}
                    options={{
                        style: {
                            width: 120,
                            height: 120,
                        },
                        loop: false
                    }}
                ></LottieAnimation>
                <h1 className='title'>{process.env.REACT_APP_NAME}</h1>
                <h2>성공적으로 회원가입되었습니다.</h2>
                <h2>잠시후 자동으로 리다이렉트됩니다.</h2>
                <p className='force_redirect' onClick={RedirectMainPage}>만약 이동하지 않는다면 여기를 눌러주세요.</p>
            </div>
        </div >
    );
}

export default RegisterSuccessPage;