import { OrderDetailComponent } from 'components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import produce from 'immer';
import order, { getOrderInfoAction, putOrderInfoAction } from 'store/order';

const OrderDetailContainer = ({ match }) => {
    const dispatch = useDispatch();
    const [updateState, setUpdateState] = useState(false);
    const [updateValue, setUpdateValue] = useState(null);
    const { id } = match.params;
    const { list, orderInfo } = useSelector(state => ({
        list: state.part.country.list,
        orderInfo: state.order.orderInfo,
    }));

    // 최초 불러오기
    useEffect(() => {
        dispatch(getOrderInfoAction(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (orderInfo !== null) {
            setUpdateValue({
                id: orderInfo.id,
                orderNumber: orderInfo.orderNumber,
                orderPrice: orderInfo.orderPrice,
                orderStatus: orderInfo.orderStatus,
                invoice: orderInfo.invoice,
                shippingCompany: orderInfo.shippingCompany,
                adminMemo: orderInfo.adminMemo,
                userMemo: orderInfo.userMeomo,
                products: orderInfo.productResponses,
                boxes: orderInfo.boxResponses,
                recipient: orderInfo.recipient,
            });
        }
    }, [orderInfo]);

    console.log(updateValue);

    const handleUpdateClick = () => {
        setUpdateState(!updateState);
    };
    const handleUpdateFinish = updateValue => {
        dispatch(
            putOrderInfoAction({
                updateData: updateValue,
                callBack: () => {
                    dispatch(getOrderInfoAction(updateValue.id));
                },
            })
        );
        setUpdateState(!updateState);
    };
    // const handleChange = (e, index) => {
    //     const { name, value } = e.target;
    //     if (name === 'orderPrice') {
    //         setUpdateValue({
    //             ...updateValue,
    //             [name]: value,
    //         });
    //     } else {
    //         setUpdateValue(
    //             produce(updateValue, draft => {
    //                 draft.products[index][name] = value;
    //             })
    //         );
    //     }
    // };
    const handleOrderChange = e => {
        const { name, value } = e.target;
        setUpdateValue({
            ...updateValue,
            [name]: value,
        });
    };

    const handleRecipientChange = e => {
        const { name, value } = e.target;
        setUpdateValue({
            ...updateValue,
            recipient: {
                ...updateValue.recipient,
                [name]: value,
            },
        });
    };

    const handleProductChange = (e, index) => {
        const { name, value } = e.target;
        setUpdateValue(
            produce(updateValue, draft => {
                draft.products[index][name] = value;
            })
        );
    };

    const handleBoxChange = (e, index) => {
        const { name, value } = e.target;
        setUpdateValue(
            produce(updateValue, draft => {
                draft.boxes[index][name] = value;
            })
        );
    };
    if (orderInfo === null || updateValue === null || list === null) {
        return null;
    }
    return (
        <OrderDetailComponent
            HandleOrderChange={handleOrderChange}
            HandleRecipientChange={handleRecipientChange}
            HandleProductChange={handleProductChange}
            HandleBoxChange={handleBoxChange}
            HandleUpdateClick={handleUpdateClick}
            HandleUpdateFinish={handleUpdateFinish}
            UpdateState={updateState}
            UpdateValue={updateValue}
            OrderInfo={orderInfo}
            List={list}
        />
    );
};

export default withRouter(OrderDetailContainer);
