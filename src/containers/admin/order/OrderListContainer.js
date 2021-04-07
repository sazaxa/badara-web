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
    const [order, setOrder] = useState({
        normalOrder: [],
        cancelOrder: [],
    });
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        console.log('탔다!');
        if (list) {
            let normalOrder = [];
            let cancelOrder = [];
            for (let i = 0; i < list.length; i++) {
                let orderStatus = list[i].orderStatus;
                if (orderStatus === '취소' || orderStatus === '환불' || orderStatus === '환불대기') {
                    cancelOrder.push(list[i]);
                } else {
                    normalOrder.push(list[i]);
                }
                setOrder({
                    ...order,
                    normalOrder: normalOrder,
                    cancelOrder: cancelOrder,
                });
            }
        }
    }, [list]);
    console.log(order);
    const normalOrderRows = [
        // createData('India', 'IN', 1324171354, 3287263),
        order.normalOrder.map(v =>
            createData(v.id, v.orderNumber, v.recipient.member.email, v.orderStatus, v.recipient.createdDate)
        ),
    ];
    const cancelOrderRows = [
        // createData('India', 'IN', 1324171354, 3287263),
        order.cancelOrder.map(v =>
            createData(v.id, v.orderNumber, v.recipient.member.email, v.orderStatus, v.recipient.createdDate)
        ),
    ];
    // console.log(rows);
    // if (list.length === 0) {
    //     return null;
    // }
    return (
        <OrderListComponent
            Rows={normalOrderRows}
            cancalRows={cancelOrderRows}
            RowsPerPage={rowsPerPage}
            Page={page}
            HandleChangePage={handleChangePage}
            HandleChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );
};

export default OrderListContainer;
