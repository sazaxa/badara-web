/* eslint-disable react-hooks/exhaustive-deps */
import { AdminHeaderComponent } from 'components/index';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { adminLogoutAction } from 'store/member';

const AdminHeaderContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { logged } = useSelector(state => state.member.adminInfo);

    const handleLogout = () => {
        dispatch(adminLogoutAction());
    };
    if (logged === false) {
        // alert('관리자만 이용가능합니다.');
        history.push('/admin');
    }
    return <AdminHeaderComponent handleLogout={handleLogout} />;
};

export default withRouter(AdminHeaderContainer);
