import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AdminHeaderContent } from 'styles/CommonStyles';

const AdminHeaderComponent = ({ location }) => {
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
                        <Link to="/admin/insert">배송비 등록</Link>
                    </li>
                </ul>
            </article>
        </AdminHeaderContent>
    );
};
export default withRouter(AdminHeaderComponent);
