import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { LoginPopupContainer } from 'containers';
import { HeaderWrap, HeaderContent } from 'styles/CommonStyles';

const HeaderComponent = ({
    HandleLoginPopup,
    LoginPopup,
    Auth,
    AnchorEl,
    HandleMenuClick,
    HandleMenuClose,
    HandleLogout,
    loggedUser,
}) => {
    if (!loggedUser) return null;
    return (
        <>
            {LoginPopup === true && <LoginPopupContainer close={() => HandleLoginPopup(false)} />}
            <HeaderWrap>
                <HeaderContent>
                    <h2>
                        <Link to="/">SHIPMENT</Link>
                    </h2>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/guide">이용안내</Link>
                            </li>
                            <li>
                                <Link to="/cost">비용안내</Link>
                            </li>
                            <li>
                                <Link to="/apply">배송대행</Link>
                            </li>
                            <li>
                                <Link to="/support">고객센터</Link>
                            </li>
                        </ul>
                    </nav>
                    {Auth ? (
                        <>
                            <AccountCircleIcon onClick={HandleMenuClick} />
                            <p className="username">
                                <strong>{loggedUser.name}</strong> 님
                            </p>
                            <Menu
                                id="simple-menu"
                                anchorEl={AnchorEl}
                                keepMounted
                                open={Boolean(AnchorEl)}
                                onClose={HandleMenuClose}
                            >
                                <MenuItem onClick={HandleMenuClose}>
                                    <Link to="/mypage">마이페이지</Link>
                                </MenuItem>
                                <MenuItem onClick={HandleLogout}>로그아웃</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Button variant="contained" color="primary" onClick={() => HandleLoginPopup(true)}>
                            로그인
                        </Button>
                    )}
                </HeaderContent>
            </HeaderWrap>
        </>
    );
};
export default HeaderComponent;
