import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import { MypageContent } from 'styles/MypageStyles';
import moment from '../../../../node_modules/moment/moment';

const MyorderCancelList = ({ status, memberOrder, handleTabToggle }) => {
    if (!memberOrder) {
        return null;
    }
    return (
        <Responsive>
            <MypageContent>
                {/* <Button variant="contained" color="primary">
                    내정보 수정
                </Button> */}
                <article className="menuBar">
                    <ul>
                        <li onClick={() => handleTabToggle(0)}>주문목록</li>
                        <li className="active" onClick={() => handleTabToggle(1)}>
                            취소목록
                        </li>
                    </ul>
                </article>
                <article className="mypageHeader">
                    <article className="left">
                        My <br />
                        BADARA
                    </article>
                    <article className="rightWrap">
                        <article className="right">
                            <ul>
                                <li style={{ width: '33%' }}>
                                    <strong>환불대기</strong>
                                    <p>{status.REFUND_WAITING}</p>
                                </li>
                                <li style={{ width: '33%' }}>
                                    <strong>환불</strong>
                                    <p>{status.REFUND}</p>
                                </li>
                                <li style={{ width: '33%' }}>
                                    <strong>취소</strong>
                                    <p>{status.CANCEL}</p>
                                </li>
                            </ul>
                        </article>
                    </article>
                </article>
                <article className="memberOrders">
                    {memberOrder.length === 0 ? (
                        <article className="order">
                            <p
                                style={{
                                    textAlign: 'center',
                                    fontSize: 40,
                                    padding: '50px 0',
                                    letterSpacing: '-1.5px',
                                }}
                            >
                                주문 내역이 없습니다.
                            </p>
                        </article>
                    ) : (
                        memberOrder.map(order => (
                            <article className="order" key={order.id}>
                                <article className="orderHead">
                                    <div className="headData">
                                        <strong>주문번호 </strong>
                                        <span>{order.orderNumber}</span>
                                    </div>
                                    <div className="headData">
                                        <strong>신청일자 </strong>
                                        <span>{moment(order.recipient.createdDate).format('LLL')}</span>
                                    </div>
                                    <div className="headData">
                                        <strong>도착국가 </strong>
                                        <span>{order.recipient.country}</span>
                                    </div>
                                </article>

                                <article className="data">
                                    <article className="recipient">
                                        <h2>배송지 정보</h2>
                                        <div className="recipientItem">
                                            <strong>이름 </strong>
                                            <span>{order.recipient.name}</span>
                                        </div>
                                        <div className="recipientItem">
                                            <strong>이메일 </strong>
                                            <span>{order.recipient.email}</span>
                                        </div>
                                        <div className="recipientItem">
                                            <strong>주소 </strong>
                                            <span>
                                                {order.recipient.address1}
                                                {order.recipient.address2 ?? order.recipient.address2}
                                                {order.recipient.address3 ?? order.recipient.address3}
                                                {order.recipient.city +
                                                    order.recipient.state +
                                                    order.recipient.country +
                                                    order.recipient.zipcode}
                                            </span>
                                        </div>
                                        <div className="recipientItem">
                                            <strong>휴대폰 번호 </strong>
                                            <span>
                                                ({order.recipient.countryCode}){order.recipient.phoneNumber}
                                            </span>
                                        </div>
                                    </article>
                                    <article className="product">
                                        <div className="titleWrap">
                                            <h2>상품 정보</h2>
                                        </div>
                                        {order.productResponses.map((product, index) => (
                                            <article className="productWrap" key={product.id}>
                                                {/* <h3>상품정보 {index + 1}</h3> */}
                                                <div className="productItem">
                                                    <strong>상품 </strong>
                                                    <span>{product.productDetail}</span>
                                                </div>
                                                <div className="productItem">
                                                    <strong>상품 가격</strong>
                                                    <span>{Number(product.price).toLocaleString()}원</span>
                                                </div>
                                                <div className="productItem">
                                                    <strong>상품 개수</strong>
                                                    <span>{product.quantity}개</span>
                                                </div>
                                                <div className="productItem">
                                                    <strong>상품 무게</strong>
                                                    <span>{product.weight}kg</span>
                                                </div>
                                            </article>
                                        ))}
                                    </article>
                                    <article className="box">
                                        <div className="titleWrap">
                                            <h2>박스 정보</h2>
                                        </div>
                                        {order.boxResponses.map((box, index) => (
                                            <>
                                                {/* <h3>박스정보 {index + 1}</h3> */}
                                                <div
                                                    className="boxItem"
                                                    key={box.id}
                                                    style={
                                                        box.koreanShippingStatus !== '송장입력' &&
                                                        box.koreanShippingStatus !== '센터입고중'
                                                            ? { width: '100%' }
                                                            : null
                                                    }
                                                >
                                                    <div
                                                        className="userWeight"
                                                        style={
                                                            box.netWeight === null || box.volumeWeight === null
                                                                ? { width: '100%' }
                                                                : { width: '60%', float: 'left' }
                                                        }
                                                    >
                                                        <strong>회원님이 입력한 부피 무게</strong>
                                                        <p>{box.expectedVolumeWeight}kg</p>
                                                        <strong>회원님이 입력한 실 무게</strong>
                                                        <p>{box.expectedNetWeight}kg</p>
                                                    </div>

                                                    {box.netWeight !== null || box.volumeWeight !== null ? (
                                                        <div
                                                            className="badaraWeight"
                                                            style={
                                                                box.netWeight === null || box.volumeWeight === null
                                                                    ? null
                                                                    : { width: '40%', float: 'left' }
                                                            }
                                                        >
                                                            <strong>바다라 부피 무게</strong>
                                                            <p>{box.volumeWeight}kg</p>
                                                            <strong>바다라 실 무게</strong>
                                                            <p>{box.netWeight}kg</p>
                                                        </div>
                                                    ) : null}
                                                </div>
                                                {box.koreanShippingStatus === '송장입력' ||
                                                box.koreanShippingStatus === '센터입고중' ? (
                                                    <div className="boxstatus">
                                                        <strong>상태</strong>
                                                        <p style={{ marginBottom: '10px' }}>
                                                            {box.koreanShippingStatus}
                                                        </p>
                                                    </div>
                                                ) : null}
                                            </>
                                        ))}
                                    </article>
                                </article>
                                {order.orderStatus !== '취소' ? (
                                    <article className="total">
                                        <h2>Total</h2>
                                        <div className="item">
                                            <strong>상태</strong>
                                            <p>{order.orderStatus}</p>
                                        </div>
                                        <div className="item">
                                            <strong>결제금액</strong>
                                            <p>{Math.ceil(Number(order.orderPrice)).toLocaleString()}원</p>
                                        </div>
                                        <span>+</span>
                                        <div className="item">
                                            <strong>부가세</strong>
                                            <p>{Math.ceil(Number(order.orderPrice) * 0.1).toLocaleString()}원</p>
                                        </div>
                                        <span>=</span>
                                        <div className="item">
                                            <strong>결제금액</strong>
                                            <p>
                                                {Math.ceil(
                                                    Number(order.orderPrice) + Number(order.orderPrice) * 0.1
                                                ).toLocaleString()}
                                                원
                                            </p>
                                        </div>
                                    </article>
                                ) : (
                                    <article className="total">
                                        <div className="item" style={{ marginBottom: '0' }}>
                                            <strong>상태</strong>
                                            <span>{order.orderStatus}</span>
                                        </div>
                                    </article>
                                )}
                            </article>
                        ))
                    )}
                </article>
            </MypageContent>
        </Responsive>
    );
};

export default MyorderCancelList;
