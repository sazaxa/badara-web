import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { LoginPopupContainer } from 'containers';
import { HeaderWrap, HeaderContent } from 'styles/CommonStyles';

const HeaderComponent = ({ HandleLoginPopup, LoginPopup }) => (
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
                            <Link to="/use">이용안내</Link>
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
                <Button variant="contained" color="primary" onClick={() => HandleLoginPopup(true)}>
                    로그인
                </Button>
            </HeaderContent>
        </HeaderWrap>
    </>
);
export default HeaderComponent;
