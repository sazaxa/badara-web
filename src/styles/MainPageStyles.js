import styled from 'styled-components';
import main from './img/main.png';
export const MainBannerWrap = styled.article`
    width: 100%;
    height: 500px;
    background: url(${main});
    background-size: cover;
    background-position: center center;
    border-radius: 10px;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 50px;
    position: relative;
    p {
        text-align: right;
        color: #fff;
        font-size: 32px;
        letter-spacing: -1px;
        position: absolute;
        bottom: 130px;
        right: 50px;
        line-height: 1.5;
    }
    .BannerBtn {
        width: 150px;
        height: 50px;
        background: #0049ff;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        border-radius: 10px;
        position: absolute;
        bottom: 50px;
        right: 50px;
        cursor: pointer;

        a {
            color: #fff;
            display: block;
            width: 100%;
            height: 100%;
        }
    }
`;
export const MainWrap = styled.article`
    width: 1140px;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    & > article:first-child {
        width: 100%;
        display: flex;
    }
    & > article:last-child {
        width: 100%;
        display: flex;
    }
    & > article > button {
        display: flex;
        justify-content: center;
        align-items: center;
        // flex-wrap: wrap;
        width: 100%;
        height: 150px;
        background-color: rgb(130, 188, 226);
        color: #fff;
        border: none;
        font-size: 30px;
        outline: none;
        cursor: pointer;
    }
    & > article > button.applybtn {
        // margin-bottom: 50px;
        background-color: #1976d2;
    }
    & > article > button > .MuiSvgIcon-root {
        font-size: 45px;
        margin-right: 10px;
    }
`;
