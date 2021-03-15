import styled from 'styled-components';

export const Responsive = styled.section`
    width: 100%;
    padding: 100px 0 100px 0;
    box-sizing: border-box;
    background: #fff;
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
        padding: 10px;
        min-height: 320px;
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
    p {
        margin-bottom: 5px;
        letter-spacing: -1px;
        font-size: 13px;
    }
    p:last-child {
        margin-top: 20px;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 11px;
        letter-spacing: -0.5px;
    }
`;

export const HeaderWrap = styled.section`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #eee;
    background: #fff;
`;

export const HeaderContent = styled.header`
    width: 1140px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    .MuiButtonBase-root > a {
        clolor: #000;
    }
    h2 > a {
        letter-spacing: -2.5px;
        font-size: 32px;
        color: #1976d2;
        margin-right: 220px;
        font-weight: 900;
    }
    nav ul {
        display: flex;
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
        background-color: #1976d2;
        font-weight: 600;
        font-size: 16px;
    }
    button:hover {
        background-color: #1976d2;
        opacity: 0.5;
    }
    .MuiSvgIcon-root {
        position: absolute;
        right: 20px;
        font-size: 35px;
        cursor: pointer;
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
    width: 500px;
    height: 350px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%),
        0px 9px 46px 8px rgb(0 0 0 / 12%);
    z-index: 2;
    padding: 30px;
    box-sizing: border-box;
    h3 {
        text-align: center;
        font-size: 30px;
        font-weight: 900;
        letter-spacing: -1.5px;
        margin-bottom: 30px;
        color: #1976d2;
        font-weight: 600;
    }

    button {
        width: 100%;
        height: 56px;
        background-color: #1976d2;
        font-size: 16px;
        font-weight: 600;
        opacity: 0.8;
        margin-bottom: 10px;
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
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    &:focus {
        outline: none;
        border: 2px solid #1976d2;
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
