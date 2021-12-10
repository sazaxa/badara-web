import { MainContentComponent } from 'components';
import React from 'react';
import { useState } from 'react';

export const popUps = [
    {
        name: 'badara_blog_shipping',
        img: 'https://image.badara.kr/popup/badara_blog_shipping.jpg',
        link: 'https://blog.naver.com/click_black/222416578433',
    },
    {
        name: 'plusFriendOrder',
        img: 'https://image.badara.kr/popup/plusfriendorder.jpg',
        link: 'https://pf.kakao.com/_FRxads',
    },
];

const MainContentContainer = () => {
    // admin에서 추가할 일이 생기면 useState그대로 복사해서 사용하세요.
    const [eventPopup, setEventPopup] = useState([popUps[0], popUps[1]]);
    return <MainContentComponent eventPopup={eventPopup} />;
};

export default MainContentContainer;
