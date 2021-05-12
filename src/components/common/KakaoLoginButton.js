import React from 'react';
import KakaoLogin from 'react-kakao-login';

const KakaoLoginButton = () => {
    return (
        <KakaoLogin
            token="74a1b4aa5ea36e9a89ad734d26d426d4"
            buttonText="KaKao"
            onSuccess={console.log}
            onFailure={console.error}
            onLogout={console.info}
            getProfile={true}
            style={{
                width: '100%',
                color: 'rgb(60, 30, 30)',
                backgroundColor: 'rgb(255, 235, 0)',
                border: 'none',
                cursor: 'pointer',
            }}
        >
            <div className="kakaoBtn">카카오톡 로그인</div>
        </KakaoLogin>
    );
};

export default KakaoLoginButton;
