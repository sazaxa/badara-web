import { AdminHeaderComponent } from 'components/index';
import React from 'react';
import { withRouter } from 'react-router';

const AdminHeaderContainer = ({ history }) => {
    return <AdminHeaderComponent />;
};

export default withRouter(AdminHeaderContainer);
