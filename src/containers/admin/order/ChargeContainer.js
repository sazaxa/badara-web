import { ChargeComponent } from 'components';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadCountryCodeAction, uploadDeliveryAction } from 'store/part';

const ChargeContainer = () => {
    const priceInput = useRef();
    const codeInput = useRef();
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.part.insert);
    const codeInsert = useSelector(state => state.part.codeInsert);
    const [priceFile, setPriceFile] = useState(null);
    const [codeFile, setCodeFile] = useState(null);

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
    }, [status, codeInsert.status]);

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
    return (
        <ChargeComponent
            onPriceSubmit={onPriceSubmit}
            handlePriceUpload={handlePriceUpload}
            priceInput={priceInput}
            codeInput={codeInput}
            onCodeSubmit={onCodeSubmit}
            handleCodeUpload={handleCodeUpload}
        />
    );
};

export default ChargeContainer;
