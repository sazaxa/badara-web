import { ChargeComponent } from 'components';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadCountryCodeAction, uploadDeliveryAction, uploadOrderAction } from 'store/part';

const ChargeContainer = () => {
    const dispatch = useDispatch();

    const priceInput = useRef();
    const codeInput = useRef();
    const orderInput = useRef();

    const { status } = useSelector(state => state.part.insert);
    const codeInsert = useSelector(state => state.part.codeInsert);
    const orderInsert = useSelector(state => state.part.orderInsert);

    const [priceFile, setPriceFile] = useState(null);
    const [codeFile, setCodeFile] = useState(null);
    const [orderFile, setOrderFile] = useState(null);

    // status success 될때 마다 렌더링.
    useEffect(() => {
        if (status === 'success') {
            alert('업로드 성공!');
            // 파일 선택값 초기화
            priceInput.current.value = '';
            setPriceFile(null);
        }
        if (codeInsert.status === 'success') {
            alert('업로드 성공!');
            // 파일 선택값 초기화
            priceInput.current.value = '';
            setPriceFile(null);
        }
        if (orderInsert.status === 'success') {
            alert('업로드 성공!');
            // 파일 선택값 초기화
            orderInput.current.value = '';
            setOrderFile(null);
        }
    }, [status, codeInsert.status, orderInsert.status]);

    // 배송비 등록 전송처리.
    const onPriceSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', priceFile);
        dispatch(uploadDeliveryAction({ data: formData }));
    };

    // 업로드 파일 핸들링.
    const handlePriceUpload = e => {
        setPriceFile(e.target.files[0]);
    };

    // 나라코드 전송처리.
    const onCodeSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', codeFile);
        dispatch(uploadCountryCodeAction({ data: formData }));
    };

    // 업로드 파일 핸들링.
    const handleCodeUpload = e => {
        setCodeFile(e.target.files[0]);
    };

    // 주문 전송처리.
    const onOrderSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', orderFile);
        dispatch(uploadOrderAction({ data: formData }));
    };

    // 업로드 파일 핸들링.
    const handleOrderUpload = e => {
        setOrderFile(e.target.files[0]);
    };

    return (
        <ChargeComponent
            priceInput={priceInput}
            onPriceSubmit={onPriceSubmit}
            handlePriceUpload={handlePriceUpload}
            codeInput={codeInput}
            onCodeSubmit={onCodeSubmit}
            handleCodeUpload={handleCodeUpload}
            orderInput={orderInput}
            onOrderSubmit={onOrderSubmit}
            handleOrderUpload={handleOrderUpload}
        />
    );
};

export default ChargeContainer;
