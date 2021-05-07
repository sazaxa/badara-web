/* eslint-disable react-hooks/exhaustive-deps */
import { MyorderList } from 'components';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getMemberOrderAction } from 'store/member';
import { getOrderIdAction, getOrderInfoAction, orderStatusChangeAction } from 'store/order';
import { getProductInfoAction } from 'store/box';
import { MyorderCancelList } from 'components/index';
import { withRouter } from 'react-router';
import queryStirng from 'query-string';
import axios from '../../../../node_modules/axios/index';
import { loginPopupAction } from 'store/auth';

const MypageContainer = ({ location, history }) => {
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem('accessToken');
    const [orderTab, setOrderTab] = useState(0);
    const [priceDetail, setPriceDeatail] = useState(false);
    const [updatePopup, setUpdatePopup] = useState(false);
    const [paymentPopup, setPaymentPopup] = useState(false);
    const [cancelPopup, setCancelPopup] = useState(false);
    const [order, setOrder] = useState({
        normalOrder: [],
        cancelOrder: [],
    });
    const { search } = location;
    const queryObj = queryStirng.parse(search);

    useEffect(() => {
        if (queryObj.orderId) {
            paymentRequest();
        }
    }, []);

    const [status, setStatus] = useState({
        INVOICE: 0,
        CENTER_INCOME: 0,
        PAYMENT_REQUEST: 0,
        PAYMENT_BANK: 0,
        PAYMENT_COMPLETE: 0,
        GLOBAL_DELIVERY: 0,
        GLOBAL_DELIVERY_COMPLETED: 0,
        REFUND: 0,
        REFUND_WAITING: 0,
        CANCEL: 0,
    });

    const handleTabToggle = tab => {
        setOrderTab(tab);
    };

    const handlePriceDetail = () => {
        setPriceDeatail(!priceDetail);
    };

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

    // 취소 order 분리
    useEffect(() => {
        if (orders) {
            orderSeparation();
        }
    }, [orders]);
    const orderSeparation = () => {
        let normalOrder = [];
        let cancelOrder = [];
        for (let i = 0; i < orders.length; i++) {
            let orderStatus = orders[i].orderStatus;
            if (orderStatus === '취소' || orderStatus === '환불' || orderStatus === '환불대기') {
                cancelOrder.push(orders[i]);
            } else {
                normalOrder.push(orders[i]);
            }
            setOrder({
                cancelOrder: cancelOrder,
                normalOrder: normalOrder,
            });
        }
    };

    const statusLength = () => {
        let INVOICE = 0;
        let CENTER_INCOME = 0;
        let PAYMENT_REQUEST = 0;
        let PAYMENT_BANK = 0;
        let PAYMENT_COMPLETE = 0;
        let GLOBAL_DELIVERY = 0;
        let GLOBAL_DELIVERY_COMPLETED = 0;
        let REFUND = 0;
        let REFUND_WAITING = 0;
        let CANCEL = 0;
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
            if (orders[i].orderStatus === '취소') {
                // eslint-disable-next-line no-unused-vars
                CANCEL++;
            }
            if (orders[i].orderStatus === '환불') {
                // eslint-disable-next-line no-unused-vars
                REFUND++;
            }
            if (orders[i].orderStatus === '환불대기') {
                // eslint-disable-next-line no-unused-vars
                REFUND_WAITING++;
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
            CANCEL: CANCEL,
            REFUND: REFUND,
            REFUND_WAITING: REFUND_WAITING,
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

    const handleCancelPopup = id => {
        setCancelPopup(!cancelPopup);
        dispatch(getOrderIdAction(id));
    };

    // 주문 취소
    const handleCancel = (orderNumber, method) => {
        // 운송장번호를 Insert 하고, callBack으로 order를 다시 불러온다.
        dispatch(
            orderStatusChangeAction({
                id: orderNumber,
                data: { paymentMethod: method },
                callBack: () => {
                    setCancelPopup(!cancelPopup);
                    dispatch(getMemberOrderAction(logged.id));
                },
            })
        );
    };

    const paymentRequest = () => {
        const options = {
            url: `https://api.tosspayments.com/v1/payments/${queryObj.paymentKey}`,
            method: 'post',
            headers: {
                Authorization: `Basic ${process.env.REACT_APP_PATMENT_AUTHORIZATION}`,
            },
            data: {
                orderId: queryObj.orderId,
                amount: queryObj.amount,
            },
        };
        axios(options)
            .then(response => {
                console.log(response);
                dispatch(
                    orderStatusChangeAction({
                        id: response.data.orderId,
                        data: {
                            paymentMethod: '결제완료',
                            cardType: response.data.card.cardType,
                            cardCompany: response.data.card.company,
                            cardNumber: response.data.card.number,
                            cardOwnerType: response.data.card.ownerType,
                            paymentKey: response.data.paymentKey,
                            cardRequestedDate: response.data.requestedAt,
                        },
                        callBack: () => {
                            dispatch(getMemberOrderAction(logged.id));
                        },
                    })
                );
                window.location.href = '/mypage';
            })
            .catch(e => {
                alert(e.message);
                window.location.href = '/mypage';
            });
    };

    useEffect(() => {
        if (accessToken) {
            if (logged) {
                dispatch(getMemberOrderAction(logged.id));
            }
        } else {
            alert('로그인이 필요합니다.');
            // window.location.href = '/';
            history.push('/');
            dispatch(loginPopupAction(true));
        }
    }, [accessToken, logged]);
    if (!logged && !accessToken) return null;
    if (orderTab === 0)
        return (
            <MyorderList
                status={status}
                handleTabToggle={handleTabToggle}
                memberOrder={order.normalOrder}
                handleUpdatePopup={handleUpdatePopup}
                updatePopup={updatePopup}
                handleProductInfo={handleProductInfo}
                handlePaymentInfo={handlePaymentInfo}
                paymentPopup={paymentPopup}
                handlePaymentPopup={handlePaymentPopup}
                handleCancel={handleCancel}
                cancelPopup={cancelPopup}
                handleCancelPopup={handleCancelPopup}
                handlePriceDetail={handlePriceDetail}
                priceDetail={priceDetail}
            />
        );
    if (orderTab === 1) {
        return <MyorderCancelList status={status} handleTabToggle={handleTabToggle} memberOrder={order.cancelOrder} />;
    }
};

export default withRouter(MypageContainer);
