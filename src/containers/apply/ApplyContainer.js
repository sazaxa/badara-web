import ApplyComponent from 'components/apply/ApplyComponent';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { applyListAction, predictionPrimeAction } from 'store/order';
import { Courier } from './courier';

const ApplyContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { list, predictionPrime } = useSelector(state => ({
        list: state.order.countryLists.list,
        predictionPrime: state.order.predictionPrime,
    }));
    const [visible, setVisible] = useState(false);
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
        userMemo: '',
        expectedPrice: '',
    });
    console.log(material);

    useEffect(() => {
        if (predictionPrime !== null) {
            setMaterial({
                ...material,
                expectedPrice: predictionPrime,
            });
            console.log(material);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [predictionPrime]);

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
    // 모달 관련
    const handleConfirmModal = () => {
        if (material.recipientName === '') {
            alert('받는분 성함을 입력하세요.');
            return;
        } else if (material.recipientPhoneNumber === '') {
            alert('휴대폰 번호를 입력하세요.');
            return;
        } else if (material.recipientAddress === '') {
            alert('보내는 주소를 입력하세요.');
            return;
        } else if (material.productName === '') {
            alert('상품명을 입력하세요.');
            return;
        } else if (material.country === '') {
            alert('보내는 국가를 선택해주세요.');
            return;
        } else if (material.volumeWeight === '' && material.netWeight === '') {
            alert('부피무게, 실무게 중 하나를 입력하세요.');
            return;
        }
        setVisible(true);
        if (material.volumeWeight > material.netWeight) {
            dispatch(predictionPrimeAction({ country: material.country, weight: material.volumeWeight }));
        } else if (material.volumeWeight < material.netWeight) {
            dispatch(predictionPrimeAction({ country: material.country, weight: material.netWeight }));
        }
    };
    const handleCancel = () => {
        setVisible(false);
    };
    const handleAddConfirm = () => {
        setVisible(false);
        dispatch(applyListAction(material));
        setMaterial({
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
            userMemo: '',
            expectedPrice: '',
        });
    };
    const handleConfirm = () => {
        dispatch(applyListAction(material));
        history.push('/apply/list');
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
            Material={material}
            VolumeWeight={material.volumeWeight}
            HandleClickApply={handleClickApply}
            Visible={visible}
            HandleConfirmModal={handleConfirmModal}
            HandleConfirm={handleConfirm}
            HandleCancel={handleCancel}
            HandleAddConfirm={handleAddConfirm}
        />
    );
};

export default withRouter(ApplyContainer);
