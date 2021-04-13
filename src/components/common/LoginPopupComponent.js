import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { LoginPopupWrap, LoginPopup, StyledInput } from 'styles/CommonStyles';
import logo from '../../styles/img/logo.png';

const LoginPopupComponent = ({ onClick, HandleChange, HandleSubmit, onKeyPress }) => (
    <>
        <LoginPopupWrap onClick={onClick} />
        <LoginPopup>
            <div className="titleWrap">
                <h3>
                    <img src={logo} alt="logo" />
                </h3>
                <p>손쉽고 편안한 해외배송 바다라와 함께하세요</p>
            </div>
            <form>
                <div className="inputBox">
                    <label htmlFor="email">EMAIL</label>
                    <StyledInput
                        autoFocus
                        type="email"
                        name="email"
                        id="email"
                        onChange={HandleChange}
                        onKeyPress={e => onKeyPress(e)}
                    />
                </div>
                <div className="inputBox">
                    <label htmlFor="pw">PW</label>
                    <StyledInput
                        id="pw"
                        type="password"
                        name="password"
                        onChange={HandleChange}
                        onKeyPress={e => onKeyPress(e)}
                    />
                </div>
                <Button variant="contained" color="primary" onClick={HandleSubmit} id="loginBtn">
                    로그인
                </Button>
            </form>
            <p className="registerFont">
                {/* <Link to="register" onClick={onClick}>
                    아직 가입전이세요? 회원가입하기
                </Link> */}
                <Link to="register" onClick={onClick}>
                    <Button variant="contained" color="primary" id="registerBtn">
                        회원가입
                    </Button>
                </Link>
            </p>
        </LoginPopup>
    </>
);
export default LoginPopupComponent;
