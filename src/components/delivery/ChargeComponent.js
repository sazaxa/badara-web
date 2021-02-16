import React from 'react';
import { ChargeWrap } from '../../styles/DeliveryStyle';
const ChargeComponent = ({ OnSubmit, OnChange, InputRef }) => {
    return (
        <ChargeWrap>
            <form encType="multipart/form-data" name="file" onSubmit={OnSubmit}>
                <input type="file" onChange={OnChange} ref={InputRef} accept=".xlsx" />
                <button type="submit">전송</button>
            </form>
        </ChargeWrap>
    );
};

export default ChargeComponent;
