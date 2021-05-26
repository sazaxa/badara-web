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
    const [weight, setWeight] = useState(10.5);

    const handleMoreBtn = () => {
        setWeight(35);
    };

    const onHandleSelectCountry = e => {
        setSelectedValue(e.target.value);
    };
    useEffect(() => {
        if (selectedValue) {
            setWeight(10.5);
            dispatch(countryPriseAction({ country: selectedValue }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedValue]);

    return (
        <CostComponent
            list={list}
            countryPrise={countryPrise}
            onHandleSelectCountry={onHandleSelectCountry}
            selected={selectedValue}
            weight={weight}
            handleMoreBtn={handleMoreBtn}
        />
    );
};

export default CostContainer;
