import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { LoginPopupWrap, LoginPopup, StyledInput } from 'styles/CommonStyles';

const LoginPopupComponent = ({ onClick, HandleChange, HandleSubmit }) => (
    <>
        <LoginPopupWrap onClick={onClick} />
        <LoginPopup>
            <h3>SHIPMENT LOGIN</h3>
            <form>
                <StyledInput placeholder="E-mail" autoFocus type="email" name="email" onChange={HandleChange} />
                <StyledInput placeholder="Password" type="password" name="password" onChange={HandleChange} />
                <Button variant="contained" color="primary" onClick={HandleSubmit}>
                    로그인
                </Button>
            </form>
            <p className="registerFont">
                <Link to="register" onClick={onClick}>
                    아직 가입전이세요? 회원가입하기
                </Link>
            </p>
        </LoginPopup>
    </>
);
export default LoginPopupComponent;
