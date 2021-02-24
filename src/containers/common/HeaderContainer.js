import React, { useEffect, useState } from 'react';
import { HeaderComponent } from 'components';
import { useDispatch } from 'react-redux';
import { clearStoreAction, logoutAction } from 'store/auth';

const HeaderContainer = () => {
    const [loginPopup, setLoginPopup] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const auth = localStorage.getItem('accessToken');
    const dispatch = useDispatch();

    // 로그인 팝업 처리.
    const handleLoginPopup = e => {
        setLoginPopup(e);
    };
    // 팝업 종료시 로그인 정보 삭제.
    useEffect(() => {
        if (!loginPopup) {
            dispatch(clearStoreAction());
        }
    }, [loginPopup]);
    const handleLogout = () => {
        dispatch(logoutAction());
        setAnchorEl(null);
    };
    const handleMenuClick = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <HeaderComponent
            HandleLoginPopup={e => handleLoginPopup(e)}
            LoginPopup={loginPopup}
            Auth={auth}
            AnchorEl={anchorEl}
            HandleMenuClick={handleMenuClick}
            HandleMenuClose={handleMenuClose}
            HandleLogout={handleLogout}
        />
    );
};

export default HeaderContainer;
