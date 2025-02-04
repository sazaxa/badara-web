import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberInfoAction } from 'store/member';
import { orderStatusChangeAction } from 'store/order';
// import { productPaymentAction } from 'store/box';
import { Fullscreen, PaymentWrap } from 'styles/MypageStyles';

const DepositToAccount = ({ handlePopup, popup, paymentPopup }) => {
    const dispatch = useDispatch();
    const { logged } = useSelector(state => state.member.loggedInfo);
    const { id } = useSelector(state => state.order);

    const [Deposit, setDeposit] = useState(false);
    const [depositData, setDepositData] = useState({
        paymentMethod: '무통장입금',
        depositName: null,
        cardType: '무통장입금',
        point: localStorage.getItem('usePoint') ? Number(localStorage.getItem('usePoint')) : 0,
    });

    const handleChange = e => {
        setDepositData({
            ...depositData,
            depositName: e.target.value,
        });
    };

    const handleClose = () => {
        setDeposit(!Deposit);
        paymentPopup();
        // dispatch(
        //     orderStatusChangeAction({
        //         id: id,
        //         paymentMethod: { paymentMethod: '무통장입금' },
        //         callBack: () => {
        //             dispatch(getMemberInfoAction(logged.id));
        //         },
        //     })
        // );
        window.location.reload();
    };

    const handlePayment = () => {
        if (depositData.depositName === null) {
            alert('입금주를 입력하세요.');
            return;
        }
        // 운송장번호를 Insert 하고, callBack으로 order를 다시 불러온다.
        dispatch(
            orderStatusChangeAction({
                id: id,
                data: depositData,
                callBack: () => {
                    dispatch(getMemberInfoAction(logged.id));
                },
            })
        );
        // handlePopup();
        setDeposit(!Deposit);
    };
    if (!popup) return null;
    if (!Deposit)
        return (
            <PaymentWrap>
                <div
                    className="header"
                    style={{ marginBottom: '10px', padding: '20px 0', borderBottom: '1px solid #ccc' }}
                >
                    <strong style={{ fontSize: '22px' }}>무통장 입금</strong>
                </div>

                <div style={{ padding: '60px 0' }}>
                    <input type="text" placeholder="입금주를 입력해주세요." onChange={e => handleChange(e)} />
                </div>
                <button type="button" className="cancel" onClick={() => handlePopup()}>
                    뒤로가기
                </button>
                <button type="button" className="next" onClick={() => handlePayment()}>
                    확인
                </button>
            </PaymentWrap>
        );
    return (
        <PaymentWrap>
            <div className="header" style={{ marginBottom: '10px', padding: '20px 0', borderBottom: '1px solid #ccc' }}>
                <strong style={{ fontSize: '22px' }}>무통장 입금 확인</strong>
            </div>

            <div style={{ padding: '50px 0' }}>
                <p>
                    계좌번호: 061701-04-240916 <br />
                    입금주: 주식회사 후스구스
                </p>
                <p>(메모후 닫기 버튼을 눌러주세요)</p>
            </div>
            {/* <button type="button">확인</button> */}
            <button type="button" className="next" onClick={() => handleClose()} style={{ width: '100%' }}>
                닫기
            </button>
        </PaymentWrap>
    );
};

export default DepositToAccount;
