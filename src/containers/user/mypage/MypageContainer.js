import { MypageComponent } from 'components';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { getMemberOrderAction } from 'store/member';
import { getOrderIdAction, getOrderInfoAction } from 'store/order';
import { getProductInfoAction } from 'store/box';

const MypageContainer = () => {
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem('accessToken');
    const [updatePopup, setUpdatePopup] = useState(false);
    const [paymentPopup, setPaymentPopup] = useState(false);
    const [status, setStatus] = useState({
        INVOICE: 0,
        CENTER_INCOME: 0,
        PAYMENT_REQUEST: 0,
        PAYMENT_BANK: 0,
        PAYMENT_COMPLETE: 0,
        GLOBAL_DELIVERY: 0,
        GLOBAL_DELIVERY_COMPLETED: 0,
    });
    console.log(status);
    const { logged, orders } = useSelector(
        state => ({
            logged: state.member.loggedInfo.logged,
            orders: state.member.memberInfo.orders,
        }),
        shallowEqual
    );
    useEffect(() => {
        if (orders) {
            statusLength();
        }
    }, [orders]);

    const statusLength = () => {
        let INVOICE = 0;
        let CENTER_INCOME = 0;
        let PAYMENT_REQUEST = 0;
        let PAYMENT_BANK = 0;
        let PAYMENT_COMPLETE = 0;
        let GLOBAL_DELIVERY = 0;
        let GLOBAL_DELIVERY_COMPLETED = 0;
        // const box = orders.boxResponses;
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].orderStatus === '결제요청') {
                // eslint-disable-next-line no-unused-vars
                PAYMENT_REQUEST++;
            }
            if (orders[i].orderStatus === '결제완료') {
                // eslint-disable-next-line no-unused-vars
                PAYMENT_COMPLETE++;
            }
            if (orders[i].orderStatus === '무통장입금') {
                // eslint-disable-next-line no-unused-vars
                PAYMENT_BANK++;
            }
            if (orders[i].orderStatus === '해외배송중') {
                // eslint-disable-next-line no-unused-vars
                GLOBAL_DELIVERY++;
            }
            if (orders[i].orderStatus === '해외배송완료') {
                // eslint-disable-next-line no-unused-vars
                GLOBAL_DELIVERY_COMPLETED++;
            }
            for (let j = 0; j < orders[i].boxResponses.length; j++) {
                if (orders[i].boxResponses[j].koreanShippingStatus === '송장입력') {
                    INVOICE++;
                }
                if (orders[i].boxResponses[j].koreanShippingStatus === '센터입고중') {
                    CENTER_INCOME++;
                }
            }
        }
        setStatus({
            ...status,
            INVOICE: INVOICE,
            CENTER_INCOME: CENTER_INCOME,
            PAYMENT_REQUEST: PAYMENT_REQUEST,
            PAYMENT_BANK: PAYMENT_BANK,
            PAYMENT_COMPLETE: PAYMENT_COMPLETE,
            GLOBAL_DELIVERY: GLOBAL_DELIVERY,
            GLOBAL_DELIVERY_COMPLETED: GLOBAL_DELIVERY_COMPLETED,
        });
    };

    const handleUpdatePopup = () => {
        setUpdatePopup(!updatePopup);
    };

    const handlePaymentPopup = id => {
        setPaymentPopup(!paymentPopup);
        dispatch(getOrderIdAction(id));
    };

    const handlePaymentInfo = id => {
        setPaymentPopup(!paymentPopup);
        dispatch(getOrderInfoAction(id));
    };

    const handleProductInfo = id => {
        setUpdatePopup(!updatePopup);
        dispatch(getProductInfoAction(id));
    };

    useEffect(() => {
        if (accessToken) {
            if (logged) {
                dispatch(getMemberOrderAction(logged.id));
                console.log('호출됨');
            }
        } else {
            alert('로그인이 필요합니다.');
            window.location.href = '/';
        }
    }, [accessToken, logged]);
    if (!logged && !accessToken) return null;
    return (
        <MypageComponent
            status={status}
            memberOrder={orders}
            handleUpdatePopup={handleUpdatePopup}
            updatePopup={updatePopup}
            handleProductInfo={handleProductInfo}
            handlePaymentInfo={handlePaymentInfo}
            paymentPopup={paymentPopup}
            handlePaymentPopup={handlePaymentPopup}
        />
    );
};

export default MypageContainer;
