import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetailButtonComponent = ({ UpdateValue, UpdateState, HandleUpdateClick, HandleUpdateFinish }) => {
    return (
        <article className="btnWrap">
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
