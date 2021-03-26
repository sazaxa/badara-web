import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { boxDataUpdateAction } from 'store/apply';
import { Courier } from 'containers/user/apply/courier';

const Invoise = ({ index, box }) => {
    const [boxData, setBoxData] = useState(box);
    const dispatch = useDispatch();
    const handleChange = e => {
        const { name, value } = e.target;
        setBoxData({
            ...boxData,
            [name]: value,
        });
    };

    useEffect(() => {
        dispatch(boxDataUpdateAction({ index: index, updateData: boxData }));
    }, [boxData]);
    return (
        <article className="shippingWrap">
            <h4>{index + 1}번째 박스</h4>
            <input
                type="number"
                name="koreanInvoice"
                value={box.koreanInvoice}
                placeholder="운송장 번호"
                onChange={e => handleChange(e)}
                required
            />
            {/* <input
                type="text"
                name="koreanShippingCompany"
                value={box.koreanShippingCompany}
                placeholder="배송사"
                onChange={e => handleChange(e)}
                required
            /> */}
            <select name="koreanShippingCompany" onChange={e => handleChange(e)}>
                <option value="">택배사 선택</option>
                {Courier.map((e, index) => {
                    return (
                        <option value={e} key={index}>
                            {e}
                        </option>
                    );
                })}
            </select>
        </article>
    );
};

export default Invoise;
