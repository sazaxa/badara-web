import React from 'react';

const OrderDetailUserInfo = ({ UpdateState, OrderInfo, HandleChange }) => {
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
                        <input type="text" value={OrderInfo.products[0].recipientName || ''} disabled />
                    </td>
                    <th>휴대폰 번호</th>
                    <td>
                        <input type="text" value={OrderInfo.products[0].recipientPhoneNumber || ''} disabled />
                    </td>
                </tr>
                <tr>
                    <th>주소</th>
                    <td colSpan="3">
                        <input type="text" value={OrderInfo.products[0].recipientAddress || ''} disabled />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default OrderDetailUserInfo;
