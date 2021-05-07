import React from 'react';

const OrderDetailUserInfo = ({ UpdateState, UpdateValue, handleOrderChange, List, handleRecipientChange }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>주문자</th>
                    <td colSpan="5">
                        <input type="text" value={UpdateValue.recipient.member.name} disabled />
                    </td>
                </tr>
                <tr>
                    <th>주문번호</th>
                    <td colSpan="5">
                        <input type="text" value={UpdateValue.orderNumber || ''} disabled />
                    </td>
                </tr>
                <tr>
                    <th>주문 가격</th>
                    <td colSpan="1">
                        {UpdateState ? (
                            <input
                                type="number"
                                name="orderPrice"
                                defaultValue={Math.ceil(UpdateValue.orderPrice) || ''}
                                onChange={e => handleOrderChange(e)}
                                disabled
                            />
                        ) : (
                            <input
                                type="text"
                                value={Math.ceil(UpdateValue.orderPrice) || ''}
                                onChange={e => handleOrderChange(e)}
                                disabled
                            />
                        )}
                    </td>
                    <th>추가금액</th>
                    <td colSpan="1">
                        <input
                            type="text"
                            name="extraPrice"
                            value={UpdateValue.extraPrice === null ? '' : UpdateValue.extraPrice}
                            disabled={UpdateState ? false : true}
                            onChange={e => handleOrderChange(e)}
                        />
                    </td>
                    <th>부가세</th>
                    <td colSpan="1">
                        <input
                            type="text"
                            name="vat"
                            value={
                                UpdateValue.orderPrice && UpdateValue.extraPrice
                                    ? parseInt(UpdateValue.orderPrice + UpdateValue.extraPrice) * 0.1
                                    : ''
                            }
                            disabled
                        />
                    </td>
                </tr>
                <tr>
                    <th>총 가격</th>
                    <td colSpan="5">
                        <input
                            type="text"
                            name="vat"
                            value={
                                UpdateValue.orderPrice
                                    ? Math.ceil(
                                          parseInt(UpdateValue.orderPrice) + parseInt(UpdateValue.orderPrice) * 0.1
                                      ).toLocaleString() + '원'
                                    : ''
                            }
                            disabled
                        />
                    </td>
                </tr>
                <tr>
                    <th>상태</th>
                    <td colSpan="5">
                        {UpdateState ? (
                            <select
                                name="orderStatus"
                                onChange={e => handleOrderChange(e)}
                                defaultValue={UpdateValue.orderStatus || ''}
                            >
                                <option value="송장입력">송장입력</option>
                                <option value="센터입고중">센터입고중</option>
                                <option value="결제대기">결제대기</option>
                                <option value="결제요청">결제요청</option>
                                <option value="무통장입금">무통장입금</option>
                                <option value="결제완료">결제완료</option>
                                <option value="해외배송중">해외배송중</option>
                                <option value="해외배송완료">해외배송완료</option>
                                <option value="취소">취소</option>
                                <option value="환불">환불</option>
                                <option value="환불대기">환불대기</option>
                            </select>
                        ) : (
                            <select
                                name="orderStatus"
                                onChange={e => handleOrderChange(e)}
                                value={UpdateValue.orderStatus || ''}
                                disabled
                            >
                                <option value="송장입력">송장입력</option>
                                <option value="센터입고중">센터입고중</option>
                                <option value="결제대기">결제대기</option>
                                <option value="결제요청">결제요청</option>
                                <option value="무통장입금">무통장입금</option>
                                <option value="결제완료">결제완료</option>
                                <option value="해외배송중">해외배송중</option>
                                <option value="해외배송완료">해외배송완료</option>
                                <option value="취소">취소</option>
                                <option value="환불">환불</option>
                                <option value="환불대기">환불대기</option>
                            </select>
                        )}
                    </td>
                </tr>
                <tr>
                    <th>무통장입금 입금주</th>
                    <td colSpan="5">
                        <input type="text" value={UpdateValue.depositName ? UpdateValue.depositName : null} disabled />
                    </td>
                </tr>
                <tr>
                    <th colSpan="6">보내는 정보</th>
                </tr>
                <tr>
                    <th>이름</th>
                    <td colSpan="2">
                        <input
                            type="text"
                            name="name"
                            value={UpdateValue.recipient.name}
                            disabled={UpdateState ? false : true}
                            onChange={e => handleRecipientChange(e)}
                        />
                    </td>
                    <th>휴대폰 번호</th>
                    <td colSpan="2">
                        <input
                            type="text"
                            name="phoneNumber"
                            value={UpdateValue.recipient.phoneNumber || ''}
                            disabled={UpdateState ? false : true}
                            onChange={e => handleRecipientChange(e)}
                        />
                    </td>
                </tr>
                <tr>
                    <th>주/도</th>
                    <td>
                        <input
                            type="text"
                            value={UpdateValue.recipient.state}
                            disabled={UpdateState ? false : true}
                            name="state"
                            onChange={e => handleRecipientChange(e)}
                        />
                    </td>
                    <th>도시</th>
                    <td>
                        <input
                            type="text"
                            value={UpdateValue.recipient.city}
                            disabled={UpdateState ? false : true}
                            name="city"
                            onChange={e => handleRecipientChange(e)}
                        />
                    </td>
                    <th>우편번호</th>
                    <td>
                        <input
                            type="text"
                            value={UpdateValue.recipient.zipcode}
                            disabled={UpdateState ? false : true}
                            name="zipcode"
                            onChange={e => handleRecipientChange(e)}
                        />
                    </td>
                </tr>
                <tr>
                    <th>상세주소</th>
                    <td colSpan="5">
                        <input
                            type="text"
                            name="address1"
                            value={UpdateValue.recipient.address1}
                            onChange={e => handleRecipientChange(e)}
                            disabled={UpdateState ? false : true}
                        />
                    </td>
                </tr>
                <tr>
                    <th>주소</th>
                    <td colSpan="5">
                        <input
                            type="text"
                            value={
                                UpdateValue.recipient.address1 +
                                    ' ' +
                                    UpdateValue.recipient.state +
                                    ' ' +
                                    UpdateValue.recipient.zipcode +
                                    ' ' +
                                    UpdateValue.recipient.country || ''
                            }
                            disabled
                        />
                    </td>
                </tr>
                <tr>
                    <th>국가</th>
                    <td colSpan="5">
                        {UpdateState ? (
                            <select
                                name="country"
                                onChange={e => handleRecipientChange(e)}
                                defaultValue={UpdateValue.country || ''}
                            >
                                <option value="">나라선택</option>
                                {List.map(v => {
                                    return (
                                        <option value={v} key={v}>
                                            {v}
                                        </option>
                                    );
                                })}
                            </select>
                        ) : (
                            <select
                                name="country"
                                onChange={e => handleRecipientChange(e)}
                                value={UpdateValue.recipient.country || ''}
                                disabled
                            >
                                <option value="">나라선택</option>
                                {List.map(v => {
                                    return (
                                        <option value={v} key={v}>
                                            {v}
                                        </option>
                                    );
                                })}
                            </select>
                        )}
                    </td>
                </tr>
                <tr>
                    <th>해외 운송장번호</th>
                    <td colSpan="2">
                        {UpdateState ? (
                            <input
                                type="text"
                                name="invoice"
                                value={UpdateValue.invoice}
                                onChange={e => handleOrderChange(e)}
                            />
                        ) : (
                            <input
                                type="text"
                                name="invoice"
                                value={UpdateValue.invoice}
                                onChange={e => handleOrderChange(e)}
                                disabled
                            />
                        )}
                    </td>
                    <th>택배사</th>
                    <td colSpan="2">
                        {UpdateState ? (
                            <input
                                type="text"
                                name="shippingCompany"
                                value={UpdateValue.shippingCompany}
                                onChange={e => handleOrderChange(e)}
                            />
                        ) : (
                            <input
                                type="text"
                                name="shippingCompany"
                                value={UpdateValue.shippingCompany}
                                onChange={e => handleOrderChange(e)}
                                disabled
                            />
                        )}
                    </td>
                </tr>
                <tr>
                    <th colSpan="4">관리자 특이사항</th>
                    <th colSpan="2">유저 특이사항</th>
                </tr>
                <tr>
                    <td colSpan="4">
                        {UpdateState ? (
                            <textarea
                                name="adminMemo"
                                onChange={e => handleOrderChange(e)}
                                defaultValue={UpdateValue.adminMemo || ''}
                            />
                        ) : (
                            <textarea name="adminMemo" value={UpdateValue.adminMemo || ''} disabled />
                        )}
                    </td>
                    <td colSpan="2">
                        {UpdateState ? (
                            <textarea
                                name="memo"
                                onChange={e => handleOrderChange(e)}
                                defaultValue={UpdateValue.memo || ''}
                            />
                        ) : (
                            <textarea name="memo" value={UpdateValue.memo || ''} disabled />
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default OrderDetailUserInfo;
