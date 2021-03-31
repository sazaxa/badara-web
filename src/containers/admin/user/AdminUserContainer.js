/* eslint-disable react-hooks/exhaustive-deps */
import AdminUserComponent from 'components/admin/user/main';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberListAction } from 'store/member';

export const columns = [
    { id: 'id', label: '번호', minWidth: 50, align: 'center' },
    {
        id: 'email',
        label: '이메일',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'name',
        label: '이름',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'status',
        label: '상태',
        minWidth: 170,
        align: 'center',
    },
    { id: 'phoneNumber', label: '휴대폰 번호', minWidth: 200, align: 'center' },
];

function createData(id, email, name, status, phoneNumber) {
    return { id, email, name, status, phoneNumber };
}

const AdminUserContainer = () => {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.member.members);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const rows = [
        // createData('India', 'IN', 1324171354, 3287263),
        list.map(v => createData(v.id, v.email, v.name, v.status, v.phoneNumber)),
    ];
    useEffect(() => {
        dispatch(getMemberListAction());
    }, []);
    return (
        <AdminUserComponent
            list={list}
            page={page}
            rows={rows}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );
};

export default AdminUserContainer;
