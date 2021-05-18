import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { OrderRefuncPopupWrap } from 'styles/OrderStyles';
import axios from '../../../../node_modules/axios/index';
import { useDispatch } from 'react-redux';
import { getOrderInfoAction, orderStatusChangeAction } from 'store/order';
import { useParams } from 'react-router';

const OrderRefundPopup = ({ visible, onCancel, UpdateValue, setRefuncPopup }) => {
    const dispatch = useDispatch();
    const { match } = useParams();
    const [refundData, setRefundData] = useState({
        cancelReason: '',
        cancelAmount: Math.ceil(
            parseInt(UpdateValue.orderPrice + UpdateValue.extraPrice - UpdateValue.discountPrice) +
                parseInt(UpdateValue.orderPrice) * 0.1
        ),
    });

    console.log(refundData.cancelAmount);
    const onSubmit = e => {
        e.preventDefault();
        const options = {
            url: `https://api.tosspayments.com/v1/payments/${UpdateValue.paymentKey}/cancel`,
            method: 'post',
            headers: {
                Authorization: `Basic ${process.env.REACT_APP_PATMENT_AUTHORIZATION}`,
            },
            data: {
                cancelReason: refundData.cancelReason,
                cancelAmount: refundData.cancelAmount,
            },
        };
        axios(options)
            .then(response => {
                setRefuncPopup(false);
                dispatch(
                    orderStatusChangeAction({
                        id: response.data.orderId,
                        data: {
                            paymentMethod: '환불',
                        },
                        callBack: () => {
                            dispatch(getOrderInfoAction(UpdateValue.id));
                            window.location.href = `/admin/order/${UpdateValue.id}`;
                        },
                    })
                );
            })
            .catch(e => {
                alert(e.message);
            });
    };

    const onChange = e => {
        const { name, value } = e.target;
        setRefundData({
            ...refundData,
            [name]: value,
        });
    };
    if (!visible) return null;
    return (
        <OrderRefuncPopupWrap>
            <form onSubmit={onSubmit}>
                <h2>토스 페이먼츠 환불하기</h2>
                <TextField
                    id="outlined-basic"
                    label="취소 사유"
                    variant="outlined"
                    name="cancelReason"
                    value={refundData.cancelReason}
                    onChange={onChange}
                />
                <TextField
                    id="outlined-basic"
                    label="취소 금액"
                    variant="outlined"
                    disabled
                    name="cancelAmount"
                    value={refundData.cancelAmount}
                    onChange={onChange}
                />
                <Button variant="contained" color="primary" type="submit">
                    환불하기
                </Button>
                <Button variant="contained" color="primary" type="button" onClick={onCancel}>
                    취소
                </Button>
            </form>
        </OrderRefuncPopupWrap>
    );
};

export default OrderRefundPopup;
