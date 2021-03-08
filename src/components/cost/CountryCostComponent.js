import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CountryCostComponent = () => {
    const { list } = useSelector(state => state.part.country);
    const [selectedValue, setSelectedValue] = useState();

    const onHandleSelectCountry = e => {
        setSelectedValue(e.target.value);
    };
    console.log(selectedValue);
    return (
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
    );
};

export default CountryCostComponent;
