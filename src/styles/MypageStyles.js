import styled from 'styled-components';

export const MypageContent = styled.article`
    width: 1140px;
    margin: 0 auto;
    padding-top: 50px;
    box-sizing: border-box;
    & > h2 {
        font-size: 32px;
        letter-spacing: -1.5px;
        text-align: center;
        margin-bottom: 50px;
    }
    & > MuiAvatar-root {
        width: 100px;
    }
    & > p {
        letter-spacing: -1.3px;
        font-size: 24px;
        text-align: center;
    }
    & > button {
        width: 110px;
        letter-spacing: -1.3px;
        margin: 0 90%;
        margin-bottom: 20px;
    }
    & > .mypageHeader {
        width: 100%;
        height: 180px;
        background: #1976d2;
        display: flex;
        color: #fff;
        border-radius: 5px;
        margin-bottom: 50px;
        & > .left {
            width: 14.285%;
            font-size: 26px;
            font-weight: 600;
            text-align: center;
            letter-spacing: -2px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        & > .right {
            width: 100%;
            height: 100%;
            background-color: rgb(130, 188, 226);
            padding: 50px 0px 0px 0px;
            box-sizing: border-box;
            border-radius: 0 5px 5px 0;
            & ul {
                display: flex;
                & > li {
                    width: 16.6666%;
                    height: 100%;
                    border-right: 1px solid rgb(155, 201, 232);
                    border-left: 1px solid rgb(120, 173, 208);
                }
            }
            & strong {
                display: block;
                margin-bottom: 13px;
                height: 21px;
                color: rgb(255, 255, 255);
                font-size: 18px;
                text-align: center;
                font-weight: bold;
                text-shadow: rgb(0 0 0 / 20%) 0px 1px 0px;
            }
            & p {
                color: rgb(255, 255, 255);
                font-size: 50px;
                line-height: 60px;
                text-align: center;
            }
        }
    }
    .memberOrders .data {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 25px 20px;
        border: 1px solid #ccc;
        border-top: none;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .memberOrders .data > article {
        width: 33%;
        display: flex;
        flex-wrap: wrap;
        & > h2,
        & h3,
        & strong {
            width: 100%;
        }
    }
    strong {
        margin-right: 10px;
    }
    .order {
        width: 100%;
        margin-bottom: 30px;
        & > .orderHead {
            width: 100%;
            padding: 20px 0;
            display: flex;
            justify-content: space-around;
            background: #1976d2;
            color: #fff;
            border-bottom: 1px solid #fff;
        }
    }
    article > h2 {
        margin: 20px 0;
    }
    .productWrap h3 {
        width: 100%;
        padding: 10px 0;
    }
    .recipient {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .recipientItem {
        width: 100%;
        justify-content: flex-start;
        // padding: 10px 0;
        letter-spacing: -1px;
        & string {
            margin-bottom: 10px;
            width: 30%;
        }
        & strong,
        & span {
            width: 50% !important;
            // justify-content: center;
        }
    }
    .productWrap {
        width: 100%;
        padding: 10px 0;
        display: flex !important;
        flex-wrap: wrap;
        align-items: center;
        padding: 20px 0;
        margin: 0 10px;
        & strong,
        & span {
            width: 50% !important;
            font-size: 16px;
            letter-spacing: -1.5px;
            text-align: right;
        }
        & > .productItem {
            width: 50%;
        }
    }
    .box {
        display: flex;
        align-items: center;
    }
    .boxItem {
        width: 60%;
        letter-spacing: -1px;
        padding: 10px 0;
    }
    .boxItem > p {
        margin-bottom: 10px;
    }
    .boxstatus {
        width: 40%;
        & > strong {
            width: 100%;
            display: block;
            margin-bottom: 10px;
        }
    }
    .total {
        border: 1px solid #ccc;
        border-top: none;
        padding: 30px 0;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        & > h2 {
            width: 100%;
            margin: 0;
            margin-bottom: 20px;
        }
        & > .item {
            padding: 0 10px;
        }
        & > .item > strong {
            margin-right: 0;
        }
    }
    button {
        width: 50%;
        height: 40px;
        margin-top: 5%;
        margin-left: 3%;
        border-radius: 15px;
        border: none;
        background: #1976d2;
        color: #fff;
        cursor: pointer;
    }
`;

export const UpdateInvoiceWrap = styled.article`
    width: 500px;
    height: 300px;
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    padding: 50px;
    box-sizing: border-box;
    h2 {
        margin-bottom: 20px;
    }
    input,
    select {
        width: 100%;
        border: 1px solid #ccc;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    button {
        width: 80px;
        height: 40px;
        border: none;
        background: #0049ff;
        border-radius: 15px;
        color: #fff;
        margin: 20px 10px;
        outline: none;
        cursor: pointer;
    }
`;
