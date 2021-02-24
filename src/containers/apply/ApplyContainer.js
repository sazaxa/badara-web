/* eslint-disable react-hooks/exhaustive-deps */
import ApplyComponent from 'components/apply/ApplyComponent';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { applyListAction, applyPriseAction, clearPredictionPriseAction, initialState } from 'store/apply';
import { Courier } from './courier';

const ApplyContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { list, prise } = useSelector(state => ({
        list: state.part.country.list,
        prise: state.apply.prise,
    }));
    const [visible, setVisible] = useState(false);
    const [material, setMaterial] = useState({
        recipientName: '',
        recipientPhoneNumber: '',
        recipientAddress: '',
        koreanInvoice: '',
        koreanShippingCompany: '',
        country: '',
        userMemo: '',
        addProduct: false,
        productName: '',
        width: '',
        depth: '',
        height: '',
        volumeWeight: '',
        netWeight: '',
        expectedPrice: null,
    });
    useEffect(() => {
        setVisible(false);
        if (prise !== null) {
            dispatch(clearPredictionPriseAction());
        }
    }, []);

    useEffect(() => {
        if (prise !== null) {
            setMaterial({
                ...material,
                expectedPrice: prise,
            });
        }
        const checkPrisePopup = checkData => {
            if (initialState.prise !== checkData) {
                setVisible(true);
                console.log(checkData);
            }
        };
        checkPrisePopup(prise);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prise]);

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
        console.log(name, value);
        setMaterial({
            ...material,
            [name]: value,
        });
    };

    // console.log(material);
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
        if (material.volumeWeight > material.netWeight) {
            dispatch(
                applyPriseAction({
                    country: material.country,
                    weight: material.volumeWeight,
                })
            );
        } else if (material.volumeWeight < material.netWeight) {
            dispatch(
                applyPriseAction({
                    country: material.country,
                    weight: material.netWeight,
                })
            );
        }
    };
    const handleCancel = () => {
        setVisible(false);
        dispatch(clearPredictionPriseAction());
    };
    const handleAddConfirm = () => {
        setVisible(false);
        console.log(material);
        dispatch(applyListAction(material));
        setMaterial({
            recipientName: material.recipientName,
            recipientPhoneNumber: material.recipientPhoneNumber,
            recipientAddress: material.recipientAddress,
            koreanInvoice: '',
            koreanShippingCompany: '',
            country: material.country,
            userMemo: '',
            addProduct: true,
            productName: '',
            width: '',
            depth: '',
            height: '',
            volumeWeight: '',
            netWeight: '',
            expectedPrice: '',
        });
        dispatch(clearPredictionPriseAction());
    };
    const handleConfirm = () => {
        dispatch(applyListAction(material));
        dispatch(clearPredictionPriseAction());
        history.push('/apply/list');
    };

    return (
        <ApplyComponent
            HandleChange={e => handleChange(e)}
            CountryLists={list}
            Courier={Courier}
            OnClickVolume={onClickVolume}
            Material={material}
            VolumeWeight={material.volumeWeight}
            Visible={visible}
            HandleConfirmModal={handleConfirmModal}
            HandleConfirm={handleConfirm}
            HandleCancel={handleCancel}
            HandleAddConfirm={handleAddConfirm}
        />
    );
};

export default withRouter(ApplyContainer);
