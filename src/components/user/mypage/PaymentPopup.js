import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberOrderAction } from 'store/member';
import { orderStatusChangeAction } from 'store/order';
import { UpdateInvoiceWrap } from 'styles/MypageStyles';
import DepositToAccount from './DepositToAccount';

const PaymentPopup = ({ handlePopup, updatePopup }) => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.member.memberInfo);
    const { logged } = useSelector(state => state.member.loggedInfo);
    const { id } = useSelector(state => state.order);
    const [depositPopup, setDepositPopup] = useState(false);

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
    if (!orders) return null;
    return (
        <UpdateInvoiceWrap>
            {depositPopup ? (
                <DepositToAccount popup={depositPopup} handlePopup={handleDeposit} paymentPopup={handlePopup} />
            ) : null}
            <h2>결제창</h2>
            <button type="button" onClick={() => handlePayment()}>
                네이버페이
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
