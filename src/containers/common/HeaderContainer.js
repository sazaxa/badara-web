/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { HeaderComponent } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { clearStoreAction } from 'store/auth';
import { logoutAction } from 'store/member';
import { useLocation } from 'react-router';

const HeaderContainer = () => {
    const [loginPopup, setLoginPopup] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const { logged } = useSelector(state => state.member.loggedInfo);
    const member = localStorage.getItem('accessToken');
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
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
            Auth={member}
            loggedUser={logged}
            AnchorEl={anchorEl}
            HandleMenuClick={handleMenuClick}
            HandleMenuClose={handleMenuClose}
            HandleLogout={handleLogout}
        />
    );
};

export default HeaderContainer;
