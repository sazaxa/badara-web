import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberInfoAction } from 'store/member';
// import { productPaymentAction } from 'store/box';
import { UpdateInvoiceWrap } from 'styles/MypageStyles';

const DepositToAccount = ({ handlePopup, popup, paymentPopup }) => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.member.memberInfo);
    const { logged } = useSelector(state => state.member.loggedInfo);

    const [Deposit, setDeposit] = useState(false);

    const handleClose = () => {
        setDeposit(!Deposit);
        paymentPopup();
    };

    const handlePayment = () => {
        // 운송장번호를 Insert 하고, callBack으로 order를 다시 불러온다.
        // dispatch(
        //     productPaymentAction({
        //         id: orderInfo.id,
        //         status: { status: '결제완료' },
        //         callBack: () => {
        //             dispatch(getMemberInfoAction(logged.id));
        //         },
        //     })
        // );
        // handlePopup();
        setDeposit(!Deposit);
    };
    if (!popup) return null;
    if (!Deposit)
        return (
            <UpdateInvoiceWrap>
                <h2>결제 확인창</h2>

                <input type="text" placeholder="입금주를 입력해주세요." />
                <button type="button" onClick={() => handlePayment()}>
                    확인
                </button>
                <button type="button" onClick={() => handlePopup()}>
                    뒤로가기
                </button>
            </UpdateInvoiceWrap>
        );
    return (
        <UpdateInvoiceWrap>
            <h2>결제 확인창</h2>

            <p>계좌번호: 살라살라살라 입금주: 살라살라</p>
            <p>(메모후 닫기 버튼을 눌러주세요)</p>
            {/* <button type="button">확인</button> */}
            <button type="button" onClick={() => handleClose()}>
                닫기
            </button>
        </UpdateInvoiceWrap>
    );
};

export default DepositToAccount;
