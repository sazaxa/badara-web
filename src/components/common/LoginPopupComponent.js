import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LoginPopupWrap = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1;
`;
const LoginPopup = styled.article`
  width: 500px;
  height: 350px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
  z-index: 2;
  padding: 30px;
  box-sizing: border-box;
  h3 {
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: -1.5px;
    margin-bottom: 30px;
    color: #1976d2;
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 56px;
    background-color: #1976d2;
    font-size: 16px;
    font-weight: 600;
    opacity: 0.8;
    margin-bottom: 10px;
  }
  button:hover {
    background-color: #1976d2;
    opacity: 1;
  }
  p.registerFont {
    letter-spacing: -1.5px;
    font-size: 14px;
    text-align: right;
  }
  p.registerFont > a {
    color: #666;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border: 2px solid #1976d2;
  }
`;
const LoginPopupComponent = ({ close, onChange }) => (
  <>
    <LoginPopupWrap onClick={close} />
    <LoginPopup>
      <h3>SHIPMENT LOGIN</h3>
      <form>
        <StyledInput
          placeholder="E-mail"
          autoFocus
          type="email"
          name="email"
          onChange={onChange}
        />
        <StyledInput
          placeholder="Password"
          type="password"
          name="password"
          onChange={onChange}
        />
        <Button variant="contained" color="primary">
          로그인
        </Button>
      </form>
      <p className="registerFont">
        <Link to="register" onClick={close}>
          아직 가입전이세요? 회원가입하기
        </Link>
      </p>
    </LoginPopup>
  </>
);
export default LoginPopupComponent;
