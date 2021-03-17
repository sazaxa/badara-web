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
    useEffect(() => {
        if (logged === false) {
            alert('관리자만 접근 가능합니다.');
            history.push('/admin');
        }
    }, [logged]);
    return <AdminHeaderComponent handleLogout={handleLogout} />;
};

export default withRouter(AdminHeaderContainer);
