import { OrderDetailComponent } from 'components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import produce from 'immer';
import { getOrderInfoAction, orderStatusChangeAction, putOrderInfoAction } from 'store/order';

const OrderDetailContainer = ({ match }) => {
    const dispatch = useDispatch();
    const [updateState, setUpdateState] = useState(false);
    const [updateValue, setUpdateValue] = useState(null);
    const [refundPopup, setRefuncPopup] = useState(false);
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
            setUpdateValue(orderInfo);
        }
    }, [orderInfo]);

    const handleUpdateClick = () => {
        setUpdateState(!updateState);
    };
    const handleUpdateFinish = updateValue => {
        if (updateValue.orderStatus === '결제요청') {
            const boxes = updateValue.boxes;
            for (let i = 0; i < boxes.length; i++) {
                if (
                    boxes[i].width === null ||
                    boxes[i].depth === null ||
                    boxes[i].height === '' ||
                    boxes[i].width === '' ||
                    boxes[i].depth === '' ||
                    boxes[i].height === ''
                ) {
                    alert('박스에 가로 세로 높이 값을 입력하세요.');
                    return;
                }
            }
        } else if (updateValue.orderStatus === '해외배송중') {
            if (updateValue.invoice === null || updateValue.shippingCompany === null) {
                alert('운송장번호, 택배사를 입력하세요.');
                return;
            }
        }

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

    const handleProductChange = (e, boxIndex, index) => {
        const { name, value } = e.target;
        setUpdateValue(
            produce(updateValue, draft => {
                draft.boxes[boxIndex].products[index][name] = value;
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

    const handleRefundPopup = () => {
        setRefuncPopup(!refundPopup);
    };

    const handleDepositCancel = () => {
        const confirm = window.confirm('정말로 환불하시겠습니까?');
        if (confirm === true) {
            dispatch(
                orderStatusChangeAction({
                    id: updateValue.orderNumber,
                    data: {
                        paymentMethod: '환불',
                    },
                    callBack: () => {
                        dispatch(getOrderInfoAction(updateValue.id));
                        window.location.href = `/admin/order/${updateValue.id}`;
                    },
                })
            );
        }
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
            handleRefundPopup={handleRefundPopup}
            refundPopup={refundPopup}
            setRefuncPopup={setRefuncPopup}
            handleDepositCancel={handleDepositCancel}
        />
    );
};

export default withRouter(OrderDetailContainer);
