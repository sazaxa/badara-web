import { MainContentComponent } from 'components';
import React from 'react';
import { useState } from 'react';

const MainContentContainer = () => {
    // admin에서 추가할 일이 생기면 useState그대로 복사해서 사용하세요.
    const [eventPopup, setEventPopup] = useState([
        // {
        //     name: 'kakaoEvent',
        //     img: 'https://image.badara.kr/popup/badara_1.jpg',
        // },
        {
            name: 'badara_blog_shipping',
            img: 'https://image.badara.kr/popup/badara_blog_shipping.jpg',
        },
        // {
        //     name: '7monthEvent',
        //     img: 'https://image.badara.kr/popup/7month_event.jpg',
        // },
    ]);
    return <MainContentComponent eventPopup={eventPopup} />;
};

export default MainContentContainer;
