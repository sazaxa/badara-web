import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import Paper from '@material-ui/core/Paper';
import { MypageContent } from 'styles/MypageStyles';
import UpdateInvoice from './UpdateInvoice';
import PaymentPopup from './PaymentPopup';

const MypageComponent = ({
    status,
    memberOrder,
    handleUpdatePopup,
    handlePaymentPopup,
    updatePopup,
    handleProductInfo,
    paymentPopup,
    handlePaymentInfo,
}) => {
    if (!memberOrder) {
        return null;
    }
    return (
        <Responsive>
            {updatePopup === true ? <UpdateInvoice handlePopup={handleUpdatePopup} updatePopup={updatePopup} /> : null}
            {paymentPopup === true ? <PaymentPopup handlePopup={handlePaymentPopup} /> : null}
            <MypageContent>
                {/* <Button variant="contained" color="primary">
                    내정보 수정
                </Button> */}
                <article className="mypageHeader">
                    <article className="left">
                        MY <br />
                        고래타고
                    </article>
                    <article className="right">
                        <ul>
                            <li>
                                <strong>송장입력</strong>
                                <p>{status.INVOICE}</p>
                            </li>
                            <li>
                                <strong>센터입고중</strong>
                                <p>{status.CENTER_INCOME}</p>
                            </li>
                            <li>
                                <strong>결제요청</strong>
                                <p>{status.PAYMENT_REQUEST}</p>
                            </li>
                            <li>
                                <strong>무통장입금</strong>
                                <p>{status.PAYMENT_BANK}</p>
                            </li>
                            <li>
                                <strong>결제완료</strong>
                                <p>{status.PAYMENT_COMPLETE}</p>
                            </li>
                            <li>
                                <strong>해외배송중</strong>
                                <p>{status.GLOBAL_DELIVERY}</p>
                            </li>
                            <li>
                                <strong>해외배송완료</strong>
                                <p>{status.GLOBAL_DELIVERY_COMPLETED}</p>
                            </li>
                        </ul>
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
                                        <span>{order.recipient.createdDate}</span>
                                    </div>
                                    <div className="headData">
                                        <strong>도착국가 </strong>
                                        <span>{order.recipient.country}</span>
                                    </div>
                                </article>
                                <article className="orderHead" style={{ background: '#0080ff' }}>
                                    <div className="headData">
                                        <strong>수취인</strong>
                                    </div>
                                    <div className="headData">
                                        <strong>상품정보</strong>
                                    </div>
                                    <div className="headData">
                                        <strong>박스정보</strong>
                                    </div>
                                </article>
                                <article className="data">
                                    <article className="recipient">
                                        {/* <h2>수취인 정보</h2> */}
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
                                        {/* <h2>상품 정보</h2> */}
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
                                        {/* <h2>박스 정보</h2> */}
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
                                                    <strong>회원님이 입력한 부피 무게</strong>
                                                    <p>{box.expectedVolumeWeight}kg</p>
                                                    <strong>회원님이 입력한 실 무게</strong>
                                                    <p>{box.expectedNetWeight}kg</p>
                                                    {box.netWeight !== null || box.volumeWeight !== null ? (
                                                        <>
                                                            <strong>고래타고 부피 무게</strong>
                                                            <p>{box.volumeWeight}kg</p>
                                                            <strong>고래타고 실 무게</strong>
                                                            <p>{box.netWeight}kg</p>
                                                        </>
                                                    ) : null}
                                                </div>
                                                {box.koreanShippingStatus === '송장입력' ||
                                                box.koreanShippingStatus === '센터입고중' ? (
                                                    <div className="boxstatus">
                                                        <strong>상태</strong>
                                                        <p style={{ marginBottom: '10px' }}>
                                                            {box.koreanShippingStatus}
                                                        </p>
                                                        {box.koreanShippingStatus === '송장입력' ? (
                                                            <button
                                                                type="onClick"
                                                                onClick={() => handleProductInfo(box.id)}
                                                            >
                                                                송장 입력
                                                            </button>
                                                        ) : null}
                                                    </div>
                                                ) : null}
                                            </>
                                        ))}
                                    </article>
                                </article>
                                {order.orderStatus !== '결제대기' ? (
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
                                        {order.orderStatus === '결제요청' ? (
                                            <button type="button" onClick={() => handlePaymentPopup(order.id)}>
                                                결제하기
                                            </button>
                                        ) : null}
                                        {order.orderStatus === '해외배송중' || order.orderStatus === '해외배송완료' ? (
                                            <div className="item">
                                                <strong>해외 운송장번호</strong>
                                                <p>
                                                    {order.invoice}[{order.shippingCompany}]
                                                </p>
                                            </div>
                                        ) : null}
                                        {order.orderStatus === '무통장입금' ? (
                                            <>
                                                <div className="item">
                                                    <strong>은행</strong>
                                                    <p>..은행</p>
                                                </div>
                                                <div className="item">
                                                    <strong>계좌번호</strong>
                                                    <p>12312321312</p>
                                                </div>
                                            </>
                                        ) : null}
                                    </article>
                                ) : null}
                            </article>
                        ))
                    )}
                </article>
            </MypageContent>
        </Responsive>
    );
};

export default MypageComponent;
