import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { LoginWrap } from 'styles/AdminPagesStyle';
import { withRouter } from 'react-router';

const Login = ({ loginData, handleChange, handleSubmit }) => {
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
