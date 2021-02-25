import React, { useEffect, useState } from 'react';
import { LoginPopupComponent } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'store/auth';
import { withRouter } from 'react-router-dom';
import { loadUser } from 'index';
import { getMemberInfoAction } from 'store/member';

const LoginPopupContainer = ({ close, location }) => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.auth.login);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (status === 'success') {
            close();
            loadUser();
            getMemberInfoAction();
        }
        if (status === 'fail') {
            alert('이메일과 비밀번호를 확인하세요.');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);
    const handleChange = e => {
        const { value, name } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };
    const onClick = () => {
        close();
    };

    const handleSubmit = () => {
        const { email, password } = loginData;
        if (email === '') {
            alert('이메일을 입력해주세요.');
            return;
        } else if (password === '') {
            alert('패스워드를 입력해주세요.');
            return;
        }
        dispatch(loginAction({ email: email, password: password }));
    };

    return (
        <LoginPopupComponent close={close} HandleChange={handleChange} onClick={onClick} HandleSubmit={handleSubmit} />
    );
};

export default withRouter(LoginPopupContainer);
