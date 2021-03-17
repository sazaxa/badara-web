import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberInfoAction } from 'store/member';
import { productPaymentAction } from 'store/product';
import { UpdateInvoiceWrap } from 'styles/MypageStyles';

const PaymentPopup = ({ handlePopup, updatePopup }) => {
    const dispatch = useDispatch();
    const { orderInfo } = useSelector(state => state.order);

    const handlePayment = () => {
        // localStorage에 있는 회원 정보를 가져온다.
        const currentUser = localStorage.getItem('currentUser');
        // 운송장번호를 Insert 하고, callBack으로 order를 다시 불러온다.
        dispatch(
            productPaymentAction({
                id: orderInfo.id,
                status: { status: '결제완료' },
                callBack: () => {
                    dispatch(getMemberInfoAction(JSON.parse(currentUser).id));
                },
            })
        );
        handlePopup();
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
