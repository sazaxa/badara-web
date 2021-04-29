import React, { useEffect, useState } from 'react';
import { LoginPopupComponent } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'store/auth';
import { withRouter } from 'react-router-dom';

const LoginPopupContainer = ({ close, location }) => {
    const dispatch = useDispatch();
    const { status, auth } = useSelector(state => state.auth.login);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (status === 'success') {
            close();
        }
        if (status === 'fail') {
            alert(auth);
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

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };
    return (
        <LoginPopupComponent
            close={close}
            HandleChange={handleChange}
            onClick={onClick}
            HandleSubmit={handleSubmit}
            onKeyPress={onKeyPress}
        />
    );
};

export default withRouter(LoginPopupContainer);
