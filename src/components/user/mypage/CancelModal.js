import React, { useEffect, useState } from 'react';
import { AskModalBlock, Fullscreen } from 'styles/ApplyStyles';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

const CancelModal = ({ visible, handleCancel, handlePopup }) => {
    const [order, setOrder] = useState();
    const { id, orders } = useSelector(state => ({
        id: state.order.id,
        orders: state.member.memberInfo.orders,
    }));

    useEffect(() => {
        const order = orders.find(order => order.orderNumber === id);
        setOrder(order);
    }, []);
    if (!visible || !order) return null;
    return (
        <Fullscreen>
            <AskModalBlock>
                <div className="header" style={{ marginBottom: '10px', padding: '5px 0' }}>
                    <strong style={{ fontSize: '22px', color: 'red' }}>취소 주의사항</strong>
                </div>
                <p style={{ fontSize: '14px', letterSpacing: '-0.5px' }}>
                    무통장입금으로 결제를 진행하셨다면, 카카오톡 오픈채팅 #바다라 로 문의후 환불처리가 완료됩니다.
                    <br />
                    정말로 취소하시겠습니까?
                </p>
                <div className="buttons">
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#0049ff', color: '#fff' }}
                        type="button"
                        onClick={() =>
                            handleCancel(
                                id,
                                order.orderStatus === '해외배송중' || order.orderStatus === '결제완료'
                                    ? '환불대기'
                                    : '취소'
                            )
                        }
                    >
                        확인
                    </Button>
                    <Button
                        variant="outlined"
                        style={{ border: '1px solid #0049ff', color: '#0049ff' }}
                        type="button"
                        onClick={e => handlePopup(e)}
                    >
                        취소
                    </Button>
                </div>
            </AskModalBlock>
        </Fullscreen>
    );
};

export default CancelModal;
