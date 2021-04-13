import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberOrderAction } from 'store/member';
import { orderStatusChangeAction } from 'store/order';
import { UpdateInvoiceWrap } from 'styles/MypageStyles';
import DepositToAccount from './DepositToAccount';
import { loadTossPayments } from '@tosspayments/sdk';

const PaymentPopup = ({ handlePopup, updatePopup }) => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.member.memberInfo);
    const { logged } = useSelector(state => state.member.loggedInfo);
    const { id } = useSelector(state => state.order);
    const [depositPopup, setDepositPopup] = useState(false);
    const [getOrder, setGetOrder] = useState('');

    useEffect(() => {
        const order = orders.find(order => order.id === id);
        setGetOrder(order);
    }, []);

    const handleDeposit = () => {
        setDepositPopup(!depositPopup);
    };

    const handlePayment = () => {
        // 운송장번호를 Insert 하고, callBack으로 order를 다시 불러온다.
        dispatch(
            orderStatusChangeAction({
                id: id,
                data: { paymentMethod: '결제완료' },
                callBack: () => {
                    dispatch(getMemberOrderAction(logged.id));
                },
            })
        );
        handlePopup();
    };

    const handleToss = async () => {
        const clientKey = 'test_ck_lpP2YxJ4K87PxeNb69p3RGZwXLOb';
        const tossPayments = await loadTossPayments(clientKey);
        tossPayments.requestPayment('카드', {
            amount: getOrder.orderPrice,
            orderId: 'ABCD-1237',
            orderName: '해외배송서비스',
            customerName: getOrder.recipient.member.name,
            successUrl: window.location.origin + '/mypage',
            failUrl: window.location.origin + '/mypage',
        });
    };
    if (!orders) return null;
    return (
        <UpdateInvoiceWrap>
            {depositPopup ? (
                <DepositToAccount popup={depositPopup} handlePopup={handleDeposit} paymentPopup={handlePopup} />
            ) : null}
            <h2>결제창</h2>
            <button type="button" onClick={() => handleToss()}>
                토스
            </button>
            <button type="button" onClick={handleDeposit}>
                무통장 입금
            </button>
            <button type="button" onClick={handlePopup}>
                뒤로가기
            </button>
        </UpdateInvoiceWrap>
    );
};

export default PaymentPopup;
