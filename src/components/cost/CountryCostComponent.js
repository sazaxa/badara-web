import React from 'react';
import { CalculatorWrap as CountryWrap } from 'styles/CalculatorStyles';
import { CostTable } from 'styles/CostStyles';
const CountryCostComponent = ({ list, onHandleSelectCountry, countryPrise }) => {
    return (
        <CountryWrap>
            <article className="title_wrap">
                <h2>비용 안내</h2>
                <span>나라별 배송 비용을 알수 있습니다.</span>
            </article>
            <span className="countryTitle">나라선택</span>
            <select onChange={e => onHandleSelectCountry(e)}>
                <option value="">나라 선택</option>
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
                    {countryPrise?.map(prise => (
                        <tr key={prise.id}>
                            <td>{prise.weight + 'g'}</td>
                            <td>{prise.price + '$'}</td>
                        </tr>
                    ))}
                </tbody>
            </CostTable>
        </CountryWrap>
    );
};

export default CountryCostComponent;
