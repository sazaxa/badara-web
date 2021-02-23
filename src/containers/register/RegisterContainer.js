import ReigisterComponent from 'components/register/RegisterComponent';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const RegisterContainer = ({ history }) => {
    const [registerInfo, setRegisterInfo] = useState({});
    console.log(registerInfo);
    const handleChange = e => {
        const { name, value } = e.target;
        setRegisterInfo({
            ...registerInfo,
            [name]: value,
        });
    };
    const emailCheck = email => {
        let regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return email != '' && email != 'undefined' && regex.test(email);
    };
    const handleFinish = () => {
        if (!registerInfo.email) {
            alert('이메일을 입력하세요.');
            return;
        } else if (!emailCheck(registerInfo.email)) {
            alert('이메일 형식으로 입력하세요.');
        } else if (!registerInfo.password) {
            alert('패스워드를 입력하세요.');
        } else if (registerInfo.password !== registerInfo.passwordConfirm) {
            alert('패스워드와 패스워드 확인이 틀립니다.');
            return;
        } else if (registerInfo.password.length < 8) {
            alert('패스워드는 8자이상 입력하세요.');
            return;
        } else if (!registerInfo.phone) {
            alert('휴대폰번호를 입력하세요.');
            return;
        } else if (!registerInfo.name) {
            alert('이름을 입력하세요.');
            return;
        } else {
            alert('회원가입 완료.');
            history.push('/');
        }
    };
    return <ReigisterComponent HandleChange={handleChange} HandleFinish={handleFinish} />;
};

export default withRouter(RegisterContainer);
