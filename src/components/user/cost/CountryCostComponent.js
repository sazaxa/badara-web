import React, { useState } from 'react';
import { CalculatorWrap as CountryWrap } from 'styles/CalculatorStyles';
import { CostTable } from 'styles/CostStyles';
const CountryCostComponent = ({ list, onHandleSelectCountry, countryPrise, selected, weight, handleMoreBtn }) => {
    return (
        <CountryWrap>
            <article className="title_wrap">
                <h2>운임표</h2>
                <span>나라별 배송 비용을 알수 있습니다.</span>
            </article>
            <p className="VAT">
                (“BADARA”는 “회원”과 “배송사”의 배송대행업무입니다. <br />
                부가세는 10%가 별도로 발생됩니다.)
            </p>
            <span className="countryTitle">나라선택</span>
            <select onChange={e => onHandleSelectCountry(e)} value={selected}>
                <option value="">나라선택</option>
                {list.map((country, index) => {
                    return (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    );
                })}
            </select>
            <CostTable>
                <thead>
                    {countryPrise ? (
                        <tr>
                            <th>무게</th>
                            <th>가격</th>
                        </tr>
                    ) : null}
                </thead>
                <tbody>
                    {countryPrise?.map(price => {
                        const Calculated = price.price;
                        if (price.weight < weight)
                            return (
                                <tr key={price.id}>
                                    <td>{price.weight + 'kg'}</td>
                                    <td>
                                        <strong>{Math.floor(parseInt(Calculated)).toLocaleString()}</strong> 원
                                    </td>
                                </tr>
                            );
                    })}
                </tbody>
            </CostTable>
            {weight !== 35 ? (
                <div className="moreBtn">
                    <button type="button" onClick={() => handleMoreBtn()}>
                        더 보기
                    </button>
                </div>
            ) : null}
        </CountryWrap>
    );
};

export default CountryCostComponent;
