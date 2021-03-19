/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { getMemberInfoAction } from 'store/member';
import { DetailWrap } from 'styles/AdminUserPageStyles';

const Detail = ({ match }) => {
    const dispatch = useDispatch();
    const { member, error } = useSelector(state => state.member.memberInfo);
    const { id } = match.params;

    useEffect(() => {
        dispatch(getMemberInfoAction(id));
    }, []);
    if (error) return <div>없는 회원 입니다.</div>;
    if (!member) return null;
    return (
        <DetailWrap>
            <article className="title">
                <h2>회원 정보</h2>
            </article>
            <table>
                <tbody>
                    <tr>
                        <th>이메일</th>
                        <td colSpan="3">{member.member.email}</td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td colSpan="3">{member.member.name}</td>
                    </tr>
                    <tr>
                        <th>휴대폰 번호</th>
                        <td colSpan="3">{member.member.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>회원 등급</th>
                        <td colSpan="3">{member.member.roles[0].roleName === 'ROLE_USER' ? '일반회원' : '관리자'}</td>
                    </tr>
                </tbody>
            </table>
            <article className="title">
                <h2>주문 정보</h2>
                <span>(여러가지 상품 등록시 첫번째 껏만 확인됩니다.)</span>
            </article>
            <table className="orderInfo">
                <thead>
                    <tr>
                        <th>주문번호</th>
                        <th>제품명</th>
                        <th>상태</th>
                        <th>신청일자</th>
                    </tr>
                </thead>
                <tbody>
                    {member.orders.map(order => (
                        <tr>
                            <Link to={`/admin/order/${order.id}`}>
                                <td>{order.orderNumber}</td>
                                <td>{order.products[0].productName}</td>
                                <td>{order.products[0].status}</td>
                                <td>{order.products[0].createdDate}</td>
                            </Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </DetailWrap>
    );
};

export default withRouter(Detail);
