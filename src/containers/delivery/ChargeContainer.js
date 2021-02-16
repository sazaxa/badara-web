import { ChargeComponent } from 'components';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadDeliveryAction } from 'store/delivery';

const ChargeContainer = () => {
    const uploadInput = useRef();
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.delivery.chargeUpload);
    const [uploadFile, setUploadFile] = useState(null);

    // status success 될때 마다 렌더링.
    useEffect(() => {
        if (status === 'success') {
            alert('업로드 성공!');
            // 파일 선택값 초기화
            uploadInput.current.value = '';
            setUploadFile(null);
        }
    }, [status]);

    // 배송비 등록 전송처리.
    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', uploadFile);
        dispatch(uploadDeliveryAction({ data: formData }));
    };

    // 업로드 파일 핸들링.
    const handleUpload = e => {
        setUploadFile(e.target.files[0]);
    };
    return <ChargeComponent OnSubmit={onSubmit} OnChange={e => handleUpload(e)} InputRef={uploadInput} />;
};

export default ChargeContainer;
