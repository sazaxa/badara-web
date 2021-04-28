import React from 'react';
import { Link } from 'react-router-dom';
import { MainBannerWrap } from 'styles/MainPageStyles';

const MainBanner = () => {
    return (
        <MainBannerWrap>
            <p>
                복잡한 해외배송 <br />
                Badara 와 함께 <br />
                쉽고 간편하게 이용해 보세요
            </p>
            <div className="BannerBtn">
                <Link to="/apply">신청하기</Link>
            </div>
        </MainBannerWrap>
    );
};

export default MainBanner;
