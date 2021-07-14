import { CalculatorContainer } from 'containers';
import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import { MainWrap } from 'styles/MainPageStyles';
import EventPopup from './EventPopup';
import MainBanner from './MainBanner';
import Tracking from './Tracking';

const MainContentComponent = ({ eventPopup }) => {
    return (
        <>
            {eventPopup.map((event, index) => (
                <EventPopup key={index} event={event} index={index} />
            ))}
            <Responsive>
                <MainWrap>
                    <MainBanner />
                    <CalculatorContainer />
                    {/* <Tracking /> */}
                </MainWrap>
            </Responsive>
        </>
    );
};

export default MainContentComponent;
