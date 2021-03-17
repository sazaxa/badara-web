import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productPaymentAction } from 'store/product';
import { UpdateInvoiceWrap } from 'styles/MypageStyles';

const PaymentPopup = ({ handlePopup, updatePopup }) => {
    const dispatch = useDispatch();
    const { orderInfo } = useSelector(state => state.order);

    const handlePayment = () => {
        dispatch(productPaymentAction({ id: orderInfo.id, status: { status: '결제완료' } }));
        handlePopup();
        // window.location.href = '/mypage';
    };
    if (!orderInfo) return null;
    return (
        <UpdateInvoiceWrap>
            <h2>결제 확인창</h2>

            <button type="button" onClick={() => handlePayment()}>
                확인
            </button>
            <button type="button" onClick={handlePopup}>
                취소
            </button>
        </UpdateInvoiceWrap>
    );
};

export default PaymentPopup;
