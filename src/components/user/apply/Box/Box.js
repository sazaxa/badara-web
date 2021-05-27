import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { boxDataUpdateAction, productDataAddAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import { BoxWrap } from 'styles/ApplyStyles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Product from './Product';

const Box = ({ box, index, Remove }) => {
    useEffect(() => {
        if (updateBoxData !== box) {
            setUpdateBoxData(box);
        }
    }, [updateBoxData, box]);
    // 받은 data를 수정하기 위해 state에 담는다.
    const [updateBoxData, setUpdateBoxData] = useState(box);
    const dispatch = useDispatch();

    const handleChangeBox = e => {
        const { name, value } = e.target;
        setUpdateBoxData({
            ...updateBoxData,
            [name]: value,
        });
        if (name === 'type' && value !== '박스') {
            setUpdateBoxData({
                ...updateBoxData,
                type: value,
                expectedWidth: 1,
                expectedDepth: 1,
                expectedHeight: 1,
                expectedVolumeWeight: 1,
            });
        } else if (name === 'type' && value === '박스') {
            setUpdateBoxData({
                ...updateBoxData,
                type: value,
                expectedWidth: null,
                expectedDepth: null,
                expectedHeight: null,
                expectedVolumeWeight: null,
            });
        }
    };

    // state가 변경 될때마다 redux state에 저장한다.
    useEffect(() => {
        dispatch(boxDataUpdateAction({ index: index, updateData: updateBoxData }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateBoxData]);

    // 가로 세로 높이 구해서 부피무게를 구하고 state에 저장한다.
    const onClickVolume = () => {
        const { expectedWidth, expectedDepth, expectedHeight } = updateBoxData;
        console.log(expectedWidth);
        console.log(Number.isInteger(expectedWidth));
        if ((expectedWidth, expectedDepth, expectedHeight !== null)) {
            const sum = (expectedWidth * expectedDepth * expectedHeight) / 5000;
            setUpdateBoxData({
                ...updateBoxData,
                expectedVolumeWeight: sum,
            });
        } else {
            alert('가로,세로,높이 값을 모두 입력하세요.');
        }
    };

    const defaultProduct = {
        productDetail: null,
        quantity: null,
        price: null,
    };

    const ProductAdd = () => {
        dispatch(productDataAddAction({ boxIndex: index, product: defaultProduct }));
        console.log(defaultProduct);
    };

    return (
        <>
            <BoxWrap>
                <article className="titleBox">
                    <h2>{index + 1}번 발송품 정보</h2>
                    <p>
                        센터에 보내시는 <strong>발송품의 수량만큼</strong> 추가해주세요.
                    </p>
                    {index !== 0 ? (
                        <Button variant="contained" color="secondary" onClick={() => Remove(index)}>
                            삭제
                        </Button>
                    ) : null}
                </article>
                <table>
                    <tbody>
                        <tr>
                            <th>포장 유형</th>
                            <td>
                                <RadioGroup
                                    aria-label="type"
                                    name="type"
                                    value={updateBoxData.type}
                                    onChange={e => handleChangeBox(e)}
                                    className="RadioGroup"
                                >
                                    <FormControlLabel value="박스" control={<Radio />} label="박스" />
                                    {/* <FormControlLabel value="배대지" control={<Radio />} label="배대지" /> */}
                                    <FormControlLabel value="비닐봉투" control={<Radio />} label="비닐봉투" />
                                    <FormControlLabel value="모르겠어요" control={<Radio />} label="모르겠어요" />
                                </RadioGroup>
                            </td>
                        </tr>
                        {updateBoxData.type === '박스' ? (
                            <>
                                <tr>
                                    <th>부피무게 계산(단위:cm)</th>
                                    <td>
                                        <input
                                            type="number"
                                            name="expectedWidth"
                                            value={updateBoxData.expectedWidth ?? undefined}
                                            onChange={e => handleChangeBox(e)}
                                            required
                                            placeholder="가로"
                                            style={{ width: '20%' }}
                                        />
                                        <input
                                            type="number"
                                            name="expectedDepth"
                                            value={updateBoxData.expectedDepth ?? undefined}
                                            onChange={e => handleChangeBox(e)}
                                            required
                                            placeholder="세로"
                                            style={{ width: '20%' }}
                                        />
                                        <input
                                            type="number"
                                            name="expectedHeight"
                                            value={updateBoxData.expectedHeight ?? undefined}
                                            onChange={e => handleChangeBox(e)}
                                            required
                                            placeholder="높이"
                                            style={{ width: '20%' }}
                                        />
                                        <Button
                                            variant="contained"
                                            className="btn"
                                            type="button"
                                            onClick={onClickVolume}
                                            style={{ width: '20%' }}
                                        >
                                            계산
                                        </Button>
                                        <p>(부피무게는 가로x세로x높이/5000 으로 계산됩니다.)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>부피무게(단위:kg)</th>
                                    <td className="weight">
                                        <input
                                            type="text"
                                            name="expectedVolumeWeight"
                                            value={
                                                updateBoxData.expectedVolumeWeight
                                                    ? updateBoxData.expectedVolumeWeight.toFixed(1)
                                                    : ''
                                            }
                                            disabled
                                            placeholder="계산하기 후 확인가능합니다."
                                            onChange={e => handleChangeBox(e)}
                                        />
                                        <span style={{ marginLeft: '10px' }}>kg</span>
                                    </td>
                                </tr>
                            </>
                        ) : null}
                        <tr>
                            <th>실 무게(단위:kg)</th>
                            <td className="weight">
                                <input
                                    type="number"
                                    name="expectedNetWeight"
                                    value={updateBoxData.expectedNetWeight ?? undefined}
                                    onChange={e => handleChangeBox(e)}
                                    placeholder="박스의 무게를 숫자만 입력해주세요."
                                    step="0.01"
                                    required
                                />
                                <span style={{ marginLeft: '10px' }}>kg</span>
                                {updateBoxData.type !== '박스' ? (
                                    <p style={{ width: '100%' }}>(대략적인 실무게를 입력해주세요.)</p>
                                ) : null}
                            </td>
                        </tr>
                        <tr>
                            <th>특이사항</th>
                            <td className="weight">
                                <input
                                    type="text"
                                    name="userMemo"
                                    value={updateBoxData.userMemo ?? undefined}
                                    onChange={e => handleChangeBox(e)}
                                    placeholder="특이사항을 적어주세요."
                                    required
                                />
                            </td>
                        </tr>
                        {updateBoxData.products.map((product, i) => (
                            <Product product={product} index={i} boxIndex={index} />
                        ))}
                        {/* <tr>
                        <th style={{ width: '100%' }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                type="button"
                                onClick={ProductAdd}
                                style={{ fontSize: '0.8rem' }}
                            >
                                상품 추가하기
                            </Button>
                        </th>
                    </tr> */}
                    </tbody>
                </table>
            </BoxWrap>
            <Button
                variant="outlined"
                color="primary"
                type="button"
                onClick={ProductAdd}
                style={{ fontSize: '0.8rem', float: 'right' }}
            >
                상품 추가하기
            </Button>
        </>
    );
};

export default Box;
