import { CalculatorContainer } from 'containers';
import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import { MainWrap } from 'styles/MainPageStyles';
import MainBanner from './MainBanner';

const MainContentComponent = () => {
    return (
        <Responsive>
            <MainWrap>
                <MainBanner />
                <CalculatorContainer />
            </MainWrap>
        </Responsive>
    );
};

export default MainContentComponent;
