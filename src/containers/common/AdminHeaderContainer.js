/* eslint-disable react-hooks/exhaustive-deps */
import { AdminHeaderComponent } from 'components/index';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { clearStoreAction } from 'store/auth';
import { adminLogoutAction } from 'store/member';

const AdminHeaderContainer = ({ history }) => {
    const dispatch = useDispatch();
    const isAdmin = localStorage.getItem('accessTokenAdmin');

    const handleLogout = () => {
        dispatch(adminLogoutAction());
    };

    useEffect(() => {
        // store 초기화
        dispatch(clearStoreAction());
    }, []);
    if (!isAdmin) {
        alert('관리자만 이용가능합니다.');
        history.push('/admin');
    }

    return <AdminHeaderComponent handleLogout={handleLogout} />;
};

export default withRouter(AdminHeaderContainer);
