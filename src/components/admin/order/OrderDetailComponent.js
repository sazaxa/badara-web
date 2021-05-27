import React from 'react';
import { withRouter } from 'react-router-dom';
import { OrderWrap } from 'styles/OrderStyles';
import { OrderDetailButtonComponent, OrderDetailProductInfo, OrderDetailUserInfo } from 'components';
import OrderDetailBoxInfo from './OrderDetailBoxInfo';
import OrderRefundPopup from './OrderRefundPopup';
import { Update } from 'lib/api/FAQ';

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
    handleRefundPopup,
    refundPopup,
    setRefuncPopup,
    handleDepositCancel,
}) => {
    return (
        <OrderWrap>
            <OrderRefundPopup
                visible={refundPopup}
                onCancel={handleRefundPopup}
                UpdateValue={UpdateValue}
                setRefuncPopup={setRefuncPopup}
            />
            <article className="detailWrap">
                <OrderDetailButtonComponent
                    UpdateState={UpdateState}
                    HandleUpdateClick={HandleUpdateClick}
                    HandleUpdateFinish={HandleUpdateFinish}
                    UpdateValue={UpdateValue}
                    handleRefundPopup={handleRefundPopup}
                    handleDepositCancel={handleDepositCancel}
                />
                <OrderDetailUserInfo
                    UpdateState={UpdateState}
                    UpdateValue={UpdateValue}
                    handleOrderChange={HandleOrderChange}
                    handleRecipientChange={HandleRecipientChange}
                    List={List}
                />
                {/* <OrderDetailProductInfo
                    HandleChange={HandleProductChange}
                    UpdateState={UpdateState}
                    Products={UpdateValue.products}
                /> */}
                <OrderDetailBoxInfo
                    UpdateState={UpdateState}
                    Boxes={UpdateValue.boxes}
                    HandleChange={HandleBoxChange}
                    productsHandleChange={HandleProductChange}
                />
            </article>
        </OrderWrap>
    );
};

export default withRouter(OrderDetailComponent);
