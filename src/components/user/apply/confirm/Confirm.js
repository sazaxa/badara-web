import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { applyModifyAction, applyPriseAction, applySaveAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import { acitiveStepChange } from 'store/part';
import { withRouter } from 'react-router';
import { ConfirmWrap } from 'styles/ApplyStyles';
import WaringModal from './WarningModal';

const Confirm = ({ stepIndex, steps, history, match }) => {
    const orderNumber = match.params.orderNumber;
    const [warningPopup, setWarningPopup] = useState(false);
    const [totalWeightData, setTotalWeightData] = useState({
        weight: null,
    });
    const [weightGuidPopup, setWeightGuidPopup] = useState(false);
    const dispatch = useDispatch();
    const { country, apply, price, activeStep, status } = useSelector(
        state => ({
            country: state.apply.apply.recipient.country,
            apply: state.apply.apply,
            price: state.apply.price,
            activeStep: state.part.activeStep,
            status: state.apply.status,
        }),
        shallowEqual
    );
    const handleWeightPopup = () => {
        setWeightGuidPopup(true);
    };
    useEffect(() => {
        totalCalculation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apply]);

    useEffect(() => {
        if (orderNumber && status === 'success') {
            alert('주문이 수정 되었습니다.');
            history.push('/mypage');
        } else if (status === 'success') {
            alert('접수가 되었습니다.');
            history.push('/mypage');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    const { recipient, boxes, products } = apply;

    const totalCalculation = async () => {
        let sum = 0;
        // map 함수를 동기로 진행한다.
        await boxes.map(box => {
            if (box.expectedNetWeight > box.expectedVolumeWeight) {
                sum += Number(box.expectedNetWeight);
            } else {
                sum += Number(box.expectedVolumeWeight);
            }
            return sum;
        });
        setTotalWeightData({
            ...totalWeightData,
            weight: sum,
        });
        // dispatch는 원래 동기다.
        dispatch(applyPriseAction({ country: country, weight: sum }));
    };

    const handlePrev = () => {
        dispatch(acitiveStepChange(activeStep - 1));
    };

    const hadleApplySaveSumbit = e => {
        e.preventDefault();
        dispatch(applySaveAction({ data: apply }));
    };

    const handleWaringOpen = e => {
        e.preventDefault();
        setWarningPopup(!warningPopup);
    };

    const handleWaringClose = e => {
        e.preventDefault();
        setWarningPopup(!warningPopup);
        setWeightGuidPopup(false);
    };
    const handleWeightConfirm = () => {
        setWeightGuidPopup(false);
    };

    const modifyConfirm = () => {
        console.log('여기다!');
        dispatch(applyModifyAction({ id: apply.id, data: apply }));
    };
    return (
        <ConfirmWrap>
            <article className="titleBox">
                <h2>수취인</h2>
            </article>
            <form onSubmit={e => handleWaringOpen(e)}>
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="4" style={{ width: '100%' }}>
                                수취인 정보
                            </th>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>{recipient.name}</td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>{recipient.email}</td>
                        </tr>
                        <tr>
                            <th>휴대폰 번호</th>
                            <td>
                                [{recipient.countryCode}]{recipient.phoneNumber}
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                [{recipient.zipcode}]{' '}
                                {recipient.address1 ??
                                    undefined + recipient.address2 ??
                                    undefined + recipient.address3 ??
                                    undefined + recipient.city ??
                                    undefined + recipient.state ??
                                    undefined}{' '}
                                ({recipient.country})
                            </td>
                        </tr>
                        <tr>
                            <th>특이사항</th>
                            <td>{recipient.memo}</td>
                        </tr>
                    </tbody>
                </table>
                {/* <article className="titleBox">
                    <h2>상품</h2>
                </article>
                {products.map((product, index) => {
                    return (
                        <>
                            <table>
                                <tbody>
                                    <tr>
                                        <th colSpan="4" style={{ width: '100%' }}>
                                            상품 {index + 1}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>상품정보</th>
                                        <th>개수</th>
                                        <th>가격</th>
                                        <th>총가격</th>
                                    </tr>
                                    <tr>
                                        <td>{product.productDetail}</td>
                                        <td>{product.quantity}개</td>
                                        <td>{Number(product.price).toLocaleString()}원</td>
                                        <td>
                                            {product.quantity && product.price
                                                ? (product.quantity * product.price).toLocaleString() + '원'
                                                : null}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    );
                })} */}
                <article className="titleBox">
                    <h2>포장</h2>
                </article>
                {boxes.map((box, index) => {
                    return (
                        <table>
                            <tbody>
                                <tr>
                                    <th colSpan="4" style={{ width: '100%' }}>
                                        박스 {index + 1}
                                    </th>
                                </tr>
                                {box.type === '박스' ? (
                                    <>
                                        <tr>
                                            <th>가로</th>
                                            <th>세로</th>
                                            <th>높이</th>
                                            <th>부피 무게</th>
                                            <th>실 무게</th>
                                        </tr>
                                        <tr>
                                            <td>{box.expectedWidth}cm</td>
                                            <td>{box.expectedDepth}cm</td>
                                            <td>{box.expectedHeight}cm</td>
                                            <td>{Number(box.expectedVolumeWeight).toFixed(2)}kg</td>
                                            <td>{Number(box.expectedNetWeight).toFixed(2)}kg</td>
                                        </tr>
                                    </>
                                ) : (
                                    <>
                                        <tr>
                                            <th colSpan="2" style={{ width: '100%' }}>
                                                선택한 포장 유형
                                            </th>
                                            <td colSpan="4" style={{ width: '100%' }}>
                                                {box.type}
                                            </td>
                                        </tr>
                                    </>
                                )}
                                {box.products.map(product => (
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th colSpan="4" style={{ width: '100%' }}>
                                                    {index + 1}번 포장 상품
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>상품정보</th>
                                                <th>개수</th>
                                                <th>가격</th>
                                                <th>총가격</th>
                                            </tr>
                                            <tr>
                                                <td>{product.productDetail}</td>
                                                <td>{product.quantity}개</td>
                                                <td>{Number(product.price).toLocaleString()}원</td>
                                                <td>
                                                    {product.quantity && product.price
                                                        ? (product.quantity * product.price).toLocaleString() + '원'
                                                        : null}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ))}
                                <tr style={{ borderTop: '4px solid #0080ff' }}>
                                    <th>측정된 무게</th>
                                    <td>{box.expectedVolumeWeight > box.expectedNetWeight ? '부피무게' : '실 무게'}</td>
                                    <td>
                                        {box.expectedVolumeWeight > box.expectedNetWeight
                                            ? Number(box.expectedVolumeWeight).toFixed(2) + 'kg'
                                            : Number(box.expectedNetWeight).toFixed(2) + 'kg'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    );
                })}
                <div className="total">
                    <h2>Total</h2>
                    <div className="weight">
                        <h3>총 무게</h3>
                        <p>{Number(totalWeightData.weight).toFixed(2) + 'kg'}</p>
                    </div>
                    <div className="price">
                        <h3>총 예상가격</h3>
                        <p>
                            {Number(totalWeightData.weight) > 30
                                ? '30kg 이상 발송물 가격'
                                : Math.ceil(price).toLocaleString() + '원'}
                        </p>
                    </div>
                </div>
                <article
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '20px 0',
                    }}
                >
                    <p className="VAT">
                        (“BADARA”는 배송업이 아닌, “회원”과 “배송사”의 대행업무입니다. <br />
                        부가세는 10%가 별도로 발생됩니다.)
                    </p>
                    <Button type="button" disabled={stepIndex === 0} onClick={handlePrev}>
                        이전
                    </Button>
                    {orderNumber ? (
                        <Button variant="contained" color="primary" onClick={() => modifyConfirm()}>
                            수정하기
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" type="submit">
                            {stepIndex === steps.length - 1 ? '접수하기' : '다음'}
                        </Button>
                    )}
                </article>
            </form>
            <WaringModal
                visible={warningPopup}
                close={handleWaringClose}
                apply={hadleApplySaveSumbit}
                weight={totalWeightData.weight}
                weightPopup={weightGuidPopup}
                weightConfirm={handleWeightConfirm}
                handleWeightPopup={handleWeightPopup}
            />
        </ConfirmWrap>
    );
};

export default withRouter(Confirm);
