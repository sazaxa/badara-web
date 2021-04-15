import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberOrderAction } from 'store/member';
import { orderStatusChangeAction } from 'store/order';
import { PaymentWrap, UpdateInvoiceWrap } from 'styles/MypageStyles';
import DepositToAccount from './DepositToAccount';
import { loadTossPayments } from '@tosspayments/sdk';
import Button from '@material-ui/core/Button';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import toss from '../../../styles/img/toss.png';

const PaymentPopup = ({ handlePopup, updatePopup }) => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.member.memberInfo);
    const { logged } = useSelector(state => state.member.loggedInfo);
    const { id } = useSelector(state => state.order);
    const [depositPopup, setDepositPopup] = useState(false);
    const [paymentAgree, setPaymentAgree] = useState(false);
    const [getOrder, setGetOrder] = useState('');

    useEffect(() => {
        const order = orders.find(order => order.id === id);
        setGetOrder(order);
    }, []);

    const handleDeposit = async () => {
        setDepositPopup(!depositPopup);
        // const clientKey = 'test_ck_lpP2YxJ4K87PxeNb69p3RGZwXLOb';
        // const tossPayments = await loadTossPayments(clientKey);
        // tossPayments.requestPayment('가상계좌', {
        //     amount: getOrder.orderPrice,
        //     orderId: getOrder.orderNumber,
        //     orderName: '해외배송서비스',
        //     customerName: getOrder.recipient.member.name,
        //     successUrl: window.location.origin + '/mypage',
        //     failUrl: window.location.origin + '/mypage',
        // });
    };

    const handlePaymentAgree = e => {
        e.preventDefault();
        setPaymentAgree(!paymentAgree);
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
        alert('준비중입니다.');
        // const clientKey = 'test_ck_lpP2YxJ4K87PxeNb69p3RGZwXLOb';
        // const tossPayments = await loadTossPayments(clientKey);
        // tossPayments.requestPayment('카드', {
        //     amount: getOrder.orderPrice,
        //     orderId: getOrder.orderNumber,
        //     orderName: '해외배송서비스',
        //     customerName: getOrder.recipient.member.name,
        //     successUrl: window.location.origin + '/mypage',
        //     failUrl: window.location.origin + '/mypage',
        // });
    };
    if (!orders) return null;
    if (!paymentAgree)
        return (
            <PaymentWrap>
                <div
                    className="header"
                    style={{ marginBottom: '10px', padding: '5px 0', borderBottom: '1px solid #ccc' }}
                >
                    <strong style={{ fontSize: '22px' }}>결제 전 약관 동의</strong>
                    <p>(모두 체크후 다음 버튼을 눌러주세요)</p>
                </div>
                <form onSubmit={e => handlePaymentAgree(e)}>
                    <div className="wrap" style={{ overflowY: 'scroll', height: '300px' }}>
                        <input type="checkbox" id="1" required />
                        <label htmlFor="1">
                            상대국 통관으로 인한 배송지연이 발생할 수 있습니다. <br />
                            또한 신고금액 및 물품에 따라 수취인에게 관부가세를 청구할 수 있습니다.
                        </label>
                        <input type="checkbox" id="2" required />
                        <label htmlFor="2">
                            원칙적으로 관부가세는 수취인이 납부해야 하지만 지불조건 변경 시, 발송인이 납부가능 합니다.{' '}
                            <br /> 이 경우 수수료가 청구됩니다. <br />
                            <br />
                            - 수취인의 수취거절 및 관련비용(관부가세) 지불거절 <br />- 상품가치 오기입으로 발생한
                            통관상의 문제
                        </label>
                        <input type="checkbox" id="3" required />
                        <label htmlFor="3">
                            BADARA는 최선을 다해 회원님의 상품을 배송할 것입니다. <br />
                            하지만 아래와 같은 경우로 발생하는 서비스비용과 기타 행정처리 비용은 발송인에게 부과됩니다.
                        </label>
                        <input type="checkbox" id="4" required />
                        <label htmlFor="4">
                            상대국 통관으로 인한 배송지연이 발생할 수 있습니다. <br />
                            또한 신고금액 및 물품에 따라 수취인에게 관부가세를 청구할 수 있습니다.
                        </label>
                        <input type="checkbox" id="5" required />
                        <label htmlFor="5">
                            운임은 각 배송사별 중량측정기준으로 계산 청구됩니다. <br />
                            발송물이 센터로 입고된 후 정확한 요금산정을 위해 박스 크기와 무게는 재측정됩니다.
                        </label>
                    </div>
                    <button type="button" onClick={handlePopup}>
                        취소
                    </button>
                    <button type="sumbit">다음</button>
                </form>
            </PaymentWrap>
        );
    return (
        <UpdateInvoiceWrap>
            {depositPopup ? (
                <DepositToAccount popup={depositPopup} handlePopup={handleDeposit} paymentPopup={handlePopup} />
            ) : null}
            <h2>결제수단 선택</h2>
            <div className="paymentBtnWrap">
                <button type="button" className="paymentBtn" onClick={() => handleToss()}>
                    <img src={toss} alt="toss" />
                </button>
                <Button
                    variant="contained"
                    className="paymentBtn"
                    startIcon={<AccountBalanceIcon />}
                    onClick={() => handleDeposit()}
                >
                    무통장 입금
                </Button>
            </div>
            <button type="button" onClick={handlePopup}>
                취소
            </button>
        </UpdateInvoiceWrap>
    );
};

export default PaymentPopup;
