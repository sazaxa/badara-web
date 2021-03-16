import { CalculatorContainer } from 'containers';
import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import { CostWrap } from 'styles/CostStyles';
import CountryCostComponent from './CountryCostComponent';

const CostComponent = () => {
    return (
        <Responsive>
            <CostWrap>
                <CalculatorContainer />
                <CountryCostComponent />
            </CostWrap>
        </Responsive>
    );
};

export default CostComponent;
