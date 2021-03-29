/* eslint-disable react-hooks/exhaustive-deps */
import { OrderListComponent } from 'components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderListAction } from 'store/order';

export const columns = [
    { id: 'id', label: '번호', minWidth: 50, align: 'center' },
    {
        id: 'orderId',
        label: '주문번호',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'member',
        label: '회원',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'status',
        label: '상태',
        minWidth: 170,
        align: 'center',
    },
    { id: 'days', label: '날짜', minWidth: 200, align: 'center' },
];

function createData(id, orderId, member, status, days) {
    return { id, orderId, member, status, days };
}
const OrderListContainer = () => {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.order.orders);
    useEffect(() => {
        dispatch(getOrderListAction());
    }, []);
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
        list.map(v => createData(v.id, v.orderNumber, v.recipient.email, v.orderStatus, v.recipient.createdDate)),
    ];
    // console.log(rows);
    // if (list.length === 0) {
    //     return null;
    // }
    return (
        <OrderListComponent
            Rows={rows}
            RowsPerPage={rowsPerPage}
            Page={page}
            HandleChangePage={handleChangePage}
            HandleChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );
};

export default OrderListContainer;
