import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { boxDataUpdateAction } from 'store/apply';

const Invoise = ({ index, box }) => {
    const [boxData, setBoxData] = useState(box);
    const dispatch = useDispatch();
    console.log(boxData);
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
                type="text"
                name="koreanInvoice"
                value={box.koreanInvoice}
                placeholder="운송장 번호"
                onChange={e => handleChange(e)}
                required
            />
            <input
                type="text"
                name="koreanShippingCompany"
                value={box.koreanShippingCompany}
                placeholder="배송사"
                onChange={e => handleChange(e)}
                required
            />
        </article>
    );
};

export default Invoise;
