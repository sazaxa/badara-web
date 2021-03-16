import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countryPriseAction } from 'store/part';

const CountryCostComponent = () => {
    const dispatch = useDispatch();
    const { list, countryPrise } = useSelector(state => ({
        list: state.part.country.list,
        countryPrise: state.part.countryPrise,
    }));
    const [selectedValue, setSelectedValue] = useState();

    const onHandleSelectCountry = e => {
        setSelectedValue(e.target.value);
    };
    useEffect(() => {
        if (selectedValue) {
            dispatch(countryPriseAction({ country: selectedValue }));
        }
    }, [selectedValue]);
    return (
        <>
            <select onChange={e => onHandleSelectCountry(e)}>
                <option value="">나라선택</option>
                {list.map((country, index) => {
                    return (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    );
                })}
            </select>
            <table>
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
                            <td>{prise.weight}</td>
                            <td>{prise.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CountryCostComponent;
