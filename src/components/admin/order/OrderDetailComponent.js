import React from 'react';
import { withRouter } from 'react-router-dom';
import { OrderWrap } from 'styles/OrderStyles';
import { OrderDetailButtonComponent, OrderDetailProductInfo, OrderDetailUserInfo } from 'components';

const OrderDetailComponent = ({
    HandleChange,
    HandleUpdateClick,
    HandleUpdateFinish,
    UpdateState,
    UpdateValue,
    OrderInfo,
    List,
}) => {
    return (
        <OrderWrap>
            <article className="detailWrap">
                <OrderDetailButtonComponent
                    UpdateState={UpdateState}
                    HandleUpdateClick={HandleUpdateClick}
                    HandleUpdateFinish={HandleUpdateFinish}
                    UpdateValue={UpdateValue}
                />
                <OrderDetailUserInfo
                    UpdateState={UpdateState}
                    OrderInfo={OrderInfo}
                    HandleChange={(e, index) => HandleChange(e, index)}
                />
                <OrderDetailProductInfo
                    HandleChange={(e, index) => HandleChange(e, index)}
                    UpdateState={UpdateState}
                    Products={OrderInfo.products}
                    List={List}
                />
            </article>
        </OrderWrap>
    );
};

export default withRouter(OrderDetailComponent);
