import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { boxDataUpdateAction } from 'store/apply';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const BoxWrap = styled.article`
    width: 100%;
    margin-bottom: 30px;
    .titleBox {
        width: 100%;
        border-bottom: 4px solid #0080ff;
        display: flex;
        align-items: center;
        padding-bottom: 15px;
        box-sizing: border-box;
        & > h2 {
            letter-spacing: -2.5px;
            font-size: 32px;
            margin-right: 10px;
        }
        & > button {
            height: 40px;
        }
    }
    input,
    select {
        width: 100%;
        border: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
    }
    table {
        width: 100%;
        & > tbody > tr {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #ccc;
            padding: 15px 0;
        }
        & > tbody > tr > th {
            width: 30%;
        }
        & > tbody > tr > td {
            width: 70%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        & > tbody > tr > td > input {
            width: 100%;
        }
    }
`;

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
        const { expectedWidth, expectedDepth, expectedHeight } = updateBoxData;
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
                <h2>박스정보 {index + 1}</h2>
                {index !== 0 ? (
                    <Button variant="contained" color="secondary" onClick={() => Remove()}>
                        삭제
                    </Button>
                ) : null}
            </article>
            <table>
                <tbody>
                    <tr>
                        <th>부피무계 계산(단위:cm)</th>
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
                                color="primary"
                                type="button"
                                onClick={onClickVolume}
                                style={{ width: '20%' }}
                            >
                                부피무게 계산하기
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <th>부피무게(단위:kg)</th>
                        <td>
                            <input
                                type="number"
                                name="expectedVolumeWeight"
                                value={updateBoxData.expectedVolumeWeight ?? undefined}
                                disabled
                                placeholder="계산하기 후 확인가능합니다."
                                onChange={e => handleChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>실 무게(단위:kg)</th>
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
        </BoxWrap>
    );
};

export default Box;
