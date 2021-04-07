import React from 'react';

const OrderDetailBoxInfo = ({ Boxes, UpdateState, HandleChange }) => {
    return (
        <>
            {Boxes.map((box, index) => {
                return (
                    <table style={{ marginBottom: '30px' }}>
                        <tbody>
                            <tr>
                                <th colSpan="5">박스정보 {index + 1}</th>
                            </tr>
                            <tr>
                                <th>회원 입력 가로</th>
                                <th>회원 입력 세로</th>
                                <th>회원 입력 높이</th>
                                <th>
                                    회원 입력 <br />
                                    부피무게
                                </th>
                                <th>회원 입력 실무게</th>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" value={box.expectedWidth + 'cm'} disabled />
                                </td>
                                <td>
                                    <input type="text" value={box.expectedDepth + 'cm'} disabled />
                                </td>
                                <td>
                                    <input type="text" value={box.expectedHeight + 'cm'} disabled />
                                </td>
                                <td>
                                    <input type="text" value={box.expectedVolumeWeight + 'kg'} disabled />
                                </td>
                                <td>
                                    <input type="text" value={box.expectedNetWeight + 'kg'} disabled />
                                </td>
                            </tr>
                            <tr>
                                <th>관리자 입력 가로</th>
                                <th>관리자 입력 세로</th>
                                <th>관리자 입력 높이</th>
                                <th>
                                    관리자 입력 <br />
                                    부피무게
                                </th>
                                <th>관리자 입력 실무게</th>
                            </tr>
                            <tr>
                                <td>
                                    {UpdateState ? (
                                        <input
                                            type="text"
                                            value={box.width ? box.width : ''}
                                            name="width"
                                            onChange={e => HandleChange(e, index)}
                                        />
                                    ) : (
                                        <input type="text" name="width" value={box.width ? box.width : ''} disabled />
                                    )}
                                </td>
                                <td>
                                    {UpdateState ? (
                                        <input
                                            type="text"
                                            name="depth"
                                            value={box.depth ? box.depth : ''}
                                            onChange={e => HandleChange(e, index)}
                                        />
                                    ) : (
                                        <input type="text" value={box.depth ? box.depth : ''} name="depth" disabled />
                                    )}
                                </td>
                                <td>
                                    {UpdateState ? (
                                        <input
                                            type="text"
                                            value={box.height ? box.height : ''}
                                            name="height"
                                            onChange={e => HandleChange(e, index)}
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={box.height ? box.height : ''}
                                            name="height"
                                            disabled
                                        />
                                    )}
                                </td>
                                <td>
                                    {UpdateState ? (
                                        <input
                                            type="text"
                                            name="volumeWeight"
                                            value={box.volumeWeight ? box.volumeWeight : ''}
                                            onChange={e => HandleChange(e, index)}
                                            disabled
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            name="volumeWeight"
                                            value={box.volumeWeight ? box.volumeWeight : ''}
                                            disabled
                                        />
                                    )}
                                </td>
                                <td>
                                    {UpdateState ? (
                                        <input
                                            type="text"
                                            name="netWeight"
                                            defaultValue={box.netWeight ? box.netWeight : '0'}
                                            onChange={e => HandleChange(e, index)}
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            name="netWeight"
                                            defaultValue={box.netWeight ? box.netWeight : '0'}
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
                                            name="koreanShippingStatus"
                                            onChange={e => HandleChange(e, index)}
                                            defaultValue={box.koreanShippingStatus || ''}
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
                                    ) : (
                                        <select
                                            name="koreanShippingStatus"
                                            onChange={e => HandleChange(e, index)}
                                            value={box.koreanShippingStatus || ''}
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
                                <th>운송장번호</th>
                                <td colSpan="2">
                                    <input type="text" value={box.koreanInvoice} disabled />
                                </td>
                                <th>택배사</th>
                                <td>
                                    <input type="text" value={box.koreanShippingCompany} disabled />
                                </td>
                            </tr>
                            <tr></tr>
                        </tbody>
                    </table>
                );
            })}
        </>
    );
};

export default OrderDetailBoxInfo;
