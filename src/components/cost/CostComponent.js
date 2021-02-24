import { CalculatorContainer } from 'containers';
import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import CountryCostComponent from './CountryCostComponent';

const CostComponent = () => {
    return (
        <Responsive>
            <CalculatorContainer />
            <CountryCostComponent />
        </Responsive>
    );
};

export default CostComponent;
