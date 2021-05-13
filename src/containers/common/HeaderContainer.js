/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { HeaderComponent } from 'components';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearStoreAction, loginPopupAction } from 'store/auth';
import { logoutAction } from 'store/member';
import { useLocation } from 'react-router';

const HeaderContainer = () => {
    // const [loginPopup, setLoginPopup] = useState(false);
    const [toggleState, setToggleState] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    // const { logged } = useSelector(state => state.member.loggedInfo);
    const { logged, popup: loginPopup } = useSelector(
        state => ({
            logged: state.member.loggedInfo.logged,
            popup: state.auth.popup,
        }),
        shallowEqual
    );
    const member = localStorage.getItem('accessToken');
    const { pathname } = useLocation();
    console.log(logged);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    // 로그인 팝업 처리.
    const handleLoginPopup = boolean => {
        dispatch(loginPopupAction(boolean));
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

    const handletoggleMoblieMenu = () => {
        setToggleState(!toggleState);
    };
    return (
        <HeaderComponent
            HandleLoginPopup={handleLoginPopup}
            LoginPopup={loginPopup}
            Auth={member}
            loggedUser={logged}
            AnchorEl={anchorEl}
            HandleMenuClick={handleMenuClick}
            HandleMenuClose={handleMenuClose}
            HandleLogout={handleLogout}
            HandletoggleMoblieMenu={handletoggleMoblieMenu}
            ToggleState={toggleState}
        />
    );
};

export default HeaderContainer;
