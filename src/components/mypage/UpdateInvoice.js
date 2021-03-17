import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { porductInvoiceAction } from 'store/product';
import { UpdateInvoiceWrap } from 'styles/MypageStyles';
import { Courier } from '../../containers/apply/courier';

const UpdateInvoice = ({ handlePopup }) => {
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.product);
    const [updateInvoice, setUpdateInvoice] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        setUpdateInvoice({
            ...updateInvoice,
            [name]: value,
        });
    };
    const handleUpdateInvoise = () => {
        dispatch(porductInvoiceAction({ id: product.id, data: updateInvoice }));
        handlePopup();
        // window.location.href = '/mypage';
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
