import React, { useEffect, useState } from 'react';
import KakaoLogin from 'react-kakao-login';
import KakaoLogout from 'react-kakao-login';
import { useDispatch } from 'react-redux';
import { loginAction, registerAction } from 'store/auth';

const KakaoLoginButton = () => {
    const dispatch = useDispatch();
    const [kakaoLogin, setKakaoLogin] = useState({
        email: '',
        name: '',
    });
    const onSuccess = response => {
        console.log(response.profile.kakao_account.email);
        setKakaoLogin({
            email: response.profile.kakao_account.email,
            name: response.profile.kakao_account.profile.nickname,
        });
        console.log(kakaoLogin);
        dispatch(
            registerAction({
                email: response.profile.kakao_account.email,
                name: response.profile.kakao_account.profile.nickname,
            })
        );
        dispatch(loginAction({ email: response.profile.kakao_account.email, password: null }));
    };

    return (
        <>
            <KakaoLogin
                token="74a1b4aa5ea36e9a89ad734d26d426d4"
                onSuccess={response => onSuccess(response)}
                onFailure={console.error}
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
        </>
    );
};

export default KakaoLoginButton;
