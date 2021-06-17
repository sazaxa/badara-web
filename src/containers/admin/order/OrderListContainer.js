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

const OrderListContainer = () => {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.order.orders);
    useEffect(() => {
        dispatch(getOrderListAction());
    }, []);
    const [page, setPage] = useState(0);
    const [cancelPage, setCancelPage] = useState(0);
    const [completePage, setCompletePage] = useState(0);
    const [order, setOrder] = useState({
        normalOrder: [],
        cancelOrder: [],
        pandingOrder: [],
        depositOrder: [],
        shippingOrder: [],
        requestOrder: [],
        completeOrder: [],
    });
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [cancelRowsPerPage, setCancelRowsPerPage] = useState(10);
    const [completeRowsPerPage, setCompleteRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleCancelChangePage = (event, newPage) => {
        setCancelPage(newPage);
    };
    const handleCompleteChangePage = (event, newPage) => {
        setCompletePage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangeCancelRowsPerPage = event => {
        setCancelRowsPerPage(+event.target.value);
        setCancelPage(0);
    };

    const handleChangeCompleteRowsPerPage = event => {
        setCompleteRowsPerPage(+event.target.value);
        setCompletePage(0);
    };

    useEffect(() => {
        if (list) {
            let pandingOrder = [];
            let normalOrder = [];
            let cancelOrder = [];
            let depositOrder = [];
            let shippingOrder = [];
            let requestOrder = [];
            let completeOrder = [];
            for (let i = 0; i < list.length; i++) {
                let orderStatus = list[i].orderStatus;
                if (orderStatus === '취소' || orderStatus === '환불' || orderStatus === '환불대기') {
                    cancelOrder.push(list[i]);
                } else if (orderStatus === '결제대기' || orderStatus === '송장입력') {
                    pandingOrder.push(list[i]);
                } else if (orderStatus === '무통장입금') {
                    depositOrder.push(list[i]);
                } else if (orderStatus === '결제요청') {
                    requestOrder.push(list[i]);
                } else if (orderStatus === '결제완료') {
                    normalOrder.push(list[i]);
                } else if (orderStatus === '해외배송완료') {
                    completeOrder.push(list[i]);
                } else {
                    shippingOrder.push(list[i]);
                }
                setOrder({
                    ...order,
                    normalOrder: normalOrder,
                    cancelOrder: cancelOrder,
                    pandingOrder: pandingOrder,
                    depositOrder: depositOrder,
                    shippingOrder: shippingOrder,
                    requestOrder: requestOrder,
                    completeOrder: completeOrder,
                });
            }
        }
    }, [list]);
    // console.log(rows);
    // if (list.length === 0) {
    //     return null;
    // }
    return (
        <OrderListComponent
            Rows={order.normalOrder}
            depositOrderRows={order.depositOrder}
            cancalRows={order.cancelOrder}
            pandingOrderRows={order.pandingOrder}
            shippingOrderRows={order.shippingOrder}
            requestOrderRows={order.requestOrder}
            completeOrderRows={order.completeOrder}
            handleCompleteChangePage={handleCompleteChangePage}
            handleCancelChangePage={handleCancelChangePage}
            handleChangeCancelRowsPerPage={handleChangeCancelRowsPerPage}
            handleChangeCompleteRowsPerPage={handleChangeCompleteRowsPerPage}
            RowsPerPage={rowsPerPage}
            cancelRowsPerPage={cancelRowsPerPage}
            Page={page}
            cancelPage={cancelPage}
            completePage={completePage}
            HandleChangePage={handleChangePage}
            HandleChangeRowsPerPage={handleChangeRowsPerPage}
            completeRowsPerPage={completeRowsPerPage}
        />
    );
};

export default OrderListContainer;
