/* eslint-disable react-hooks/exhaustive-deps */
import { AdminHeaderComponent } from 'components/index';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { clearStoreAction } from 'store/auth';
import { adminLogoutAction, getAdminCheckAction } from 'store/member';

const AdminHeaderContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.member.adminInfo);
    const isAdmin = localStorage.getItem('accessTokenAdmin');

    const handleLogout = () => {
        dispatch(adminLogoutAction());
    };

    useEffect(() => {
        // store 초기화
        dispatch(clearStoreAction());
        if (isAdmin) {
            dispatch(getAdminCheckAction());
        } else {
            alert('관리자만 이용 할수 있습니다.');
            history.push('/admin');
        }
        if (error) {
            alert('관리자만 이용 할수 있습니다.');
            window.location.href = '/admin';
        }
    }, [isAdmin]);

    return <AdminHeaderComponent handleLogout={handleLogout} />;
};

export default withRouter(AdminHeaderContainer);
