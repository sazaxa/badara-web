import styled from 'styled-components';

export const Responsive = styled.section`
    width: 100%;
    padding: 100px 0 100px 0;
    box-sizing: border-box;
    background: #fff;
    @media screen and (max-width: 1140px) {
        padding: 95px 3vw 50px 3vw;
    }
`;

export const AdminHeaderContent = styled.article`
    width: 15vw;
    min-width: 230px;
    height: 100vh;
    background: #fff;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    border-left: 1px solid #ccc;
    position: fixed;
    top: 0;
    left: 0;

    .logo {
        background-color: #fff;
        height: 80px;
        border-radius: 10px;
        box-shadow: 0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);
    }
    h2 {
        text-align: center;
        color: #2191f3;
        letter-spacing: -2px;
        line-height: 80px;
    }
    .menuList {
        padding: 100px 0;
        box-sizing: border-box;
        text-align: center;
    }
    .menuList li {
        font-size: 24px;
        letter-spacing: -1.5px;
        margin-bottom: 30px;
    }
    .menuList li a {
        color: #000;
    }
    .active {
        font-weight: 600;
    }
`;

export const QuillWrapper = styled.div`
    .ql-editor {
        // width: 100%;
        padding: 10px;
        max-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-editor.ql-blank::placeholder {
        padding: 10px;
    }
    .ql-editor.ql-blank::before {
        left: 0px;
    }
`;

export const FooterWrap = styled.section`
    width: 100%;
    background-color: #f6f6f6;
    // position: absolute;
    // bottom: 0;
    // left: 0;
`;
export const FooterContent = styled.article`
    width: 1140px;
    margin: 0 auto;
    padding: 20px 0;
    box-sizing: border-box;
    color: #343a40;
    position: relative;
    @media screen and (max-width: 1140px) {
        width: 100%;
        padding: 80px 20px 20px 20px;
        box-sizing: border-box;
    }
    span {
        margin-bottom: 5px;
        letter-spacing: -1px;
        font-size: 13px;
        a {
            color: #000;
        }
    }
    .bar {
        margin: 0 10px;
    }
    p:last-child {
        margin-top: 20px;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 11px;
        letter-spacing: -0.5px;
    }
    .sns {
        display: flex;
        position: absolute;
        top: 20px;
        right: 0;
        @media screen and (max-width: 1140px) {
            left: 50%;
            transform: translateX(-50%);
            justify-content: center;
        }
        & > a {
            width: 40px;
            @media screen and (max-width: 1140px) {
                width: 35px;
            }
            & + a {
                margin-left: 15px;
            }
            & > img {
                width: 100%;
            }
        }
    }
`;

export const HeaderWrap = styled.section`
    width: 100%;
    height: 110px;
    border-bottom: 1px solid #eee;
    background: #fff;
    @media screen and (max-width: 1140px) {
        position: fixed;
        height: 65px;
        z-index: 999;
    }
`;

export const HeaderContent = styled.header`
    width: 1140px;
    height: 110px;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    @media screen and (max-width: 1140px) {
        width: 100%;
        height: 65px;
        padding: 0 5vw;
        box-sizing: border-box;
    }
    .MuiButtonBase-root {
        @media screnn and(max-width:600) {
            width: 22%;
        }
    }
    .MuiButtonBase-root > a {
        color: #000;
    }
    .MuiButton-label {
        letter-spacing: -1.5px;
        font-size: 14px;
    }
    h2 {
        width: 150px;
        margin-right: 180px;
        @media screen and (max-width: 1140px) {
            margin-right: 30px;
        }
    }
    h2 > a {
        width: 100%;
        letter-spacing: -2.5px;
        font-size: 32px;
        color: #1976d2;
        font-weight: 900;
    }
    h2 > a > img {
        width: 100%;
        @media screen and (max-width: 1140px) {
            width: 70%;
        }
    }
    nav ul {
        display: flex;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
    nav ul li {
        padding: 0 45px;
        box-sizing: border-box;
    }
    nav ul li a {
        font-size: 18px;
        color: #000;
        letter-spacing: -1px;
        transition: all 0.3s;
    }
    nav ul li a:hover {
        color: #1976d2;
        font-weight: 900;
    }
    button {
        margin-left: 80px;
        background-color: #0049ff;
        font-weight: 600;
        font-size: 16px;
        position: absolute;
        top: 50%;
        right: 25px;
        transform: translateY(-50%);
    }
    button:hover {
        background-color: #0049ff;
        opacity: 0.5;
    }
    .profile {
        position: absolute;
        width: 35px;
        height: 35px;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        font-size: 35px;
        cursor: pointer;
        img {
            width: 100%;
        }
    }
    p.username {
        position: absolute;
        right: 0;
        bottom: 10px;
        letter-spacing: -1px;
        display: block;
        @media screen and (max-width: 1140px) {
            right: 10px;
            display: none;
        }
    }
`;

