import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetailButtonComponent = ({
    UpdateValue,
    UpdateState,
    HandleUpdateClick,
    HandleUpdateFinish,
    handleRefundPopup,
}) => {
    return (
        <article className="btnWrap">
            {UpdateValue.paymentKey && UpdateValue.orderStatus !== '환불' ? (
                <button type="button" onClick={() => handleRefundPopup()}>
                    환불하기
                </button>
            ) : null}
            <button type="button" onClick={UpdateState ? () => HandleUpdateFinish(UpdateValue) : HandleUpdateClick}>
                {UpdateState ? '수정완료' : '수정'}
            </button>
            <button type="button" disabled>
                삭제
            </button>
            <Link to="/admin/order">
                <button type="button">목록으로</button>
            </Link>
        </article>
    );
};

export default OrderDetailButtonComponent;
