import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { applyPriseAction } from 'store/apply';
import { clearPredictionpriceAction } from 'store/part';

const Confirm = () => {
    const [totalWeightData, setTotalWeightData] = useState({
        weight: null,
    });
    const dispatch = useDispatch();
    const { country, apply, price } = useSelector(
        state => ({
            country: state.apply.apply.recipient.country,
            apply: state.apply.apply,
            price: state.apply.price,
        }),
        shallowEqual
    );
    console.log(totalWeightData);
    const { recipient, boxes, products } = apply;

    const totalCalculation = async () => {
        let sum = 0;
        await boxes.map(box => {
            if (box.expectedNetWeight > box.expectedVolumeWeight) {
                sum += Number(box.expectedNetWeight);
            } else {
                sum += Number(box.expectedVolumeWeight);
            }
            return sum;
        });
        console.log(sum);
        setTotalWeightData({
            ...totalWeightData,
            weight: sum,
        });
        dispatch(applyPriseAction({ country: country, weight: sum }));
    };
    useEffect(() => {
        totalCalculation();
    }, []);
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>수취인 정보</th>
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
                </tbody>
            </table>
            {products.map((product, index) => {
                return (
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan="5">상품 {index + 1}</th>
                            </tr>
                            <tr>
                                <th>상품정보</th>
                                <th>개수</th>
                                <th>가격</th>
                                <th>실 무게</th>
                            </tr>
                            <tr>
                                <td>{product.productDetail}</td>
                                <td>{product.quntity}</td>
                                <td>{product.price}</td>
                                <td>{product.weight}</td>
                            </tr>
                        </tbody>
                    </table>
                );
            })}
            {boxes.map((box, index) => {
                return (
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan="5">박스 {index + 1}</th>
                            </tr>
                            <tr>
                                <th>가로</th>
                                <th>세로</th>
                                <th>높이</th>
                                <th>부피 무게</th>
                                <th>실 무게</th>
                            </tr>
                            <tr>
                                <td>{box.expectedWitdh}cm</td>
                                <td>{box.expectedDepth}cm</td>
                                <td>{box.expectedHeight}cm</td>
                                <td>{box.expectedVolumeWeight}kg</td>
                                <td>{box.expectedNetWeight}kg</td>
                            </tr>
                            <tr>
                                <th>측정된 무게</th>
                                <td>{box.expectedVolumeWeight > box.expectedNetWeight ? '부피무게' : '실 무게'}</td>
                                <td>
                                    {box.expectedVolumeWeight > box.expectedNetWeight
                                        ? box.expectedVolumeWeight + 'kg'
                                        : box.expectedNetWeight + 'kg'}
                                </td>
                            </tr>
                            <tr></tr>
                        </tbody>
                    </table>
                );
            })}
            <div className="total">
                <h4>Total</h4>
                <div className="weight">
                    <h3>총 무게</h3>
                    <p>{totalWeightData.weight}</p>
                </div>
                <div className="price">
                    <h3>총 예상가격</h3>
                    <p>{price}</p>
                </div>
            </div>
        </>
    );
};

export default Confirm;