export const LoginPopupWrap = styled.section`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 1;
`;
export const LoginPopup = styled.article`
    width: 600px;
    // height: 415px;
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%),
        0px 9px 46px 8px rgb(0 0 0 / 12%);
    z-index: 2;
    padding: 30px;
    box-sizing: border-box;
    @media screen and (max-width: 1140px) {
        width: 100%;
        padding: 10vw 5vw;
        box-sizing: border-box;
    }
    h3 {
        width: 150px;
        text-align: center;
        font-size: 30px;
        font-weight: 900;
        letter-spacing: -1.5px;
        color: #1976d2;
        font-weight: 600;
        margin: 0 auto;
        & > img {
            width: 100%;
        }
    }
    .titleWrap {
        margin-bottom: 30px;
        text-align: center;
        letter-spacing: -1px;
    }

    button {
        width: 100%;
        height: 56px;
        background-color: #1976d2;
        font-size: 16px;
        font-weight: 600;
        opacity: 0.8;
        margin-bottom: 10px;
        box-shadow: none;
    }
    button:hover {
        background-color: #1976d2;
        opacity: 1;
    }
    p.registerFont {
        letter-spacing: -1.5px;
        font-size: 14px;
        text-align: right;
    }
    p.registerFont > a {
        color: #666;
    }
    #loginBtn {
        background: #0049ff;
    }
    #registerBtn {
        background: #fff;
        color: #0049ff;
        border: 1px solid #0049ff;
    }
    .inputBox {
        position: relative;
        width: 100%;
        border: 1px solid #0049ff;
        margin-bottom: 30px;
        border-radius: 5px;
        overflow: hidden;
        & > label {
            position: absolute;
            top: 0;
            left: 0;
            width: 12%;
            height: 100%;
            background: #0049ff;
            border-radius: 5px 0 0 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            @media (max-width: 780px) {
                font-size: 13px;
            }
        }
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 14%;
    font-size: 16px;
    border: none;
    outline: none;
    & > focus {
        outline: 1px solid #ccc;
    }
`;

export const ResponsiveBlock = styled.div`
    // padding: 0 0.8rem;
    box-sizing: border-box;
    width: 100%;
    height: 980px;
    // padding-left: 300px;
    @media (max-width: 780px) {
        width: 100%;
    }
`;

export const MoblieMenuBlock = styled.div`
    width: 100%;
    height: 80px;
    // padding: 0 2vw;
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    &.hamburger {
        width: 80px;
    }
    & > .hamburger {
        width: 80px;
        display: flex;
        justify-content: flex-start;
        padding: 0 2vw;
        display: none;
        .toggle {
            width: 80%;
        }
    }
    & > .hamburger.active {
        display: flex;
    }
    & > div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        cursor: pointer;
        div {
            width: 18%;
            max-width: 77px;
        }
        img {
            width: 100%;
            box-shadow: 0 0 5px #999;
            border-radius: 55px;
        }
    }
    .menuList {
        display: flex;
        transform: translateX(-100%);
        transition: all 0.3s;
    }
    .menuList.active {
        display: flex;
        transform: translateX(0);
        transition: all 0.3s;
    }
    @media (max-width: 1140px) {
        display: block;
    }
`;
