import { MypageComponent } from 'components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberInfoAction } from 'store/member';
import { getOrderInfoAction } from 'store/order';
import { getProductInfoAction } from 'store/product';

const MypageContainer = () => {
    const dispatch = useDispatch();
    const [updatePopup, setUpdatePopup] = useState(false);
    const [paymentPopup, setPaymentPopup] = useState(false);

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
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            console.log(JSON.parse(currentUser).id);
            dispatch(getMemberInfoAction(JSON.parse(currentUser).id));
        } else {
            window.location.href = '/';
        }
    }, []);
    const { member } = useSelector(state => state.member.memberInfo);
    if (!member) return null;
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
