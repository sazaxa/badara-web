import { MypageComponent } from 'components';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { getMemberCheckAction, getMemberInfoAction } from 'store/member';
import { getOrderInfoAction } from 'store/order';
import { getProductInfoAction } from 'store/product';

const MypageContainer = () => {
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem('accessToken');
    const [updatePopup, setUpdatePopup] = useState(false);
    const [paymentPopup, setPaymentPopup] = useState(false);
    const { logged, orders } = useSelector(
        state => ({
            logged: state.member.loggedInfo.logged,
            orders: state.member.memberInfo.orders,
        }),
        shallowEqual
    );

    const handleUpdatePopup = () => {
        setUpdatePopup(!updatePopup);
    };

    const handlePaymentPopup = () => {
        setPaymentPopup(!paymentPopup);
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
                dispatch(getMemberInfoAction(logged.id));
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
