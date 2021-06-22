import React from 'react';
import { ChargeWrap } from '../../../styles/DeliveryStyle';
const ChargeComponent = ({
    priceInput,
    onPriceSubmit,
    handlePriceUpload,
    codeInput,
    onCodeSubmit,
    handleCodeUpload,
    orderInput,
    onOrderSubmit,
    handleOrderUpload,
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
            <div className="price">
                <h2>주문 등록</h2>
                <form encType="multipart/form-data" name="file" onSubmit={onOrderSubmit}>
                    <input type="file" onChange={e => handleOrderUpload(e)} ref={orderInput} accept=".xlsx" />
                    <button type="submit">전송</button>
                </form>
            </div>
        </ChargeWrap>
    );
};

export default ChargeComponent;
