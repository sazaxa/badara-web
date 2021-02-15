import React, { useState } from 'react';
import { HeaderComponent } from 'components';

const HeaderContainer = () => {
    const [loginPopup, setLoginPopup] = useState(false);

    // 로그인 팝업 처리.
    const handleLoginPopup = e => {
        setLoginPopup(e);
        console.log(loginPopup);
    };
    return <HeaderComponent HandleLoginPopup={e => handleLoginPopup(e)} LoginPopup={loginPopup} />;
};

export default HeaderContainer;
