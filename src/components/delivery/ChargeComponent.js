import Responsive from 'components/common/Responsive';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadDeliveryAction } from 'store/delivery';
import styled from 'styled-components';

const ChargeWrap = styled(Responsive)`
    padding-top: 50px;
    position: reletive;
    form {
        position: absolute;
        top: 50%;
        left: 50%;
        transfrom: translate(-50%, -50%);
    }
`;

const ChargeComponent = () => {
    const uploadInput = useRef();
    const dispatch = useDispatch();
    const [uploadFile, setUploadFile] = useState({
        selectedFile: null,
    });
    useEffect(() => {
        console.log({ state: uploadFile.selectedFile });
    }, [uploadFile]);
    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', uploadFile.selectedFile);
        console.log(formData);
        dispatch(uploadDeliveryAction({ formData }));
    };
    const handleUpload = e => {
        setUploadFile({ selectedFile: e.target.files[0] });
    };
    return (
        <ChargeWrap>
            <form encType="multipart/form-data" name="file" onSubmit={onSubmit}>
                <input type="file" onChange={handleUpload} ref={uploadInput} />
                <button type="submit">전송</button>
            </form>
        </ChargeWrap>
    );
};

export default ChargeComponent;
