import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CountryCostComponent = () => {
    const { list } = useSelector(state => state.part.country);
    const [selectedValue, setSelectedValue] = useState();

    return (
        <select>
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
