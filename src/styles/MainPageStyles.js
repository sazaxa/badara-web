import styled from 'styled-components';
import main from './img/main.jpg';
export const MainBannerWrap = styled.article`
    width: 100%;
    height: 500px;
    background: url(${main});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 10px;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 50px;
    position: relative;
    @media screen and (max-width: 1140px) {
        width: 100%;
        height: 50vw;
        padding: 0 15px;
        background-size: cover;
        box-sizing: border-box;
    }
    p {
        text-align: right;
        color: #fff;
        font-size: 27px;
        letter-spacing: -1px;
        position: absolute;
        top: 50px;
        right: 50px;
        line-height: 1.5;
        @media screen and (max-width: 1140px) {
            font-size: 1.8rem;
            top: 5.5vw;
            right: 30px;
        }
        // @media screen and (max-width: 1140px) {
        //     font-size: 3vw;
        // }
        @media screen and (max-width: 800px) {
            font-size: 1.3rem;
        }
        @media screen and (max-width: 600px) {
            top: 6vw;
            font-size: 0.8rem;
            right: 15px;
        }
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
        bottom: 30px;
        right: 50px;
        cursor: pointer;
        @media screen and (max-width: 1140px) {
            font-size: 16px;
            bottom: 5vw;
            width: 15vw;
            // height: 7vw;
        }
        @media screen and (max-width: 800px) {
            font-size: 3vw;
            bottom: 3vw;
            height: 7vw;
            line-height: 7vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 3vw;
            right: 20px;
        }
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            @media screen and (max-width: 800px) {
                font-size: 3vw;
            }
            @media screen and (max-width: 600px) {
                font-size: 3vw;
            }
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
    @media screen and (max-width: 1140px) {
        width: 100%;
    }
    & > article:first-child {
        width: 100%;
        display: flex;
    }
    & > article:last-child {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
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

export const TarkingWrap = styled.article`
    width: 100%;
    padding: 50px 100px;
    border-radius: 10px;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 50px;
    @media screen and (max-width: 1140px) {
        padding: 20px 10px;
    }
    .title_wrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: left;
        margin-bottom: 20px;
        @media screen and (max-width: 1140px) {
            justify-content: center;
            margin-bottom: 3vw;
        }
        h2 {
            width: 100%;
            font-size: 32px;
            letter-spacing: -1.5px;
            @media screen and (max-width: 1140px) {
                font-size: 3vw;
                text-align: center;
            }
            @media screen and (max-width: 800px) {
                font-size: 3.5vw;
            }
            @media screen and (max-width: 600px) {
                font-size: 5vw;
            }
        }
    }
    .trackingBox {
        width: 100%;
        border-top: 4px solid #0080ff;
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .inputBox {
            width: 70%;
        }
        p {
            padding-left: 10px;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: -1.5px;
        }
        input {
            width: 80%;
            padding: 15px;
            border-radius: 5px 0 0 5px;
            border: 1px solid #ccc;
            @media screen and (max-width: 1140px) {
                width: 70%;
            }
            @media screen and (max-width: 800px) {
                width: 85%;
                height: 6vw;
                padding: 0 2vw;
                box-sizing: border-box;
            }
            @media screen and (max-width: 600px) {
                height: 8vw;
                min-height: 40px;
            }
        }
        button {
            height: 47px;
            // padding: 15px;
            background: #fff;
            cursor: pointer;
            outline: none;
            border: none;
            background-color: #0049ff;
            color: #fff;
            font-size: 16px;
            border-radius: 0 5px 5px 0;
            width: 15%;
            @media screen and (max-width: 800px) {
                width: 15%;
                height: 6vw;
            }
            @media screen and (max-width: 600px) {
                height: 8vw;
                min-height: 40px;
            }
        }
    }
`;
