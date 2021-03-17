import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberInfoAction } from 'store/member';
import { porductInvoiceAction } from 'store/product';
import { UpdateInvoiceWrap } from 'styles/MypageStyles';
import { Courier } from '../../containers/apply/courier';

const UpdateInvoice = ({ handlePopup }) => {
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.product);
    const { logged } = useSelector(state => state.member.loggedInfo);
    const [updateInvoice, setUpdateInvoice] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        setUpdateInvoice({
            ...updateInvoice,
            [name]: value,
        });
    };
    const handleUpdateInvoise = () => {
        // localStorage에 있는 회원 정보를 가져온다.
        const currentUser = localStorage.getItem('currentUser');
        // 운송장번호를 Insert 하고, callBack으로 order를 다시 불러온다.
        dispatch(
            porductInvoiceAction({
                id: product.id,
                data: updateInvoice,
                callBack: () => {
                    dispatch(getMemberInfoAction(logged.id));
                },
            })
        );
        handlePopup();
    };
    if (!product) return null;
    return (
        <UpdateInvoiceWrap>
            <h2>운송장번호 입력하기</h2>
            <select name="koreanShippingCompany" onChange={e => handleChange(e)}>
                <option value="">택배사 선택</option>
                {Courier.map((e, index) => {
                    return (
                        <option value={e} key={index}>
                            {e}
                        </option>
                    );
                })}
            </select>
            <input type="text" name="invoice" onChange={e => handleChange(e)} placeholder="운송장 번호" />
            <button type="button" onClick={() => handleUpdateInvoise()}>
                확인
            </button>
            <button type="button" onClick={handlePopup}>
                취소
            </button>
        </UpdateInvoiceWrap>
    );
};

export default UpdateInvoice;
