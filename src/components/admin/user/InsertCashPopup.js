import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { OrderRefuncPopupWrap } from 'styles/OrderStyles';
import { useDispatch } from 'react-redux';
import { postPointInsertAction } from 'store/point';

const InsertCashPopup = ({ visible, setInserCash, user }) => {
    const dispatch = useDispatch();
    const [insertPoint, setInsertPoint] = useState({
        point: 0,
        detail: null,
    });
    console.log(insertPoint);
    const onChange = e => {
        const { name, value } = e.target;
        setInsertPoint({
            ...insertPoint,
            [name]: value,
        });
    };

    const onCancel = () => {
        setInserCash(!visible);
        setInsertPoint({
            point: 0,
            detail: null,
        });
    };

    const onSumbit = e => {
        e.preventDefault();
        if (insertPoint.point === 0 || !insertPoint.detail) {
            alert('포인트 입력 및 사유를 입력해주세요.');
            return;
        } else {
            dispatch(postPointInsertAction({ id: user.id, pointData: insertPoint }));
            setInsertPoint({
                point: 0,
                detail: null,
            });
            onCancel();
            window.location.href = `/admin/user/${user.id}`;
        }
    };
    if (!visible) return null;
    return (
        <OrderRefuncPopupWrap>
            <form onSubmit={onSumbit}>
                <h2>관리자 포인트 추가하기</h2>
                <TextField
                    id="outlined-basic"
                    label="포인트"
                    variant="outlined"
                    name="point"
                    value={insertPoint.point}
                    onChange={onChange}
                />
                <TextField
                    id="outlined-basic"
                    label="지급 사유"
                    variant="outlined"
                    name="detail"
                    value={insertPoint.detail}
                    onChange={onChange}
                />
                <Button variant="contained" color="primary" type="submit">
                    지급하기
                </Button>
                <Button variant="contained" color="primary" type="button" onClick={onCancel}>
                    취소
                </Button>
            </form>
        </OrderRefuncPopupWrap>
    );
};

export default InsertCashPopup;
