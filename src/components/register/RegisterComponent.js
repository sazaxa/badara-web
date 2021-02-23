import React from 'react';
import { RegisterWrap, RegisterContent } from '../../styles/RegisterStyles';

const ReigisterComponent = () => {
    return (
        <RegisterWrap>
            <RegisterContent>
                <h2>회원가입</h2>
                <p>회원가입 후 고래타고 서비스를 이용하세요.</p>
                <form>
                    <input type="email" name="email" placeholder="*이메일" />
                    <input type="password" name="password" placeholder="*패스워드" />
                    <input type="password" name="passwordConfirm" placeholder="*패스워드 확인" />
                    <input type="text" name="name" placeholder="*이름" />
                    <input type="number" name="phone" placeholder="*휴대폰 번호" />
                    <button type="button">회원가입</button>
                </form>
            </RegisterContent>
        </RegisterWrap>
    );
};

export default ReigisterComponent;
