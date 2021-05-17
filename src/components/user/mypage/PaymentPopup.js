import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberOrderAction } from 'store/member';
import { orderStatusChangeAction } from 'store/order';
import { Fullscreen, PaymentWrap, UpdateInvoiceWrap } from 'styles/MypageStyles';
import DepositToAccount from './DepositToAccount';
import { loadTossPayments } from '@tosspayments/sdk';
import Button from '@material-ui/core/Button';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const PaymentPopup = ({ handlePopup, handleChangeUsePoint, usePoint }) => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.member.memberInfo);
    const { logged } = useSelector(state => state.member.loggedInfo);
    const { id } = useSelector(state => state.order);
    const [depositPopup, setDepositPopup] = useState(false);
    const [paymentAgree, setPaymentAgree] = useState(false);
    const [getOrder, setGetOrder] = useState('');
    const [usePointPopup, setPointPopup] = useState(false);

    console.log(usePointPopup);

    const [checked, setChecked] = useState({
        AllChecked: false,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
    });

    const handleChecked = e => {
        const { name } = e.target;
        if (name === 'AllChecked') {
            setChecked({
                AllChecked: !checked.AllChecked,
                checked1: !checked.AllChecked,
                checked2: !checked.AllChecked,
                checked3: !checked.AllChecked,
                checked4: !checked.AllChecked,
                checked5: !checked.AllChecked,
            });
        } else {
            setChecked({
                ...checked,
                [name]: e.target.checked,
            });
        }
    };
    console.log(checked);

    useEffect(() => {
        const order = orders.find(order => order.orderNumber === id);
        setGetOrder(order);
        console.log(getOrder);
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
    // TODO:토스페이먼츠 가상계좌 연동!
    const handleBankTransfer = async () => {
        const clientKey = 'test_ck_lpP2YxJ4K87PxeNb69p3RGZwXLOb';
        const tossPayments = await loadTossPayments(clientKey);
        tossPayments.requestPayment('가상계좌', {
            amount: Number(getOrder.orderPrice) + Number(getOrder.orderPrice) * 0.1,
            orderId: getOrder.orderNumber,
            orderName: '해외배송서비스',
            customerName: getOrder.recipient.member.name,
            successUrl: window.location.origin + '/mypage',
            failUrl: window.location.origin + '/mypage',
        });
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

    const handleUsePont = () => {
        if (logged.point < usePoint) {
            alert('보유하신 캐시보다 더 많이 입력하셨습니다. 다시 입력해주세요.');
            return;
        } else {
            setPointPopup(!usePointPopup);
        }
    };

    const handleToss = async () => {
        // alert('준비중입니다.');
        const clientKey = `${process.env.REACT_APP_PAYMENT_CLIENT_KEY}`;
        const tossPayments = await loadTossPayments(clientKey);
        tossPayments.requestPayment('카드', {
            amount: Math.ceil(
                Number(getOrder.orderPrice) + Number(getOrder.extraPrice) - usePoint + Number(getOrder.orderPrice) * 0.1
            ),
            orderId: getOrder.orderNumber,
            orderName: '해외배송서비스',
            customerName: getOrder.recipient.member.name,
            successUrl: window.location.origin + '/mypage',
            failUrl: window.location.origin + '/mypage',
        });
    };
    if (!orders) return null;
    if (!paymentAgree)
        return (
            <>
                <Fullscreen onClick={handlePopup} />
                <PaymentWrap>
                    <div
                        className="header"
                        style={{ marginBottom: '10px', padding: '20px 0', borderBottom: '1px solid #ccc' }}
                    >
                        <strong style={{ fontSize: '22px' }}>결제 전 약관 동의</strong>
                        <p>(모두 체크후 다음 버튼을 눌러주세요)</p>
                    </div>
                    <div className="allCheckedWrap">
                        <label
                            htmlFor="All"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            <input
                                type="checkbox"
                                id="All"
                                name="AllChecked"
                                onChange={e => handleChecked(e)}
                                checked={checked.AllChecked}
                                style={{ width: '20px', margin: '0' }}
                            />
                            전체동의
                        </label>
                    </div>
                    <div className="body">
                        <form onSubmit={e => handlePaymentAgree(e)}>
                            <div className="wrap" style={{ overflowY: 'scroll', height: '300px' }}>
                                <input
                                    type="checkbox"
                                    id="1"
                                    required
                                    name="checked1"
                                    onChange={e => handleChecked(e)}
                                    checked={checked.checked1}
                                />
                                <label htmlFor="1">
                                    상대국 통관으로 인한 배송지연이 발생할 수 있습니다. <br />
                                    또한 신고금액 및 물품에 따라 수취인에게 관부가세를 청구할 수 있습니다.
                                </label>
                                <input
                                    type="checkbox"
                                    id="2"
                                    name="checked2"
                                    onChange={e => handleChecked(e)}
                                    required
                                    checked={checked.checked2}
                                />
                                <label htmlFor="2">
                                    원칙적으로 관부가세는 수취인이 납부해야 하지만 지불조건 변경 시, 발송인이 납부가능
                                    합니다. <br /> 이 경우 수수료가 청구됩니다. <br />
                                    <br />
                                    - 수취인의 수취거절 및 관련비용(관부가세) 지불거절 <br />- 상품가치 오기입으로
                                    발생한 통관상의 문제
                                </label>
                                <input
                                    type="checkbox"
                                    id="3"
                                    required
                                    name="checked3"
                                    onChange={e => handleChecked(e)}
                                    checked={checked.checked3}
                                />
                                <label htmlFor="3">
                                    BADARA는 최선을 다해 회원님의 상품을 배송할 것입니다. <br />
                                    하지만 아래와 같은 경우로 발생하는 서비스비용과 기타 행정처리 비용은 발송인에게
                                    부과됩니다.
                                </label>
                                <input
                                    type="checkbox"
                                    id="4"
                                    required
                                    name="checked4"
                                    onChange={e => handleChecked(e)}
                                    checked={checked.checked4}
                                />
                                <label htmlFor="4">
                                    상대국 통관으로 인한 배송지연이 발생할 수 있습니다. <br />
                                    또한 신고금액 및 물품에 따라 수취인에게 관부가세를 청구할 수 있습니다.
                                </label>
                                <input
                                    type="checkbox"
                                    id="5"
                                    required
                                    name="checked5"
                                    onChange={e => handleChecked(e)}
                                    checked={checked.checked5}
                                />
                                <label htmlFor="5">
                                    운임은 각 배송사별 중량측정기준으로 계산 청구됩니다. <br />
                                    발송물이 센터로 입고된 후 정확한 요금산정을 위해 박스 크기와 무게는 재측정됩니다.
                                </label>
                            </div>
                            <button type="button" className="cancel" onClick={handlePopup}>
                                취소
                            </button>
                            <button type="sumbit" className="next">
                                다음
                            </button>
                        </form>
                    </div>
                </PaymentWrap>
            </>
        );
    if (!usePointPopup && paymentAgree && logged.point !== null)
        return (
            <UpdateInvoiceWrap>
                <div
                    className="header"
                    style={{ marginBottom: '10px', padding: '20px 0', borderBottom: '1px solid #ccc' }}
                >
                    <strong style={{ fontSize: '22px' }}>사용할 포인트를 입력해주세요.</strong>
                </div>
                <div className="paymentBtnWrap">
                    <p style={{ marginBottom: '1rem' }}>
                        회원님의 보유한 바다라 <strong>Cash</strong> :{' '}
                        <span style={{ fontWeight: '900', fontSize: '1.2rem' }}>{logged.point} Cash</span>
                    </p>
                    <input
                        type="number"
                        placeholder="사용할 포인트를 입력해주세요."
                        value={usePoint}
                        onChange={e => handleChangeUsePoint(e)}
                    />
                </div>
                <button
                    type="button"
                    onClick={handlePopup}
                    style={{ width: '50%', color: '#0049ff', background: '#fff' }}
                >
                    취소
                </button>
                <button
                    type="button"
                    onClick={handleUsePont}
                    style={{ width: '50%', background: '#0049ff', color: '#fff' }}
                >
                    확인
                </button>
            </UpdateInvoiceWrap>
        );
    if (usePointPopup || logged.point === null)
        return (
            <>
                <Fullscreen onClick={handlePopup} />
                <UpdateInvoiceWrap>
                    {depositPopup ? (
                        <DepositToAccount popup={depositPopup} handlePopup={handleDeposit} paymentPopup={handlePopup} />
                    ) : null}
                    <div
                        className="header"
                        style={{ marginBottom: '10px', padding: '20px 0', borderBottom: '1px solid #ccc' }}
                    >
                        <strong style={{ fontSize: '22px' }}>결제 수단을 선택해주세요!</strong>
                    </div>
                    <div className="paymentBtnWrap">
                        {/* <button type="button" className="paymentBtn" onClick={() => handleToss()}>
                        {/* <img src={toss} alt="toss" /> 
                        카드결제
                    </button> */}
                        <Button
                            variant="contained"
                            className="paymentBtn"
                            startIcon={<PaymentIcon />}
                            onClick={() => handleToss()}
                        >
                            카드결제
                        </Button>
                        {/* <Button
                        variant="contained"
                        className="paymentBtn"
                        startIcon={<AccountBalanceIcon />}
                        onClick={() => handleBankTransfer()}
                    >
                        계좌이체
                    </Button> */}
                        <Button
                            variant="contained"
                            className="paymentBtn"
                            startIcon={<AccountBalanceWalletIcon />}
                            onClick={() => handleDeposit()}
                        >
                            무통장 입금
                        </Button>
                    </div>
                    <button type="button" onClick={handlePopup} style={{ width: '100%', background: '#0049ff' }}>
                        취소
                    </button>
                </UpdateInvoiceWrap>
            </>
        );
};

export default PaymentPopup;
