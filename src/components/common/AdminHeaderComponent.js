import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const AdminHeaderContent = styled.article`
  width: 15vw;
  min-width: 300px;
  height: 100vh;
  background: #fff;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  border-left: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;

  .logo {
    background-color: #fff;
    height: 80px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);
  }
  h2 {
    text-align: center;
    color: #2191f3;
    letter-spacing: -2px;
    line-height: 80px;
  }
  .menuList {
    padding: 100px 0;
    box-sizing: border-box;
    text-align: center;
  }
  .menuList li {
    font-size: 24px;
    letter-spacing: -1.5px;
    margin-bottom: 30px;
  }
  .menuList li a {
    color: #000;
  }
  .active {
    font-weight: 600;
  }
`;
const AdminHeaderComponent = ({ location }) => {
  const { pathname } = location;
  return (
    <AdminHeaderContent>
      <article className="logo">
        <h2>SHIPMENT 관리자</h2>
      </article>
      <article className="menuList">
        <ul>
          <li
            className={
              pathname === '/admin/user' || pathname === '/admin'
                ? 'active'
                : null
            }
          >
            <Link to="/admin/user">회원목록</Link>
          </li>
          <li className={pathname === '/admin/order' ? 'active' : null}>
            <Link to="/admin/order">주문목록</Link>
          </li>
          <li className={pathname === '/admin/FAQ' ? 'active' : null}>
            <Link to="/admin/FAQ">FAQ</Link>
          </li>
          <li>배송비 등록</li>
        </ul>
      </article>
    </AdminHeaderContent>
  );
};
export default withRouter(AdminHeaderComponent);
