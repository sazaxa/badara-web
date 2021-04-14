import ReigisterComponent from 'components/user/register/RegisterComponent';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearStoreAction, registerAction } from 'store/auth';

const RegisterContainer = ({ history }) => {
    const { error, status } = useSelector(state => state.auth.register);
    const dispatch = useDispatch();
    const [registerInfo, setRegisterInfo] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        phoneNumber: '',
    });
    const [agree, setAgree] = useState(false);

    useEffect(() => {
        if (status === 'success') {
            alert('가입이 완료되었습니다.');
            dispatch(clearStoreAction());
            history.push('/');
        } else if (status === 'fail') {
            alert('이미 존재하는 이메일입니다.');
            dispatch(clearStoreAction());
        }
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setRegisterInfo({
            ...registerInfo,
            [name]: value,
        });
    };
    const handleAgree = () => {
        setAgree(!agree);
    };

    const emailCheck = email => {
        let regex = /([\w-\\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return email !== '' && email !== 'undefined' && regex.test(email);
    };
    const handleFinish = () => {
        if (!registerInfo.email) {
            alert('이메일을 입력하세요.');
            return;
        } else if (!emailCheck(registerInfo.email)) {
            alert('이메일 형식으로 입력하세요.');
            return;
        } else if (!registerInfo.password) {
            alert('패스워드를 입력하세요.');
        } else if (registerInfo.password !== registerInfo.passwordConfirm) {
            alert('패스워드와 패스워드 확인이 틀립니다.');
            return;
        } else if (registerInfo.password.length < 8) {
            alert('패스워드는 8자이상 입력하세요.');
            return;
        } else if (!registerInfo.phoneNumber) {
            alert('휴대폰번호를 입력하세요.');
            return;
        } else if (!registerInfo.name) {
            alert('이름을 입력하세요.');
            return;
        } else if (error !== null) {
            alert('가입되어 있는 이메일 입니다.');
            return;
        }
        dispatch(registerAction(registerInfo));
    };
    return (
        <ReigisterComponent
            HandleAgree={handleAgree}
            Agree={agree}
            HandleChange={handleChange}
            HandleFinish={handleFinish}
            RegisterInfo={registerInfo}
        />
    );
};

export default withRouter(RegisterContainer);
