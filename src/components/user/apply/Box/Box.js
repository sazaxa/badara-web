import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { boxDataUpdateAction } from 'store/apply';

const Product = ({ box, index, Remove }) => {
    const [updateBoxData, setUpdateBoxData] = useState(box);
    const dispatch = useDispatch();
    console.log(updateBoxData);
    const handleChange = e => {
        const { name, value } = e.target;
        setUpdateBoxData({
            ...updateBoxData,
            [name]: value,
        });
    };

    useEffect(() => {
        dispatch(boxDataUpdateAction({ index: index, updateData: updateBoxData }));
        console.log(updateBoxData);
    }, [boxDataUpdateAction]);

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
                        <th>부피무게</th>
                        <td>
                            <input
                                type="number"
                                name="expectedVolumeWeight"
                                value={updateBoxData.expectedVolumeWeight ?? undefined}
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
                    <tr>
                        <th>예상가격</th>
                        <td>
                            <input
                                type="number"
                                name="expectedPrice"
                                value={updateBoxData.expectedPrice ?? undefined}
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

export default Product;
