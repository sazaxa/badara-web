import React, { useState } from 'react';
import { LoginPopupComponent } from 'components';
import { useDispatch } from 'react-redux';
import { loginAction } from 'store/auth';

const LoginPopupContainer = ({ close }) => {
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

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

export default LoginPopupContainer;
