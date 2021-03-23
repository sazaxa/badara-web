import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MypageContent } from 'styles/MypageStyles';
import UpdateInvoice from './UpdateInvoice';
import PaymentPopup from './PaymentPopup';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#1976d2',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles(theme => ({
    root: {
        width: '80px',
        height: '80px',
        fontSize: '24px',
        margin: '0 auto',
        marginBottom: '50px',
    },
    table: {
        minWidth: 650,
    },
}));

const MypageComponent = ({
    member,
    handleUpdatePopup,
    handlePaymentPopup,
    updatePopup,
    handleProductInfo,
    paymentPopup,
    handlePaymentInfo,
}) => {
    const classes = useStyles();
    if (!member) {
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
                                <p>0</p>
                            </li>
                            <li>
                                <strong>센터입고중</strong>
                                <p>0</p>
                            </li>
                            <li>
                                <strong>결제요청</strong>
                                <p>0</p>
                            </li>
                            <li>
                                <strong>결제완료</strong>
                                <p>0</p>
                            </li>
                            <li>
                                <strong>해외배송중</strong>
                                <p>0</p>
                            </li>
                            <li>
                                <strong>해외배송완료</strong>
                                <p>0</p>
                            </li>
                        </ul>
                    </article>
                </article>
                <TableContainer component={Paper}>
                    {member.hapOrders.length !== 0 ? (
                        member.hapOrders.map(hapOrder => (
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell width="38%">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <strong>신청날짜</strong> : {hapOrder.orders[0].createdDate}
                                                        {/* {moment(member.orders[0].products[0].createdDate, 'MMM Do YY')} */}
                                                    </span>
                                                </li>
                                                <li>
                                                    <strong>주문 번호</strong> : {hapOrder.orderNumber}
                                                </li>
                                            </ul>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">받는 분 정보</StyledTableCell>
                                        <StyledTableCell align="center">금액(예상/실제)</StyledTableCell>
                                        <StyledTableCell align="center">상태</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* <TableRow key={order.id}> */}
                                    {hapOrder.orders.map(order => (
                                        <>
                                            <TableRow align="center">
                                                <TableCell key={order.id} width="20%" align="center">
                                                    <p>
                                                        <strong>상품 명 :</strong> {order.orderName}
                                                    </p>
                                                    <p>
                                                        <strong>회원 입력 부피 무게 :</strong>
                                                        {order.volumeWeight === 0
                                                            ? '입력하지 않음'
                                                            : order.volumeWeight}
                                                    </p>
                                                    <p>
                                                        <strong>회원 입력 실 무게 :</strong>
                                                        {order.netWeight === 0 ? '입력하지 않음' : order.netWeight}
                                                    </p>
                                                    <p>
                                                        <strong>고래타고 입력 부피 무게 :</strong>
                                                        {order.adminVolumeWeight === 0
                                                            ? '입력하지 않음'
                                                            : order.adminVolumeWeight}
                                                    </p>
                                                    <p>
                                                        <strong>고래타고 입력 실 무게 :</strong>
                                                        {order.adminNetWeight === 0
                                                            ? '입력하지 않음'
                                                            : order.adminNetWeight}
                                                    </p>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <p>
                                                        <strong>이름 :</strong> {order.recipientName}
                                                    </p>
                                                    <p>
                                                        <strong>주소 :</strong> {order.recipientAddress}
                                                    </p>
                                                    <p>
                                                        <strong>휴대폰 번호 :</strong> {order.recipientPhoneNumber}
                                                    </p>
                                                    <p>
                                                        <strong>국가 :</strong> {order.country}
                                                    </p>
                                                </TableCell>
                                                <TableCell align="center">
                                                    {order.expectedPrice} $ /
                                                    {order.shippingPrice === 0 ? '책정중' : order.shippingPrice + '$'}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <p>{order.status}</p>
                                                    {order.status === '송장입력' ? (
                                                        <button
                                                            type="onClick"
                                                            onClick={() => handleProductInfo(order.id)}
                                                        >
                                                            송장 입력
                                                        </button>
                                                    ) : null}
                                                    {order.status === '해외배송중' ? (
                                                        <>
                                                            <p style={{ marginTop: '10px' }}>
                                                                <strong>택배사 :</strong> {order.abroadShippingCompany}
                                                            </p>
                                                            <p>
                                                                <strong>운송장 번호 : </strong>
                                                                {order.abroadInvoice}
                                                            </p>
                                                        </>
                                                    ) : null}
                                                </TableCell>
                                            </TableRow>
                                        </>
                                    ))}
                                    {hapOrder.orders[0].status === '송장입력' ||
                                    hapOrder.orders[0].status === '센터입고중' ? null : (
                                        <TableRow>
                                            <TableCell align="right" colSpan={5}>
                                                총 금액 : {hapOrder.orderPrice}원
                                                {hapOrder.orders[0].status === '결제요청' ? (
                                                    <button
                                                        type="onClick"
                                                        onClick={() => handlePaymentInfo(hapOrder.id)}
                                                    >
                                                        결제하기
                                                    </button>
                                                ) : null}
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        ))
                    ) : (
                        <div
                            style={{
                                padding: '100px 0',
                                textAlign: 'center',
                                fontSize: '40px',
                                border: 'none',
                                letterSpacing: '-1.5px',
                            }}
                        >
                            접수된 주문건이 없습니다.
                        </div>
                    )}
                </TableContainer>
            </MypageContent>
        </Responsive>
    );
};

export default MypageComponent;
