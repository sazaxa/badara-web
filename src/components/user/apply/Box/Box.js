import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { boxDataUpdateAction } from 'store/apply';
import Button from '@material-ui/core/Button';
import { BoxWrap } from 'styles/ApplyStyles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const Box = ({ box, index, Remove }) => {
    // 받은 data를 수정하기 위해 state에 담는다.
    const [updateBoxData, setUpdateBoxData] = useState(box);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        setUpdateBoxData({
            ...updateBoxData,
            [name]: value,
        });
        if (name === 'type' && value !== 'basic') {
            setUpdateBoxData({
                ...updateBoxData,
                type: value,
                expectedWidth: 1,
                expectedDepth: 1,
                expectedHeight: 1,
                expectedVolumeWeight: 1,
            });
        } else if (name === 'type' && value === 'basic') {
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

    return (
        <BoxWrap>
            <article className="titleBox">
                <h2>{index + 1}번 박스 정보</h2>
                <p>
                    센터에 보내시는 <strong>박스의 수량만큼</strong> 박스를 추가해주세요.
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
                                onChange={e => handleChange(e)}
                                className="RadioGroup"
                            >
                                <FormControlLabel value="basic" control={<Radio />} label="박스" />
                                <FormControlLabel value="forwarding" control={<Radio />} label="배대지" />
                                <FormControlLabel value="plasticBag" control={<Radio />} label="비닐봉투" />
                                <FormControlLabel value="donno" control={<Radio />} label="몰라요" />
                            </RadioGroup>
                        </td>
                    </tr>
                    {updateBoxData.type === 'basic' ? (
                        <>
                            <tr>
                                <th>부피무게 계산(단위:cm)</th>
                                <td>
                                    <input
                                        type="number"
                                        name="expectedWidth"
                                        value={updateBoxData.expectedWidth ?? undefined}
                                        onChange={e => handleChange(e)}
                                        required
                                        placeholder="가로"
                                        style={{ width: '20%' }}
                                    />
                                    <input
                                        type="number"
                                        name="expectedDepth"
                                        value={updateBoxData.expectedDepth ?? undefined}
                                        onChange={e => handleChange(e)}
                                        required
                                        placeholder="세로"
                                        style={{ width: '20%' }}
                                    />
                                    <input
                                        type="number"
                                        name="expectedHeight"
                                        value={updateBoxData.expectedHeight ?? undefined}
                                        onChange={e => handleChange(e)}
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
                                        onChange={e => handleChange(e)}
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
                                onChange={e => handleChange(e)}
                                placeholder="박스의 무게를 숫자만 입력해주세요."
                                step="0.01"
                                required
                            />
                            <span style={{ marginLeft: '10px' }}>kg</span>
                        </td>
                    </tr>
                    <tr>
                        <th>어떠한 물건이 있나요?</th>
                        <td className="weight">
                            <input
                                type="text"
                                name="userMemo"
                                value={updateBoxData.userMemo ?? undefined}
                                onChange={e => handleChange(e)}
                                placeholder="박스안 어떠한 상품이 들어있나요?"
                                required
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </BoxWrap>
    );
};

export default Box;
