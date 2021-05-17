import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import Paper from '@material-ui/core/Paper';
import { MypageContent } from 'styles/MypageStyles';
import UpdateInvoice from './UpdateInvoice';
import PaymentPopup from './PaymentPopup';
import moment from '../../../../node_modules/moment/moment';
import CancelModal from './CancelModal';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const MyorderList = ({
    status,
    memberOrder,
    handleUpdatePopup,
    handlePaymentPopup,
    updatePopup,
    handleProductInfo,
    paymentPopup,
    handlePaymentInfo,
    handleCancel,
    handleTabToggle,
    handleCancelPopup,
    cancelPopup,
    handlePriceDetail,
    priceDetail,
    orderStatus,
    handleChangeUsePoint,
    usePoint,
}) => {
    const classes = useStyles();
    if (!memberOrder) {
        return null;
    }
    return (
        <Responsive>
            {cancelPopup === true ? (
                <CancelModal handlePopup={handleCancelPopup} handleCancel={handleCancel} visible={cancelPopup} />
            ) : null}
            {updatePopup === true ? <UpdateInvoice handlePopup={handleUpdatePopup} updatePopup={updatePopup} /> : null}
            {paymentPopup === true ? (
                <PaymentPopup
                    handlePopup={handlePaymentPopup}
                    handleChangeUsePoint={handleChangeUsePoint}
                    usePoint={usePoint}
                />
            ) : null}
            <Backdrop className={classes.backdrop} open={orderStatus === 'loading'}>
                <CircularProgress color="inherit" />
                <p style={{ marginLeft: '20px', textAlign: 'center', lineHeight: '1.5' }}>
                    진행중입니다. <br /> 잠시만 기다려주세요.
                </p>
            </Backdrop>
            <MypageContent>
                {/* <Button variant="contained" color="primary">
                    내정보 수정
                </Button> */}
                <article className="menuBar">
                    <ul>
                        <li className="active" onClick={() => handleTabToggle(0)}>
                            주문목록
                        </li>
                        <li onClick={() => handleTabToggle(1)}>취소목록</li>
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
                </article>
                <article className="centerAddress">
                    <article className="title">
                        <h2>센터주소</h2>
                    </article>
                    <article className="address">
                        <p>서울특별시 금천구 가산디지털1로 5 대륭테크노타운 20차 1411호 주식회사 후스구스</p>
                    </article>
                </article>
                <article className="centerAddress">
                    <article className="title">
                        <h2>무통장입금 계좌정보</h2>
                    </article>
                    <article className="address">
                        <p>국민은행 061701-04-240916 주식회사 후스구스</p>
                    </article>
                </article>
                <article className="memberOrders">
                    {memberOrder.length === 0 ? (
                        <article className="order">
                            <p className="orderNone">주문 내역이 없습니다.</p>
                        </article>
                    ) : (
                        memberOrder.map(order => (
                            <article className="order" key={order.id}>
                                {/* <button
                                    type="button"
                                    key={order.id}
                                    onClick={() =>
                                        handleCancel(
                                            order.orderNumber,
                                            order.orderStatus === '해외배송중' || order.orderStatus === '결제완료'
                                                ? '환불대기'
                                                : '취소'
                                        )
                                    }
                                >
                                    주문 취소
                                </button> */}
                                {order.orderStatus === '결제완료' ||
                                order.orderStatus === '해외배송중' ||
                                order.orderStatus === '해외배송완료' ? null : (
                                    <button type="button" onClick={() => handleCancelPopup(order.orderNumber)}>
                                        주문 취소
                                    </button>
                                )}
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
                                {/* <article className="orderHead" style={{ background: '#0080ff' }}>
                                    <div className="headData">
                                        <strong>수취인</strong>
                                    </div>
                                    <div className="headData">
                                        <strong>상품정보</strong>
                                    </div>
                                    <div className="headData">
                                        <strong>박스정보</strong>
                                    </div>
                                </article> */}
                                <article className="data">
                                    <article className="recipient">
                                        <h2>배송지 정보</h2>
                                        <article className="itemWrap">
                                            <div className="recipientItem">
                                                <strong>수취인 </strong>
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
                                                <strong>연락처 </strong>
                                                <span>
                                                    ({order.recipient.countryCode}){order.recipient.phoneNumber}
                                                </span>
                                            </div>
                                        </article>
                                    </article>
                                    <article className="product">
                                        <div className="titleWrap">
                                            <h2>상품 정보</h2>
                                        </div>
                                        {order.productResponses.map(product => (
                                            <article className="productWrap" key={product.id}>
                                                {/* <h3>상품정보 {index + 1}</h3> */}
                                                <div className="productItem">
                                                    <strong>상품명 </strong>
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
                                                    <strong>상품 총가격</strong>
                                                    <span>
                                                        {(
                                                            Number(product.price) * Number(product.quantity)
                                                        ).toLocaleString()}
                                                        원
                                                    </span>
                                                </div>
                                            </article>
                                        ))}
                                    </article>
                                    <article className="box">
                                        <div className="titleWrap">
                                            <h2>박스 정보</h2>
                                        </div>
                                        {order.boxResponses.map(box => (
                                            <div key={box.id} style={{ width: '100%' }}>
                                                <div
                                                    className="boxItem"
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
                                            </div>
                                        ))}
                                    </article>
                                </article>
                                {order.orderStatus !== '결제대기' ? (
                                    <article className="total">
                                        {/* <div className="item">
                                            <strong>상태</strong>
                                            <span>{order.orderStatus}</span>
                                        </div>
                                        <div className="item">
                                            <strong>결제금액</strong>
                                            <span>{Math.ceil(Number(order.orderPrice)).toLocaleString()}원</span>
                                        </div>
                                        <span>+</span>
                                        <div className="item">
                                            <strong>부가세</strong>
                                            <span>{Math.ceil(Number(order.orderPrice) * 0.1).toLocaleString()}원</span>
                                        </div>
                                        <span>=</span>
                                        <div className="item price">
                                            <strong>결제금액</strong>
                                            <span style={{ fontSize: '20px', fontWeight: '600' }}>
                                                {Math.ceil(
                                                    Number(order.orderPrice) + Number(order.orderPrice) * 0.1
                                                ).toLocaleString()}
                                                원
                                            </span>
                                        </div> */}
                                        <div className="item" style={{ width: '100%' }}>
                                            <strong>총 금액</strong>
                                            <span style={{ fontSize: '20px', fontWeight: '600' }}>
                                                {Math.ceil(
                                                    Number(order.orderPrice) +
                                                        Number(order.extraPrice) +
                                                        Number(order.orderPrice) * 0.1
                                                ).toLocaleString()}
                                                원
                                            </span>
                                            <span
                                                className={priceDetail ? 'detailBtn active' : 'detailBtn'}
                                                onClick={() => handlePriceDetail()}
                                            >
                                                >
                                            </span>
                                        </div>
                                        <div className={priceDetail ? 'detailPrice active' : 'detailPrice'}>
                                            <div className="item" style={{ marginTop: '10px' }}>
                                                <strong>배송비용</strong>
                                                <span>{Math.ceil(Number(order.orderPrice)).toLocaleString()}원</span>
                                            </div>
                                            <div className="item">
                                                <strong>추가비용</strong>
                                                <span>{Math.ceil(Number(order.extraPrice)).toLocaleString()}원</span>
                                            </div>
                                            <div className="item">
                                                <strong>부가세</strong>
                                                <span>
                                                    {Math.ceil(
                                                        (Number(order.orderPrice) + Number(order.extraPrice)) * 0.1
                                                    ).toLocaleString()}
                                                    원
                                                </span>
                                            </div>
                                        </div>
                                        {order.orderStatus === '해외배송중' || order.orderStatus === '해외배송완료' ? (
                                            <div className="item" style={{ width: '100%', marginTop: '10px' }}>
                                                <strong>해외 운송장번호</strong>
                                                <span>
                                                    {order.invoice}[{order.shippingCompany}]
                                                </span>
                                                <a
                                                    className="tracking"
                                                    href={`https://www.dhl.com/kr-ko/home/tracking/tracking-global-forwarding.html?submit=1&tracking-id=${order.invoice}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    조회
                                                </a>
                                            </div>
                                        ) : null}
                                        {order.orderStatus === '무통장입금' ? (
                                            <>
                                                <div className="item" style={{ marginTop: '10px' }}>
                                                    <strong>은행</strong>
                                                    <span>국민은행</span>
                                                </div>
                                                <div className="item" style={{ marginTop: '10px' }}>
                                                    <strong>계좌번호</strong>
                                                    <span>061701-04-240916</span>
                                                </div>
                                                <div className="item" style={{ marginTop: '10px' }}>
                                                    <strong>예금주</strong>
                                                    <span>주식회사 후스구스</span>
                                                </div>
                                            </>
                                        ) : null}
                                    </article>
                                ) : null}
                                {order.orderStatus === '결제요청' ? (
                                    <article className="paymentBtn">
                                        <button type="button" onClick={() => handlePaymentPopup(order.orderNumber)}>
                                            결제하기
                                        </button>
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

export default MyorderList;
