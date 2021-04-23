import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AdminHeaderContent } from 'styles/CommonStyles';

const AdminHeaderComponent = ({ location, handleLogout }) => {
    const { pathname } = location;
    return (
        <AdminHeaderContent>
            <article className="logo">
                <h2>SHIPMENT 관리자</h2>
            </article>
            <article className="menuList">
                <ul>
                    <li className={pathname === '/admin/user' || pathname === '/admin' ? 'active' : null}>
                        <Link to="/admin/user">회원목록</Link>
                    </li>
                    <li className={pathname === '/admin/order' ? 'active' : null}>
                        <Link to="/admin/order">주문목록</Link>
                    </li>
                    <li className={pathname === '/admin/faq' ? 'active' : null}>
                        <Link to="/admin/faq">FAQ</Link>
                    </li>
                    <li className={pathname === '/admin/insert' ? 'active' : null}>
                        <Link to="/admin/insert">엑셀 등록</Link>
                    </li>
                </ul>
                <button type="button" onClick={handleLogout}>
                    로그아웃
                </button>
            </article>
        </AdminHeaderContent>
    );
};
export default withRouter(AdminHeaderComponent);
