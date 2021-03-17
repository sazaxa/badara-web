import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { LoginWrap } from 'styles/AdminPagesStyle';
import { useDispatch, useSelector } from 'react-redux';
import { adminLoginAction } from 'store/auth';
import { withRouter } from 'react-router';

const Login = ({ history }) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const { logged } = useSelector(state => state.member.adminInfo);
    const dispatch = useDispatch();
    const handleChange = e => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // console.log(loginData.email);
        dispatch(adminLoginAction({ email: loginData.email, password: loginData.password }));
    };
    if (logged === true) {
        history.push('/admin/user');
    }
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
                <Button variant="contained" color="primary" type="button" onClick={handleSubmit}>
                    로그인
                </Button>
            </form>
        </LoginWrap>
    );
};

export default withRouter(Login);
