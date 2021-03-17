import { AdminHeaderComponent } from 'components/index';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';

const AdminHeaderContainer = ({ history }) => {
    const { logged } = useSelector(state => state.member.adminInfo);
    useEffect(() => {
        if (logged === false) {
            alert('관리자만 접근 가능합니다.');
            history.push('/admin');
        }
    }, [logged]);
    return <AdminHeaderComponent />;
};

export default withRouter(AdminHeaderContainer);
