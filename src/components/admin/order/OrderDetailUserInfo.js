import React from 'react';

const OrderDetailUserInfo = ({ UpdateState, UpdateValue, handleOrderChange, List, handleRecipientChange }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>주문자</th>
                    <td colSpan="3">
                        <input type="text" value="강경원" disabled />
                    </td>
                </tr>
                <tr>
                    <th>주문번호</th>
                    <td colSpan="3">
                        <input type="text" value={UpdateValue.orderNumber || ''} disabled />
                    </td>
                </tr>
                <tr>
                    <th>주문 총 가격</th>
                    <td colSpan="3">
                        {UpdateState ? (
                            <input
                                type="number"
                                name="orderPrice"
                                defaultValue={UpdateValue.orderPrice || ''}
                                onChange={e => handleOrderChange(e)}
                            />
                        ) : (
                            <input
                                type="text"
                                value={UpdateValue.orderPrice || ''}
                                onChange={e => handleOrderChange(e)}
                                disabled
                            />
                        )}
                    </td>
                </tr>
                <tr>
                    <th>상태</th>
                    <td colSpan="4">
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
                            </select>
                        )}
                    </td>
                </tr>
                <tr>
                    <th colSpan="4">보내는 정보</th>
                </tr>
                <tr>
                    <th>이름</th>
                    <td>
                        <input type="text" value={UpdateValue.recipient.name || ''} disabled />
                    </td>
                    <th>휴대폰 번호</th>
                    <td>
                        <input type="text" value={UpdateValue.recipient.phoneNumber || ''} disabled />
                    </td>
                </tr>
                <tr>
                    <th>주소</th>
                    <td colSpan="3">
                        <input
                            type="text"
                            value={
                                UpdateValue.recipient.address1 +
                                    UpdateValue.recipient.address2 +
                                    UpdateValue.recipient.address3 +
                                    UpdateValue.recipient.state +
                                    UpdateValue.recipient.zipcode +
                                    UpdateValue.recipient.country || ''
                            }
                            disabled
                        />
                    </td>
                </tr>
                <tr>
                    <th>국가</th>
                    <td colSpan="3">
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
                    <th colSpan="4">관리자 특이사항</th>
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
                </tr>
            </tbody>
        </table>
    );
};

export default OrderDetailUserInfo;
