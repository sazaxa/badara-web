import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import KakaoLogin from 'react-kakao-login';
import { useDispatch, useSelector } from 'react-redux';
import { socialLoginCheckAction } from 'store/social';
import { loginAction, loginPopupAction } from 'store/auth';

const KakaoLoginButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { login } = useSelector(state => state.social);

    useEffect(() => {
        if (!!login.isRegistered) {
            dispatch(
                loginAction({
                    email: login.email,
                    password: login.password,
                })
            );
        } else if (login.isRegistered === false) {
            history.push('/register');
            dispatch(loginPopupAction(false));
        }
    }, [login.isRegistered]);
    const onSuccess = response => {
        console.log(response);

        dispatch(
            socialLoginCheckAction({
                data: {
                    socialId: response.profile.id,
                    email: response.profile.kakao_account.email,
                },
            })
        );
    };

    return (
        <>
            <KakaoLogin
                token="9be5f98fff03e9c46baf0cd49e8f4743"
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

export default React.memo(KakaoLoginButton);
