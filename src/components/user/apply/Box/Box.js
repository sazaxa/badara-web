import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { boxDataUpdateAction } from 'store/apply';

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
    };

    // state가 변경 될때마다 redux state에 저장한다.
    useEffect(() => {
        dispatch(boxDataUpdateAction({ index: index, updateData: updateBoxData }));
    }, [updateBoxData]);

    // 가로 세로 높이 구해서 부피무게를 구하고 state에 저장한다.
    const onClickVolume = () => {
        const { expectedWitdh, expectedDepth, expectedHeight } = updateBoxData;
        if ((expectedWitdh, expectedDepth, expectedHeight !== null)) {
            const sum = (expectedWitdh * expectedDepth * expectedHeight) / 5000;
            setUpdateBoxData({
                ...updateBoxData,
                expectedVolumeWeight: sum,
            });
            console.log(sum);
        } else {
            alert('가로,세로,높이 값을 모두 입력하세요.');
        }
    };

    return (
        <>
            <h2>박스정보</h2>
            <table>
                <tbody>
                    <tr>
                        <th>가로</th>
                        <td>
                            <input
                                type="number"
                                name="expectedWitdh"
                                value={updateBoxData.expectedWitdh ?? undefined}
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>세로</th>
                        <td>
                            <input
                                type="number"
                                name="expectedDepth"
                                value={updateBoxData.expectedDepth ?? undefined}
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>높이</th>
                        <td>
                            <input
                                type="number"
                                name="expectedHeight"
                                value={updateBoxData.expectedHeight ?? undefined}
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" onClick={onClickVolume}>
                                부피무게 계산하기
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th>부피무게</th>
                        <td>
                            <input
                                type="number"
                                name="expectedVolumeWeight"
                                value={updateBoxData.expectedVolumeWeight ?? undefined}
                                disabled
                                placeholder="계산하기 후 확인가능합니다."
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>실 무게</th>
                        <td>
                            <input
                                type="number"
                                name="expectedNetWeight"
                                value={updateBoxData.expectedNetWeight ?? undefined}
                                onChange={e => handleChange(e)}
                                required
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            {index !== 0 ? <button onClick={() => Remove()}>삭제</button> : null}
        </>
    );
};

export default Box;
