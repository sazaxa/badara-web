import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberOrderAction } from 'store/member';
import { porductInvoiceAction } from 'store/box';
import { UpdateInvoiceWrap, Fullscreen } from 'styles/MypageStyles';
import { Courier } from '../../../containers/user/apply/courier';

const UpdateInvoice = ({ handlePopup }) => {
    const dispatch = useDispatch();
    const { boxId } = useSelector(state => state.box);
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
        // 운송장번호를 Insert 하고, callBack으로 order를 다시 불러온다.
        dispatch(
            porductInvoiceAction({
                id: boxId,
                data: updateInvoice,
                callBack: () => {
                    dispatch(getMemberOrderAction(logged.id));
                },
            })
        );
        handlePopup();
    };
    if (!boxId) return null;
    return (
        <>
            <Fullscreen onClick={handlePopup} />
            <UpdateInvoiceWrap>
                <div
                    className="header"
                    style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', padding: '20px' }}
                >
                    <strong style={{ fontSize: '20px', letterSpacing: '-1.5px' }}>
                        센터로 보낸 운송장번호를 입력해주세요!
                    </strong>
                </div>
                <div className="body">
                    <p>택배사 / 운송장번호</p>
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
                    <input type="text" name="koreanInvoice" onChange={e => handleChange(e)} placeholder="운송장 번호" />
                </div>
                <button
                    type="button"
                    onClick={() => handleUpdateInvoise()}
                    style={{ width: '50%', background: '#0049ff' }}
                >
                    확인
                </button>
                <button type="button" onClick={handlePopup} style={{ width: '50%' }}>
                    취소
                </button>
            </UpdateInvoiceWrap>
        </>
    );
};

export default UpdateInvoice;
