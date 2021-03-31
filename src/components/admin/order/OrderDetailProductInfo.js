import React from 'react';

const OrderDetailProductInfo = ({ UpdateState, HandleChange, Products, List }) => {
    return (
        <>
            {Products?.map((product, index) => {
                return (
                    <table style={{ margin: '50px 0' }} key={product.id}>
                        <tbody>
                            <tr>
                                <th colSpan="4">상품정보 {index + 1}</th>
                            </tr>
                            <tr>
                                <th>상품 이름</th>
                                <td colSpan="3">
                                    <input type="text" defaultValue={product.productDetail} disabled />
                                </td>
                            </tr>
                            <tr>
                                <th>개수</th>
                                <td colSpan="3">
                                    <input type="text" defaultValue={product.quantity} disabled />
                                </td>
                            </tr>
                            <tr>
                                <th>무게</th>
                                <td colSpan="3">
                                    <input type="text" defaultValue={product.weight} disabled />
                                </td>
                            </tr>
                            {/* <tr>
                                <th>주문상태</th>
                                <td colSpan="3">
                                    {UpdateState ? (
                                        <select
                                            name="status"
                                            onChange={e => HandleChange(e, index)}
                                            defaultValue={product.status || ''}
                                        >
                                            <option value="송장입력">송장입력</option>
                                            <option value="센터입고중">센터입고중</option>
                                            <option value="결제요청">결제요청</option>
                                            <option value="결제완료">결제완료</option>
                                            <option value="해외배송중">해외배송중</option>
                                            <option value="해외배송완료">해외배송완료</option>
                                        </select>
                                    ) : (
                                        <select
                                            name="status"
                                            onChange={e => HandleChange(e, index)}
                                            value={product.status || ''}
                                            disabled
                                        >
                                            <option value="송장입력">송장입력</option>
                                            <option value="센터입고중">센터입고중</option>
                                            <option value="결제요청">결제요청</option>
                                            <option value="결제완료">결제완료</option>
                                            <option value="해외배송중">해외배송중</option>
                                            <option value="해외배송완료">해외배송완료</option>
                                        </select>
                                    )}
                                </td>
                            </tr> */}
                            {/* <tr>
                                <th colSpan="2">회원 무게</th>
                                <th colSpan="2">쉽먼트 무게</th>
                            </tr>
                            <tr>
                                <th>부피 무게</th>
                                <th>실 무게</th>
                                <th>부피 무게</th>
                                <th>실 무게</th>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        name="volumeWeight"
                                        value={product.volumeWeight + 'g' || ''}
                                        disabled
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="netWeight"
                                        value={product.netWeight + 'g' || ''}
                                        disabled
                                    />
                                </td>
                                <td>
                                    {UpdateState ? (
                                        <input
                                            type="number"
                                            name="adminVolumeWeight"
                                            onChange={e => HandleChange(e, index)}
                                            defaultValue={product.adminVolumeWeight || ''}
                                        />
                                    ) : (
                                        <input type="number" value={product.adminVolumeWeight || ''} disabled />
                                    )}
                                </td>
                                <td>
                                    {UpdateState ? (
                                        <input
                                            type="number"
                                            name="adminNetWeight"
                                            onChange={e => HandleChange(e, index)}
                                            defaultValue={product.adminNetWeight || ''}
                                        />
                                    ) : (
                                        <input type="number" value={product.adminNetWeight || ''} disabled />
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <th>쉽 먼트 배송</th>
                                <td colSpan="2">
                                    {UpdateState ? (
                                        <input
                                            type="text"
                                            defaultValue={product.abroadInvoice || ''}
                                            name="abroadInvoice"
                                            onChange={e => HandleChange(e, index)}
                                        />
                                    ) : (
                                        <input type="text" value={product.abroadInvoice || ''} disabled />
                                    )}
                                </td>
                                <td>
                                    {UpdateState ? (
                                        <input
                                            type="text"
                                            name="abroadShippingCompany"
                                            onChange={e => HandleChange(e, index)}
                                            defaultValue={product.abroadShippingCompany || ''}
                                        />
                                    ) : (
                                        <input type="text" value={product.abroadShippingCompany || ''} disabled />
                                    )}
                                </td>
                            </tr> */}
                            <tr>
                                <th>금액</th>
                                <td colSpan="3">
                                    {UpdateState ? (
                                        <input
                                            type="text"
                                            defaultValue={product.price || ''}
                                            name="price"
                                            onChange={e => HandleChange(e, index)}
                                        />
                                    ) : (
                                        <input type="text" value={product.price || ''} disabled />
                                    )}
                                </td>
                            </tr>
                            {/* <tr>
                                <th colSpan="2">주문 특이사항</th>
                                <th colSpan="2">관리자 특이사항</th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    {UpdateState ? (
                                        <textarea name="userMemo" value={product.userMemo || ''} />
                                    ) : (
                                        <textarea disabled name="userMemo" value={product.userMemo || ''} />
                                    )}
                                </td>
                                <td colSpan="2">
                                    {UpdateState ? (
                                        <textarea
                                            name="adminMemo"
                                            onChange={e => HandleChange(e, index)}
                                            defaultValue={product.adminMemo || ''}
                                        />
                                    ) : (
                                        <textarea name="adminMemo" value={product.adminMemo || ''} disabled />
                                    )}
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                );
            })}
        </>
    );
};

export default OrderDetailProductInfo;
