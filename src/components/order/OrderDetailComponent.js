import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { OrderWrap } from 'styles/OrderStyles';

const OrderDetailComponent = () => {
    const { list } = useSelector(state => state.order.countryLists);
    const [updateState, setUpdateState] = useState(false);
    const [updateValue, setUpdateValue] = useState({
        status: '',
        orderPrice: '',
        adminMemo: '',
        abroadInvoice: '',
        country: '',
    });

    const handleUpdateClick = () => {
        setUpdateState(!updateState);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setUpdateValue(updateValue => ({
            ...updateValue,
            [name]: value,
        }));
    };
    console.log(updateValue);
    return (
        <OrderWrap>
            <article className="detailWrap">
                <article className="btnWrap">
                    <button type="button" onClick={handleUpdateClick}>
                        {updateState ? '수정완료' : '수정'}
                    </button>
                    <button type="button" disabled>
                        삭제
                    </button>
                    <Link to="/admin/order">
                        <button type="button">목록으로</button>
                    </Link>
                </article>
                <table>
                    <tbody>
                        <tr>
                            <th>주문자</th>
                            <td colSpan="3">
                                <input type="text" value="강경원" disabled />
                            </td>
                        </tr>
                        <tr>
                            <th>주문상태</th>
                            <td colSpan="3">
                                {updateState ? (
                                    <select name="status" onChange={e => handleChange(e)}>
                                        <option value="송장입력">송장입력</option>
                                        <option value="센터입고중">센터입고중</option>
                                        <option value="결제요청">결제요청</option>
                                        <option value="결제완료">결제완료</option>
                                        <option value="해외배송중">해외배송중</option>
                                        <option value="해외배송중">해외배송완료</option>
                                    </select>
                                ) : (
                                    <select disabled>
                                        <option value="송장입력">송장입력</option>
                                        <option value="송장입력">센터입고중</option>
                                        <option value="결제요청">결제요청</option>
                                        <option value="결제완료">결제완료</option>
                                        <option value="해외배송중">해외배송중</option>
                                        <option value="해외배송중">해외배송완료</option>
                                    </select>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th>주문번호</th>
                            <td>
                                <input type="text" value="배송중" disabled />
                            </td>
                            <th>회원 운송장번호</th>
                            <td>
                                <input type="text" value="배송중" disabled />
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="4">보내는 정보</th>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type="text" value="아무개" disabled />
                            </td>
                            <th>휴대폰 번호</th>
                            <td>
                                <input type="text" value="01022222222" disabled />
                            </td>
                        </tr>
                        <tr>
                            <th>국가</th>
                            <td colSpan="3">
                                {updateState ? (
                                    <select name="country" onChange={handleChange}>
                                        <option value="">나라선택</option>
                                        {list.map(v => {
                                            return (
                                                <option value={v} key={v}>
                                                    {v}
                                                </option>
                                            );
                                        })}
                                    </select>
                                ) : (
                                    <select name="country" onChange={handleChange} disabled>
                                        <option value="">나라선택</option>
                                        {list.map(v => {
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
                            <th>주소</th>
                            <td colSpan="3">
                                <input type="text" value="주소" disabled />
                            </td>
                        </tr>
                        <tr>
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
                                <input type="number" disabled />
                            </td>
                            <td>
                                <input type="number" disabled />
                            </td>
                            <td>{updateState ? <input type="number" /> : <input type="number" disabled />}</td>
                            <td>{updateState ? <input type="number" /> : <input type="number" disabled />}</td>
                        </tr>
                        <tr>
                            <th>쉽 먼트 운송장번호</th>
                            <td colSpan="3">
                                {updateState ? (
                                    <input type="text" value="123123" name="abroadInvoice" onChange={handleChange} />
                                ) : (
                                    <input
                                        type="text"
                                        value="123123"
                                        name="abroadInvoice"
                                        onChange={handleChange}
                                        disabled
                                    />
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th>금액</th>
                            <td colSpan="3">
                                {updateState ? (
                                    <input type="text" value="123213" name="orderPrice" onChange={handleChange} />
                                ) : (
                                    <input
                                        type="text"
                                        value="123213"
                                        name="orderPrice"
                                        onChange={handleChange}
                                        disabled
                                    />
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">주문 특이사항</th>
                            <th colSpan="2">관리자 특이사항</th>
                        </tr>
                        <tr>
                            <td colSpan="2">{updateState ? <textarea /> : <textarea disabled />}</td>
                            <td colSpan="2">
                                {updateState ? (
                                    <textarea name="adminMemo" onChange={handleChange} />
                                ) : (
                                    <textarea name="adminMemo" onChange={handleChange} disabled />
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </OrderWrap>
    );
};

export default OrderDetailComponent;
