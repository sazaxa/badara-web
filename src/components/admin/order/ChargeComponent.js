import React from 'react';
import { ChargeWrap } from '../../../styles/DeliveryStyle';
const ChargeComponent = ({
    onPriceSubmit,
    handlePriceUpload,
    priceInput,
    codeInput,
    onCodeSubmit,
    handleCodeUpload,
}) => {
    return (
        <ChargeWrap>
            <div className="price">
                <h2>배송비 등록</h2>
                <form encType="multipart/form-data" name="file" onSubmit={onPriceSubmit}>
                    <input type="file" onChange={e => handlePriceUpload(e)} ref={priceInput} accept=".xlsx" />
                    <button type="submit">전송</button>
                </form>
            </div>
            <div className="price">
                <h2>나라 코드 등록</h2>
                <form encType="multipart/form-data" name="file" onSubmit={onCodeSubmit}>
                    <input type="file" onChange={e => handleCodeUpload(e)} ref={codeInput} accept=".xlsx" />
                    <button type="submit">전송</button>
                </form>
            </div>
        </ChargeWrap>
    );
};

export default ChargeComponent;
