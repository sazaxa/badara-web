import { CalculatorContainer } from 'containers/index';
import React from 'react';
import { Responsive } from 'styles/CommonStyles';

const MainContentComponent = () => {
    return (
        <Responsive>
            <CalculatorContainer />
        </Responsive>
    );
};

export default MainContentComponent;
