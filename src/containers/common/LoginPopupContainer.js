import React, { useState } from 'react';
import { LoginPopupComponent } from 'components';

const LoginPopupContainer = ({ close }) => {
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

    return <LoginPopupComponent close={close} HandleChange={handleChange} onClick={onClick} />;
};

export default LoginPopupContainer;
