import { MypageComponent } from 'components';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getMemberInfoAction } from 'store/member';
import { getOrderInfoAction } from 'store/order';
import { getProductInfoAction } from 'store/product';

const MypageContainer = () => {
    const dispatch = useDispatch();
    const [updatePopup, setUpdatePopup] = useState(false);
    const [paymentPopup, setPaymentPopup] = useState(false);
    const { logged, member } = useSelector(
        state => ({
            logged: state.member.loggedInfo.logged,
            member: state.member.memberInfo.member,
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
        if (logged) {
            dispatch(getMemberInfoAction(logged.id));
        } else {
            window.location.href = '/';
        }
    }, []);
    if (!logged) return null;
    return (
        <MypageComponent
            member={member}
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
