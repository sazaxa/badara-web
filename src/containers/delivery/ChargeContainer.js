import { ChargeComponent } from 'components';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadDeliveryAction } from 'store/delivery';

const ChargeContainer = () => {
    const uploadInput = useRef();
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.delivery.chargeUpload);
    const [uploadFile, setUploadFile] = useState(null);
    useEffect(() => {
        if (status === 'success') {
            alert('업로드 성공!');
            // 파일 선택값 초기화
            uploadInput.current.value = '';
            setUploadFile(null);
        }
    }, [status]);
    const onSubmit = e => {
        // 브라우저 기본값 초기화
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', uploadFile);
        dispatch(uploadDeliveryAction(formData));
    };
    const handleUpload = e => {
        setUploadFile(e.target.files[0]);
    };
    return <ChargeComponent OnSubmit={onSubmit} OnChange={e => handleUpload(e)} InputRef={uploadInput} />;
};

export default ChargeContainer;
