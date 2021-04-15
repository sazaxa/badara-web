import { CostComponent } from 'components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countryPriseAction } from 'store/part';

const CostContainer = () => {
    const dispatch = useDispatch();
    const { list, countryPrise } = useSelector(state => ({
        list: state.part.country.list,
        countryPrise: state.part.countryPrise,
    }));
    const [selectedValue, setSelectedValue] = useState('USA');

    const onHandleSelectCountry = e => {
        setSelectedValue(e.target.value);
    };
    useEffect(() => {
        if (selectedValue) {
            dispatch(countryPriseAction({ country: selectedValue }));
        }
    }, [selectedValue]);

    return <CostComponent list={list} countryPrise={countryPrise} onHandleSelectCountry={onHandleSelectCountry} />;
};

export default CostContainer;
