import ApplyComponent from 'components/apply/ApplyComponent';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyListAction } from 'store/order';
import { Courier } from './courier';

const ApplyContainer = () => {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.order.countryLists);
    const [material, setMaterial] = useState({
        recipientName: '',
        recipientPhoneNumber: '',
        recipientAddress: '',
        koreanInvoice: '',
        koreanShippingCompany: '',
        productName: '',
        width: '',
        depth: '',
        height: '',
        volumeWeight: '',
        netWeight: '',
        country: '',
        memo: '',
    });
    console.log(material);

    // 부피계산.
    const onClickVolume = () => {
        const { width, depth, height } = material;
        if ((width, depth, height !== '')) {
            const sum = (width * depth * height) / 5000;
            setMaterial({
                ...material,
                volumeWeight: sum,
            });
        } else {
            alert('가로,세로,높이 값을 모두 입력하세요.');
        }
    };
    const handleChange = e => {
        const { name, value } = e.target;
        setMaterial({
            ...material,
            [name]: value,
        });
    };

    const handleClickApply = () => {
        dispatch(applyListAction(material));
    };
    return (
        <ApplyComponent
            HandleChange={e => handleChange(e)}
            CountryLists={list}
            Courier={Courier}
            OnClickVolume={onClickVolume}
            VolumeWeight={material.volumeWeight}
            HandleClickApply={handleClickApply}
        />
    );
};

export default ApplyContainer;
