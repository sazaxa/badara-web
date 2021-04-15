import { CalculatorContainer } from 'containers';
import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import { CostWrap } from 'styles/CostStyles';
import CountryCostComponent from './CountryCostComponent';

const CostComponent = ({ list, countryPrise, onHandleSelectCountry, selected }) => {
    return (
        <Responsive>
            <CostWrap>
                <CountryCostComponent
                    list={list}
                    countryPrise={countryPrise}
                    onHandleSelectCountry={onHandleSelectCountry}
                    selected={selected}
                />
                <CalculatorContainer />
            </CostWrap>
        </Responsive>
    );
};

export default CostComponent;
