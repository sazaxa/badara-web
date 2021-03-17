import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { LoginWrap } from 'styles/AdminPagesStyle';

const Login = () => {
    const [LoginData, setLoginData] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        setLoginData({
            [name]: value,
        });
    };
    return (
        <LoginWrap>
            <h2>관리자 로그인</h2>
            <form>
                <TextField label="이메일" name="email" variant="outlined" onChange={e => handleChange(e)} />
                <TextField
                    label="비밀번호"
                    name="password"
                    variant="outlined"
                    type="password"
                    onChange={e => handleChange(e)}
                />
                <Button variant="contained" color="primary" type="submit">
                    로그인
                </Button>
            </form>
        </LoginWrap>
    );
};

export default Login;
