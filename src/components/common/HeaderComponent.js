import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginPopupContainer from '../../containers/common/LoginPopupContainer';

const HeaderWrap = styled.section`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eee;
`;

const HeaderContent = styled.header`
  width: 1140px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;

  h2 > a {
    letter-spacing: -2.5px;
    font-size: 32px;
    color: #1976d2;
    margin-right: 220px;
    font-weight: 900;
  }
  nav ul {
    display: flex;
  }
  nav ul li {
    padding: 0 45px;
    box-sizing: border-box;
  }
  nav ul li a {
    font-size: 18px;
    color: #000;
    letter-spacing: -1px;
    transition: all 0.3s;
  }
  nav ul li a:hover {
    color: #1976d2;
    font-weight: 900;
  }
  button {
    margin-left: 80px;
    background-color: #1976d2;
    font-weight: 600;
    font-size: 16px;
  }
  button:hover {
    background-color: #1976d2;
    opacity: 0.5;
  }
`;
const HeaderComponet = ({ popup, action }) => (
  <>
    {popup ? <LoginPopupContainer /> : null}
    <HeaderWrap>
      <HeaderContent>
        <h2>
          <Link to="/">SHIPMENT</Link>
        </h2>
        <nav>
          <ul>
            <li>
              <Link to="/use">이용안내</Link>
            </li>
            <li>
              <Link to="/cost">비용안내</Link>
            </li>
            <li>
              <Link to="/apply">배송대행</Link>
            </li>
            <li>
              <Link to="/support">고객센터</Link>
            </li>
          </ul>
        </nav>
        <Button variant="contained" color="primary" onClick={action}>
          로그인
        </Button>
      </HeaderContent>
    </HeaderWrap>
  </>
);
export default HeaderComponet;
