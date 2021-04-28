import styled from 'styled-components';

export const MypageContent = styled.article`
    width: 1140px;
    margin: 0 auto;
    padding-top: 50px;
    box-sizing: border-box;
    @media screen and (max-width: 1140px) {
        width: 100%;
    }
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
    & > .menuBar {
        width: 100%;
        height: 60px;
        margin-bottom: 30px;
        @media screen and (max-width: 1140px) {
            height: 40px;
        }
        & ul {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        & li {
            width: 48%;
            height: 100%;
            display: flex;
            border-bottom: 1px solid #ccc;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 18px;
            letter-spacing: -1px;
            border-radius: 5px;
            cursor: pointer;
        }
        & li.active {
            background-color: #0049ff;
            color: #fff;
            font-weight: 600;
        }
    }
    & > .mypageHeader {
        width: 100%;
        height: 100%;
        display: flex;
        box-shadow: 0 0 5px #999;
        flex-wrap: wrap;
        justify-content: center;
        color: #fff;
        border-radius: 5px;
        margin-bottom: 50px;
        overflow: hidden;
        & > .left {
            width: 16%;
            // height: 338px;
            font-size: 26px;
            background: #0049ff;
            font-weight: 600;
            letter-spacing: -2px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            @media screen and (max-width: 1140px) {
                width: 100%;
                font-size: 18px;
                padding: 10px 0;
            }
        }
        & > .rightWrap {
            width: 84%;
            height: 100%;
            background-color: #fff;
            box-sizing: border-box;
            padding: 50px 0;
            border-radius: 0 5px 5px 0;
            @media screen and (max-width: 1140px) {
                width: 100%;
                padding: 20px 0;
            }
            & ul {
                display: flex;
                flex-wrap: wrap;
                @media screen and (max-width: 1140px) {
                    justify-content: end;
                }
                & > li {
                    width: 14%;
                    // max-width: 129px;
                    height: 100%;
                    // border-right: 1px solid #ccc;
                    border-left: 1px solid #ccc;
                    @media screen and (max-width: 1140px) {
                        width: 24.7%;
                        margin-bottom: 10px;
                        &:nth-child(1),
                        &:nth-child(5) {
                            border-left: 0;
                        }
                    }
                }
            }
            & strong {
                display: block;
                margin-bottom: 13px;
                margin-right: 0;
                height: 21px;
                color: #000;
                font-size: 18px;
                text-align: center;
                font-weight: bold;
                text-shadow: rgb(0 0 0 / 20%) 0px 1px 0px;
                @media screen and (max-width: 1140px) {
                    margin-bottom: 0px;
                    font-size: 13px;
                }
            }
            & p {
                color: #0049ff;
                font-size: 50px;
                line-height: 60px;
                text-align: center;
                @media screen and (max-width: 1140px) {
                    font-size: 30px;
                }
            }
        }
    }
    .centerAddress {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 50px;
        align-items: center;
        background-color: #0049ff;
        box-shadow: 0 0 5px #999;
        border-radius: 5px;
        letter-spacing: -1.5px;
        margin-bottom: 10px;
        @media screen and (max-width: 1140px) {
            height: 100%;
        }
        article.title {
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            h2 {
                color: #fff;
                margin: 0;
                text-align: center;
                font-size: 20px;
            }
            @media screen and (max-width: 1140px) {
                width: 100%;
                padding: 20px 0;
            }
        }
        article.address {
            width: 70%;
            height: 100%;
            line-height: 1.6;
            box-sizing: border-box;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 10px;
            p {
                text-align: center;
            }
            @media screen and (max-width: 1140px) {
                width: 100%;
                padding: 20px 10px;
            }
        }
    }
    .centerAddress + .centerAddress {
        margin-bottom: 50px;
    }
    .memberOrders .data {
        display: flex;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        flex-wrap: wrap;
        box-shadow: 0 0 5px #999;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;
    }

    .memberOrders .data > article {
        width: 30%;
        // display: flex;
        // flex-wrap: wrap;
        padding: 20px 15px;
        box-sizing: border-box;
        @media screen and (max-width: 1140px) {
            width: 100%;
            height: 100%;
        }
    }
    strong {
        margin-right: 10px;
    }
    .order {
        width: 100%;
        margin-bottom: 30px;
        padding-top: 50px;
        position: relative;
        & > button {
            position: absolute;
            top: 0;
            right: 0;
        }
        & > .orderHead {
            width: 100%;
            padding: 20px 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            color: #000;
            border-bottom: 1px solid #fff;
            box-shadow: 0 0 5px #999;
            border-radius: 10px;
            font-size: 17px;
            position: relative;
            letter-spacing: -1.5px;
            margin-bottom: 10px;
            button {
                width: 10%;
                position: absolute;
                top: 0;
                right: 0;
                height: 61px;
                border-radius: 0 10px 10px 0;
                background: #0049ff;
            }
            .headData {
                @media screen and (max-width: 1140px) {
                    width: 100%;
                    text-align: center;
                    &:last-child {
                        display: none;
                    }
                    &: first;
                }
            }
        }
    }
    .productWrap h3 {
        width: 100%;
        padding: 10px 0;
    }
    .recipient {
        width: 40% !important;
        background-color: #0049ff;
        color: #fff;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        @media screen and (max-width: 1140px) {
            width: 100% !important;
        }
        .itemWrap {
            width: 100%;
        }
        h2 {
            width: 100%;
            text-align: left;
            margin-bottom: 10px;
            @media screen and (max-width: 1140px) {
                width: 100%;
                height: 100%;
                text-align: center;
            }
        }
    }
    .recipientItem {
        width: 100%;
        justify-content: flex-start;

        letter-spacing: -1px;
        text-align: left;
        margin-bottom: 10px;
        @media screen and (max-width: 1140px) {
            width: 50%;
            text-align: center;
            float: left;
        }
        @media screen and (max-width: 655px) {
            width: 100%;
        }
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
    .product {
        .titleWrap {
            width: 100%;
            margin-bottom: 10px;
            display: flex;
            @media screen and (max-width: 1140px) {
                justify-content: center;
            }
            h2 {
                // width: 100%;
                display: inline-block;
                border-bottom: 3px solid #0049ff;
                padding-bottom: 10px;
                letter-spacing: -1.5px;
            }
        }
    }
    .productWrap {
        width: 100%;
        padding: 10px 0;
        display: flex !important;
        flex-wrap: wrap;
        align-items: stretch;
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
            width: 100%;
            margin-bottom: 10px;
            @media screen and (max-width: 1140px) {
                text-align: center;
            }
        }
    }
    .box {
        border-left: 3px solid #0049ff;
        box-sizing: border-box;
        display: flex !important;
        flex-wrap: wrap;
        align-items: stretch;
        @media screen and (max-width: 1140px) {
            border-top: 3px solid #0049ff;
            border-left: 0;
        }
        .titleWrap {
            width: 100%;
            height: 41px;
            margin-bottom: 10px;
            display: flex;
            @media screen and (max-width: 1140px) {
                justify-content: center;
            }
            h2 {
                border-bottom: 3px solid #0049ff;
                padding-bottom: 10px;
                letter-spacing: -1.5px;
            }
        }
    }
    .boxItem {
        width: 60%;
        letter-spacing: -1px;
        padding: 10px 0;
        float: left;
        @media screen and (max-width: 1140px) {
            text-align: center;
        }
        div {
            width: 100%;
            p {
                margin-bottom: 10px;
            }
        }
        .userWeight {
            width: 100%;
        }
    }
    .boxItem > p {
        margin-bottom: 10px;
    }
    .boxstatus {
        width: 40%;
        float: left;
        text-align: center;
        & > strong {
            width: 100%;
            display: block;
            margin-bottom: 10px;
        }
    }
    .total {
        box-shadow: 0 0 5px #999;
        border-radius: 10px;
        padding: 20px 0;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        & > h2 {
            width: 100%;
            margin: 0;
            margin-bottom: 20px;
        }
        & > .item {
            width: 20%;
            padding: 0 10px;
            @media screen and (max-width: 1140px) {
                width: 100%;
                margin-bottom: 10px;
            }
        }
        & > .item > strong {
            // margin-right: 20px;
        }
        & > span {
            @media screen and (max-width: 1140px) {
                width: 100%;
                display: block;
                margin-bottom: 10px;
            }
        }
    }
    button {
        width: 66px;
        height: 40px;
        border-radius: 15px;
        border: none;
        background: #0049ff;
        color: #fff;
        cursor: pointer;
    }
    .paymentBtn {
        button {
            width: 100%;
            height: 50px;
            font-size: 16px;
            border-radius: 0 0 10px 10px;
        }
    }
    .tracking {
        display: inline-block;
        width: 66px;
        height: 40px;
        line-height: 40px;
        margin-left: 10px;
        border-radius: 15px;
        border: none;
        background: #0049ff;
        color: #fff;
        cursor: pointer;
    }
    .orderNone {
        text-align: center;
        font-size: 40px;
        padding: 50px 0;
        letter-spacing: -1.5px;
        @media screen and (max-width: 1140px) {
            font-size: 24px;
        }
    }
`;
export const Fullscreen = styled.section`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UpdateInvoiceWrap = styled.article`
    width: 800px;
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    // padding: 50px;
    box-sizing: border-box;
    z-index: 1001;
    overflow: hidden;
    .body {
        padding: 15px 10px;
        p {
            font-size: 18px;
            margin-bottom: 10px;
            letter-spacing: -1.5px;
            font-weight: 600;
        }
    }
    p {
        line-height: 1.5;
    }

    @media screen and (max-width: 1140px) {
        width: 95%;
    }
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
        padding: 10px;
        height: 50px;
        border-radius: 3px 0 0 0;
        letter-spacing: -1px;
        cursor: pointer;
        outline: none;
        border: none;
        color: #fff;
        font-size: 16px;
        & + button {
            border: 1px solid #0049ff;
            border-left: 0;
            border-bottom: 0;
            border-right: 0;
            background: #fff;
            color: #0049ff;
        }
    }
    .paymentBtnWrap {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
    }
    .paymentBtn {
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        background: #fff;
        color: #333;
        font-weight: 400;
        box-shadow: none;
        font-size: 18px;
        letter-spacing: -1.5px;
        &:hover {
            background: #fff;
        }
        img {
            width: 75%;
        }
    }
    label {
        display: block;
        margin-bottom: 30px;
    }
`;

export const PaymentWrap = styled(UpdateInvoiceWrap)`
    width: 800px;
    // height: 550px;
    // padding: 20px;
    @media screen and (max-width: 1140px) {
        width: 95%;
    }
    .header {
        margin-bottom: 30px;
    }
    button {
        width: 50%;
    }
    .allCheckedWrap {
        // border-bottom: 1px solid #ccc;
        padding: 10px 0;
    }
    .body {
        padding: 0;
    }
    .wrap {
        padding: 10px;
        border: 1px solid #ccc;
    }
    .next {
        background: #0049ff;
        color: #fff;
    }
    .cancel {
        background: #fff;
        color: #0049ff;
        border-top: 1px solid #0049ff;
    }
`;
