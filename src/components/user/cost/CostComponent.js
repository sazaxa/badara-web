import { CalculatorContainer } from 'containers';
import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import { CostWrap } from 'styles/CostStyles';
import CountryCostComponent from './CountryCostComponent';

const CostComponent = ({ list, countryPrise, onHandleSelectCountry }) => {
    return (
        <Responsive>
            <CostWrap>
                <CalculatorContainer />
                <CountryCostComponent
                    list={list}
                    countryPrise={countryPrise}
                    onHandleSelectCountry={onHandleSelectCountry}
                />
            </CostWrap>
        </Responsive>
    );
};

export default CostComponent;
