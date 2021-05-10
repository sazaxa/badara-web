import { Box, Button, Grid } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { PrintWrap } from 'styles/OrderStyles';
import moment from '../../../../node_modules/moment/moment';

const PrintComponent = ({ history }) => {
    const { seletedOrders } = useSelector(
        state => ({
            seletedOrders: state.order.print.seletedOrders,
        }),
        shallowEqual
    );
    console.log(seletedOrders);

    if (seletedOrders.length === 0) {
        history.push('/admin/order');
        alert('주문을 선택하여 주세요.');
    }
    return (
        <PrintWrap>
            {seletedOrders.map(order => (
                <div className="page" key={order.id}>
                    <div className="customPopup subpage">
                        <div className="Deviver">
                            <div className="head">
                                <div className="userInformation">
                                    <p>To :</p>
                                    <h3 className="username">{order.recipient.name}</h3>
                                    <h3 className="address">{order.recipient.address1}</h3>
                                    <h3 className="city">{order.recipient.city}</h3>
                                    <h3 className="state">{order.recipient.state}</h3>
                                    <h3 className="country">{order.recipient.country}</h3>
                                </div>
                                <div className="btnWrap">
                                    <Grid item xs={2}>
                                        <Box displayPrint="none">
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                color="default"
                                                size="small"
                                                onClick={() => window.print()}
                                                startIcon={<PrintIcon />}
                                            >
                                                Print
                                            </Button>
                                        </Box>
                                    </Grid>
                                </div>
                            </div>
                            <hr />
                            <div className="orderInformation">
                                <h5>주문번호 : {order.orderNumber}</h5>
                                <p></p>
                                <div className="orderDetail">
                                    <div className="shoppingAddress">
                                        <strong>배송 주소</strong>
                                        <p>
                                            {order.recipient.name} <br />
                                            {order.recipient.address1}
                                            <br />
                                            {order.recipient.city}
                                            <br />
                                            {order.recipient.state}&nbsp;
                                            {order.recipient.zipcode}
                                            <br />
                                            {order.recipient.country}
                                        </p>
                                    </div>
                                    <div className="shippingInfo">
                                        <p className="orderDate">
                                            <strong>주문 일자</strong>
                                            <br />
                                            {moment(order.recipient.createdDate).format('LLLL')}
                                        </p>
                                        <p className="shippingService">
                                            <strong>배송사</strong>
                                            <br />
                                            {order.shippingCompany ? order.shippingCompany : '배송전'}
                                        </p>
                                    </div>
                                    <div className="paymentInfo">
                                        <p className="payment">
                                            <strong>결제 수단</strong>
                                            <br />
                                            {order.cardType}
                                        </p>
                                    </div>
                                </div>
                                <div className="productsInfo">
                                    <h2>상품</h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>이름</th>
                                                <th>개수</th>
                                                <th>가격</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(order.productResponses || []).map(product => (
                                                <tr key={product.id}>
                                                    <td>{product.productDetail}</td>
                                                    <td> {product.quantity}</td>
                                                    <td>{product.price.toLocaleString() + '원'}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="boxsInfo">
                                    <h2>박스</h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>회원이 입력한 부피 무게</th>
                                                <th>회원이 입력한 실 무게</th>
                                                <th>바다라 부피 무게</th>
                                                <th>바다라 실 무게</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(order.boxResponses || []).map(box => (
                                                <tr key={box.id}>
                                                    <td>{box.expectedVolumeWeight + 'KG'}</td>
                                                    <td>{box.expectedNetWeight + 'KG'}</td>
                                                    <td>{box.volumeWeight ? box.volumeWeight + 'KG' : '입력전'}</td>
                                                    <td>{box.netWeight ? box.netWeight + 'KG' : '입력전'}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="boxsInfo">
                                    <h2>총</h2>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>배송금액</th>
                                                <th>추가금액</th>
                                                <th>부가세</th>
                                                <th>총 금액</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{Math.ceil(order.orderPrice).toLocaleString() + '원'}</td>
                                                <td>{Math.ceil(order.extraPrice).toLocaleString() + '원'}</td>
                                                <td>
                                                    {Math.ceil(
                                                        (order.orderPrice + order.extraPrice) * 0.1
                                                    ).toLocaleString() + '원'}
                                                </td>
                                                <td>{Math.ceil(order.orderPrice).toLocaleString() + '원'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <hr style={{ border: "2px solid #000" }} /> */}
                </div>
            ))}
        </PrintWrap>
    );
};

export default withRouter(PrintComponent);
