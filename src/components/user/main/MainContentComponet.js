import { CalculatorContainer } from 'containers';
import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import { MainWrap } from 'styles/MainPageStyles';
import MainBanner from './MainBanner';
import Tracking from './Tracking';

const MainContentComponent = () => {
    return (
        <Responsive>
            <MainWrap>
                <MainBanner />
                <Tracking />
                <CalculatorContainer />
            </MainWrap>
        </Responsive>
    );
};

export default MainContentComponent;
