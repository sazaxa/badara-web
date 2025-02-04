import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { LoginPopupContainer } from 'containers';
import { HeaderWrap, HeaderContent, MoblieMenuBlock } from 'styles/CommonStyles';
import logo from '../../styles/img/logo.png';
import hamburger from '../../styles/img/menu_btn.png';
import close from '../../styles/img/close.png';
import cost from '../../styles/img/cost.png';
import apply from '../../styles/img/apply.png';
import guide from '../../styles/img/guide.png';
import support from '../../styles/img/support.png';
import profile from '../../styles/img/profile.png';

const HeaderComponent = ({
    HandleLoginPopup,
    LoginPopup,
    Auth,
    AnchorEl,
    HandleMenuClick,
    HandleMenuClose,
    HandleLogout,
    loggedUser,
    HandletoggleMoblieMenu,
    ToggleState,
}) => {
    return (
        <>
            {LoginPopup === true && <LoginPopupContainer close={() => HandleLoginPopup(false)} />}
            <HeaderWrap>
                <HeaderContent>
                    <h2>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </h2>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/apply" className="apply">
                                    신청하기
                                </Link>
                            </li>
                            <li>
                                <Link to="/guide">이용안내</Link>
                            </li>
                            <li>
                                <Link to="/cost">비용안내</Link>
                            </li>
                            <li>
                                <Link to="/support">고객센터</Link>
                            </li>
                        </ul>
                    </nav>
                    {Auth ? (
                        <>
                            {/* <AccountCircleIcon onClick={HandleMenuClick} /> */}
                            <div className="profile">
                                <img src={profile} alt="profile" onClick={HandleMenuClick} />
                            </div>
                            <p className="username">
                                <strong>{loggedUser ? loggedUser.name : null}</strong> 님
                            </p>
                            <Menu
                                id="simple-menu"
                                anchorEl={AnchorEl}
                                keepMounted
                                open={Boolean(AnchorEl)}
                                onClose={HandleMenuClose}
                            >
                                <Link
                                    to="/mypage/cash"
                                    style={{
                                        color: '#000',
                                        display: 'block',
                                        width: '100%',
                                        height: '100%',
                                        textAlign: 'center',
                                    }}
                                >
                                    <p
                                        style={{
                                            textAlign: 'center',
                                            padding: '1rem',
                                            marginBottom: '1rem',
                                            borderBottom: '1px solid #ccc',
                                            lineHeight: '1.5',
                                        }}
                                    >
                                        바다라 Cash :{' '}
                                        <strong>
                                            {loggedUser && loggedUser.point !== null ? loggedUser.point : 0}
                                        </strong>
                                    </p>
                                </Link>
                                <MenuItem onClick={HandleMenuClose}>
                                    <Link
                                        style={{
                                            color: '#000',
                                            display: 'block',
                                            width: '100%',
                                            height: '100%',
                                            textAlign: 'center',
                                        }}
                                        to="/mypage"
                                    >
                                        주문목록
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    onClick={HandleLogout}
                                    style={{ width: '100%', textAlign: 'center', display: 'block' }}
                                >
                                    로그아웃
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Button variant="contained" color="primary" onClick={() => HandleLoginPopup(true)}>
                            로그인
                        </Button>
                    )}
                </HeaderContent>
            </HeaderWrap>
            <MoblieMenuBlock className={!ToggleState ? 'hamburger' : null}>
                <div className={ToggleState ? 'hamburger' : 'hamburger active'}>
                    <div className="toggle" onClick={() => HandletoggleMoblieMenu()}>
                        <img src={hamburger} alt="toggleBtn" />
                    </div>
                </div>
                <div className={ToggleState ? 'menuList active' : 'menuList'}>
                    <div className="close" onClick={() => HandletoggleMoblieMenu()}>
                        <img src={close} alt="close" />
                    </div>
                    <div className="guide">
                        <Link to="/guide" onClick={() => HandletoggleMoblieMenu()}>
                            <img src={guide} alt={guide} />
                        </Link>
                    </div>
                    <div className="cost" onClick={() => HandletoggleMoblieMenu()}>
                        <Link to="/cost">
                            <img src={cost} alt={cost} />
                        </Link>
                    </div>
                    <div className="apply">
                        <Link to="/apply" onClick={() => HandletoggleMoblieMenu()}>
                            <img src={apply} alt={apply} />
                        </Link>
                    </div>
                    <div className="support">
                        <Link to="support" onClick={() => HandletoggleMoblieMenu()}>
                            <img src={support} alt={support} />
                        </Link>
                    </div>
                </div>
            </MoblieMenuBlock>
        </>
    );
};
export default HeaderComponent;
