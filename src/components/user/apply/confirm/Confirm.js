import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearPredictionpriceAction } from 'store/part';

const Confirm = () => {
    const [totalData, setTotalData] = useState({
        weight: null,
        price: null,
    });
    const dispatch = useDispatch();
    const { country, apply } = useSelector(
        state => ({
            country: state.apply.apply.recipient.country,
            apply: state.apply.apply,
        }),
        shallowEqual
    );
    console.log(apply);
    const { recipient, boxes, products } = apply;

    const totalWeight = () => {
        let sum = 0;
        boxes.map(box => {
            if (box.expectedNetWeight > box.expectedVolumeWeight) {
                sum += box.expectedNetWeight;
                setTotalData({
                    ...totalData,
                    weight: sum,
                });
            } else {
                sum += box.expectedVolumeWeight;
                setTotalData({
                    ...totalData,
                    weight: sum,
                });
            }
        });
    };
    useEffect(() => {
        totalWeight();
    }, []);

    useEffect(() => {
        if (totalData.weight !== null) {
            onClickWPrice();
        }
    }, [totalData.weight]);

    const onClickWPrice = () => {
        console.log('country', country);
        console.log('totalWeightData', totalData.weight);
        dispatch(
            clearPredictionpriceAction({
                country: country,
                weight: totalData.weight,
            })
        );
    };
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
                                <td>{box.expectedVolumeWeight}</td>
                                <td>{box.expectedNetWeight}</td>
                            </tr>
                            <tr>
                                <th colSpan="5">
                                    총 측정된 무게 <br />
                                    (부피무게와 실무게중 무거운 쪽이 측정됩니다.)
                                </th>
                            </tr>
                            <tr>
                                <td>{box.expectedVolumeWeight > box.expectedNetWeight ? '부피무게' : '실 무게'}</td>
                            </tr>
                            <tr>
                                <td>{totalData.weight}</td>
                            </tr>
                        </tbody>
                    </table>
                );
            })}
        </>
    );
};

export default Confirm;
