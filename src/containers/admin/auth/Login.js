import { AdminLogin } from 'components';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { adminLoginAction } from 'store/auth';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const { status } = useSelector(
        state => ({
            status: state.auth.login.status,
        }),
        shallowEqual
    );

    const isAdmin = localStorage.getItem('accessTokenAdmin');
    const dispatch = useDispatch();
    const handleChange = e => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        // console.log(loginData.email);
        if ((loginData.email, loginData.password === '')) {
            alert('아이디와 비밀번호를 입력해주세요.');
            return;
        }
        dispatch(adminLoginAction({ email: loginData.email, password: loginData.password }));
    };

    useEffect(() => {
        if (isAdmin) {
            window.location.href = '/admin/user';
        } else if (status === 'fail') {
            alert('개발자에게 문의하세요.');
            setLoginData({
                email: '',
                password: '',
            });
        }
    }, [isAdmin, status]);
    return (
        <AdminLogin
            loginData={loginData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onKeyPress={onKeyPress}
        />
    );
};

export default Login;
