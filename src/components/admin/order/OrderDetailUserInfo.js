import React from 'react';

const OrderDetailUserInfo = ({ UpdateState, OrderInfo, HandleChange, List }) => {
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
                        <input type="text" value={OrderInfo.orderNumber || ''} disabled />
                    </td>
                </tr>
                <tr>
                    <th>주문 총 가격</th>
                    <td colSpan="3">
                        {UpdateState ? (
                            <input
                                type="number"
                                name="orderPrice"
                                defaultValue={OrderInfo.orderPrice || ''}
                                onChange={e => HandleChange(e)}
                            />
                        ) : (
                            <input
                                type="text"
                                value={OrderInfo.orderPrice || ''}
                                onChange={e => HandleChange(e)}
                                disabled
                            />
                        )}
                    </td>
                </tr>
                <tr>
                    <th colSpan="4">보내는 정보</th>
                </tr>
                <tr>
                    <th>이름</th>
                    <td>
                        <input type="text" value={OrderInfo.recipient.name || ''} disabled />
                    </td>
                    <th>휴대폰 번호</th>
                    <td>
                        <input type="text" value={OrderInfo.recipient.phoneNumber || ''} disabled />
                    </td>
                </tr>
                <tr>
                    <th>주소</th>
                    <td colSpan="3">
                        <input
                            type="text"
                            value={
                                OrderInfo.recipient.address1 +
                                    OrderInfo.recipient.address2 +
                                    OrderInfo.recipient.address3 +
                                    OrderInfo.recipient.state +
                                    OrderInfo.recipient.zipcode +
                                    OrderInfo.recipient.country || ''
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
                                onChange={e => HandleChange(e)}
                                defaultValue={OrderInfo.country || ''}
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
                                onChange={e => HandleChange(e)}
                                value={OrderInfo.recipient.country || ''}
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
            </tbody>
        </table>
    );
};

export default OrderDetailUserInfo;
