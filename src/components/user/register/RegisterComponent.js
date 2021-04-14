import React from 'react';
import { RegisterWrap, RegisterContent } from '../../../styles/RegisterStyles';
import logo from '../../../styles/img/logo.png';
import Tos from './Tos';

const ReigisterComponent = ({ Agree, HandleAgree, HandleChange, HandleFinish, RegisterInfo }) => {
    if (!Agree)
        return (
            <RegisterWrap>
                <Tos HandleAgree={HandleAgree} />
            </RegisterWrap>
        );
    return (
        <RegisterWrap>
            <RegisterContent>
                <div class="header">
                    <img src={logo} alt="logo" />
                    <h2>회원가입</h2>
                    {/* <p>회원가입 후 고래타고 서비스를 이용하세요.</p> */}
                </div>
                <form>
                    <input
                        type="email"
                        name="email"
                        placeholder="*이메일"
                        onChange={HandleChange}
                        value={RegisterInfo.email}
                    />
                    <input
                        type="password"
                        name="password"
                        value={RegisterInfo.password}
                        placeholder="*패스워드"
                        onChange={HandleChange}
                    />
                    <input
                        type="password"
                        name="passwordConfirm"
                        placeholder="*패스워드 확인"
                        onChange={HandleChange}
                        value={RegisterInfo.passwordConfirm}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="*이름"
                        onChange={HandleChange}
                        value={RegisterInfo.name}
                    />
                    <input
                        type="number"
                        name="phoneNumber"
                        placeholder="*휴대폰 번호"
                        onChange={HandleChange}
                        value={RegisterInfo.phoneNumber}
                    />
                    <button type="button" onClick={HandleFinish}>
                        회원가입
                    </button>
                </form>
            </RegisterContent>
        </RegisterWrap>
    );
};

export default ReigisterComponent;
