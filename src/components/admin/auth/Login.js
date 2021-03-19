import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { LoginWrap } from 'styles/AdminPagesStyle';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { adminLoginAction } from 'store/auth';
import { withRouter } from 'react-router';

const Login = ({ history }) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const { logged, status } = useSelector(
        state => ({
            logged: state.member.loggedInfo.logged,
            status: state.auth.login.status,
        }),
        shallowEqual
    );

    console.log(status);
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
        if ((loginData.email, loginData.password === '')) {
            alert('아이디와 비밀번호를 입력해주세요.');
            return;
        }
        dispatch(adminLoginAction({ email: loginData.email, password: loginData.password }));
    };

    useEffect(() => {
        if (status === 'success') {
            alert('로그인이 성공하였습니다.');
            history.push('/admin/user');
        } else if (status === 'fail') {
            alert('개발자에게 문의하세요.');
            setLoginData({
                email: '',
                password: '',
            });
        }
    }, [status]);

    if (logged === true) {
        window.location.herf = '/admin/user';
    }

    return (
        <LoginWrap>
            <h2>관리자 로그인</h2>
            <form>
                <TextField
                    label="이메일"
                    name="email"
                    variant="outlined"
                    onChange={e => handleChange(e)}
                    value={loginData.email}
                />
                <TextField
                    label="비밀번호"
                    name="password"
                    variant="outlined"
                    type="password"
                    onChange={e => handleChange(e)}
                    value={loginData.password}
                />
                <Button variant="contained" color="primary" type="button" onClick={handleSubmit}>
                    로그인
                </Button>
            </form>
        </LoginWrap>
    );
};

export default withRouter(Login);
