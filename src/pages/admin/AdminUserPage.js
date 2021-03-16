import { AdminUserContainer } from 'containers';
import React from 'react';
import { AdminUserWrap } from 'styles/AdminPagesStyle';

const AdminUserPage = ({ history }) => {
    // const { user } = useSelector(state => state.user);
    // console.log(user);
    // if (!user) return null;
    // if (user.roles[0].rolesBane !== 'ROLE_ADMIN') {
    //     alert('관리자에게 문의하세요.');
    //     history.push('/');
    // }
    return (
        <AdminUserWrap>
            <AdminUserContainer />
        </AdminUserWrap>
    );
};

export default AdminUserPage;
