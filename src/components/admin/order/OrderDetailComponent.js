import React from 'react';
import { withRouter } from 'react-router-dom';
import { OrderWrap } from 'styles/OrderStyles';
import { OrderDetailButtonComponent, OrderDetailProductInfo, OrderDetailUserInfo } from 'components';
import OrderDetailBoxInfo from './OrderDetailBoxInfo';

const OrderDetailComponent = ({
    HandleOrderChange,
    HandleRecipientChange,
    HandleProductChange,
    HandleBoxChange,
    HandleUpdateClick,
    HandleUpdateFinish,
    UpdateState,
    UpdateValue,
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
                    UpdateValue={UpdateValue}
                    handleOrderChange={HandleOrderChange}
                    handleRecipientChange={HandleRecipientChange}
                    List={List}
                />
                <OrderDetailProductInfo
                    HandleChange={HandleProductChange}
                    UpdateState={UpdateState}
                    Products={UpdateValue.products}
                />
                <OrderDetailBoxInfo
                    UpdateState={UpdateState}
                    Boxes={UpdateValue.boxes}
                    HandleChange={HandleBoxChange}
                />
            </article>
        </OrderWrap>
    );
};

export default withRouter(OrderDetailComponent);
