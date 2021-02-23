import React from 'react';
import { RegisterWrap, RegisterContent } from '../../styles/RegisterStyles';

const ReigisterComponent = ({ HandleChange, HandleFinish }) => {
    return (
        <RegisterWrap>
            <RegisterContent>
                <h2>회원가입</h2>
                <p>회원가입 후 고래타고 서비스를 이용하세요.</p>
                <form>
                    <input type="email" name="email" placeholder="*이메일" onChange={HandleChange} />
                    <input type="password" name="password" placeholder="*패스워드" onChange={HandleChange} />
                    <input
                        type="password"
                        name="passwordConfirm"
                        placeholder="*패스워드 확인"
                        onChange={HandleChange}
                    />
                    <input type="text" name="name" placeholder="*이름" onChange={HandleChange} />
                    <input type="number" name="phone" placeholder="*휴대폰 번호" onChange={HandleChange} />
                    <button type="button" onClick={HandleFinish}>
                        회원가입
                    </button>
                </form>
            </RegisterContent>
        </RegisterWrap>
    );
};

export default ReigisterComponent;
