import React from 'react';
import './style.scss';

import Lottie from "lottie-react";

function LottieAnimation({Data, options={}}) {
    return (
        <Lottie
            animationData={Data}
            {...options}
        ></Lottie>
    );
}

export default LottieAnimation;