import { AdminHeaderComponent } from 'components/index';
import React from 'react';
import { withRouter } from 'react-router';

const AdminHeaderContainer = ({ history }) => {
    const currentUser = localStorage.getItem('currentUser');
    const isAdmin = JSON.parse(currentUser).roles[0].roleName;
    console.log(isAdmin);

    if (isAdmin !== 'ROLE_ADMIN') {
        alert('관리자에게 문의하세요.');
        history.replace('/');
    }
    return <AdminHeaderComponent />;
};

export default withRouter(AdminHeaderContainer);
