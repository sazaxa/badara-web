import React from 'react';
import List from './List';

const AdminUserComponent = ({ list, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, rows }) => {
    if (!list) return null;
    return (
        <List
            Rows={rows}
            RowsPerPage={rowsPerPage}
            Page={page}
            HandleChangePage={handleChangePage}
            HandleChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );
};

export default AdminUserComponent;
