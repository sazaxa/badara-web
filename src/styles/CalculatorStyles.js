import styled from 'styled-components';

export const CalculatorWrap = styled.article`
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    background: #fff;
    // border: 1px solid #d7d7d7;
    border-radius: 10px;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 50px;
    padding: 50px 100px 100px 100px;
    @media screen and (max-width: 1140px) {
        padding: 20px 10px 80px 10px;
    }
    form {
        width: 100%;
        margin: 0 auto;
    }
    .title_wrap {
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-items: flex-end;
        color: #000;
        @media screen and (max-width: 1140px) {
            justify-content: center;
        }
    }
    .title_wrap > h2 {
        letter-spacing: -2.5px;
        text-align: center;
        font-size: 32px;
        @media screen and (max-width: 1140px) {
            width: 100%;
            margin-bottom: 5px;
            font-size: 3vw;
        }
        @media screen and (max-width: 800px) {
            font-size: 3.5vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 5vw;
        }
    }
    .title_wrap > span {
        font-size: 14px;
        color: #ccc;
        margin-left: 5px;
        @media screen and (max-width: 800px) {
            font-size: 2vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 2.5vw;
        }
    }
    .countryTitle {
        margin-right: 20px;
    }
    .wrap {
        display: flex;
        align-items: center;
        width: 100%;
        height: 70px;
        border-bottom: 1px solid #0080ff;
        @media screen and (max-width: 1140px) {
            width: 100%;
            height: 50px;
        }
        @media screen and (max-width: 800px) {
            height: 45px;
        }
    }
    .wrap.top {
        border-top: 4px solid #0080ff;
    }
    .wrap.bottom {
        border-top: 2px solid #000;
    }
    .wrap > .title {
        width: 30%;
        min-width: 171px;
        height: 50px;
        padding: 15px 0 15px 20px;
        box-sizing: border-box;
        letter-spacing: -2px;
        border-right: 1px #eee;
        display: flex;
        align-items: flex-end;
        color: #000;
        @media screen and (max-width: 1140px) {
            width: 30%;
            height: 30px;
            align-items: center;
        }
    }
    .wrap.material {
        @media screen and (max-width: 446px) {
            height: 100px;
            align-items: center;
        }
    }
    .wrap > .title > h4 {
        font-size: 18px;
        @media screen and (max-width: 1140px) {
            font-size: 2vw;
        }
        @media screen and (max-width: 800px) {
            font-size: 2.5vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 3vw;
        }
        @media screen and (max-width: 500px) {
            font-size: 3.5vw;
        }
    }
    .wrap > .title > p {
        font-size: 12px;
        letter-spacing: -0.5px;
        margin-left: 5px;
        color: #666;
        @media screen and (max-width: 1140px) {
            font-size: 1vw;
        }
        @media screen and (max-width: 800px) {
            font-size: 1.5vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 2vw;
        }
        @media screen and (max-width: 500px) {
            font-size: 2.5vw;
        }
    }
    .wrap > .content {
        width: 70%;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        box-sizing: border-box;
        background-color: #fff;
        @media screen and (max-width: 1140px) {
            height: 30px;
            line-height: 30px;
            padding: 0;
        }
    }
    .wrap > .content > select {
        width: 60%;
        @media screen and (max-width: 1140px) {
            width: 100%;
            height: 100%;
            padding: 0;
            padding: 0 1vw;
            font-size: 14px;
        }
    }
    .wrap > .content > button {
        width: 50%;
        height: 50px;
        background: #fff;
        cursor: pointer;
        outline: none;
        border: none;
        background-color: #0049ff;
        color: #fff;
        font-size: 16px;
    }
    .wrap > .content.material {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        @media screen and (max-width: 446px) {
            height: 60px;
            align-items: stretch;
            justify-content: center;
        }
    }
    .wrap > .content.material > input {
        width: 20%;
        height: 40px;
        @media screen and (max-width: 1140px) {
            height: 100%;
            padding: 0;
            padding: 0 1vw;
            font-size: 14px;
        }
        @media screen and (max-width: 446px) {
            height: 50%;
            margin-bottom: 2vw;
        }
    }
    .wrap > .content.material > span {
        margin: 0 3%;
    }
    .wrap > .content.material > button {
        width: 20%;
        height: 40px;
        margin-top: 0;
        margin-left: 3%;
        border-radius: 15px;
        @media screen and (max-width: 1140px) {
            width: 15%;
            height: 100%;
            border-radius: 5px;
            font-size: 14px;
        }
        @media screen and (max-width: 446px) {
            width: 40%;
            height: 52%;
            margin: 0 auto;
        }
    }
    .wrap > .content > input,
    select {
        width: 50%;
        height: 40px;
        outline: 0;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        padding: 10px;
        box-sizing: border-box;
        @media screen and (max-width: 1140px) {
            width: 70%;
            height: 100%;
            border-radius: 5px;
            font-size: 14px;
        }
    }
    .wrap > .content > input:focus {
        border-bottom: 2px solid #333;
    }
    .wrap.pricebtn {
        display: none;
    }
    .wrap.pricebtn.show {
        display: block;
    }
    .wrap.pricebtn > .title {
        background: #fff;
    }
    .wrap.pricebtn p {
        text-align: center;
        margin-top: 20px;
        font-weight: 600;
        color: red;
        @media screen and (max-width: 1140px) {
            font-size: 1.8vw;
        }
        @media screen and (max-width: 800px) {
            font-size: 2vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 2.5vw;
        }
        @media screen and (max-width: 500px) {
            font-size: 3vw;
        }
        @media screen and (max-width: 400px) {
            font-size: 3.5vw;
        }
    }
    .pricebtn > .content {
        display: flex;
        height: 60px;
        justify-content: center;
        align-items: center;
    }
    .wrap.pricebtn {
        width: 100%;
        height: 80px;
        align-items: flex-start;
        border-bottom: none;
    }
    .wrap.pricebtn button {
        width: 100%;
        height: 52px;
        background-color: #0049ff;
        box-sizing: border-box;
        margin-top: 0;
        outline: none;
        border: none;
        color: #fff;
        font-size: 20px;
        letter-spacing: -1.5px;
        border-radius: 0 0 10px 10px;
        cursor: pointer;
        @media screen and (max-width: 1140px) {
            height: 5vw;
            font-size: 16px;
        }
        @media screen and (max-width: 800px) {
            height: 6vw;
            font-size: 2.5vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 2.6vw;
            height: 7vw;
        }
        @media screen and (max-width: 500px) {
            font-size: 3.5vw;
        }
    }
    .priceWrap {
        display: none;
    }
    .priceWrap.show {
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid #0080ff;
        @media screen and (max-width: 445px) {
            height: 130px;
        }
    }
    .priceWrap > .wrap {
        @media screen and (max-width: 445px) {
            height: 100px;
        }
    }
    .priceWrap > .wrap > .content {
        @media screen and (max-width: 445px) {
            height: 60px;
        }
    }
    .priceWrap > .wrap > .content > input {
        @media screen and (max-width: 1140px) {
            width: 40%;
            height: 100%;
            border-radius: 5px;
            font-size: 14px;
        }
        @media screen and (max-width: 445px) {
            width: 100%;
            height: 45%;
            align-items: stretch;
        }
    }
    .btnWrap {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .btnWrap > button {
        width: 50%;
        height: 52px;
        border: none;
        color: #fff;
        font-size: 20px;
        letter-spacing: -1.5px;
        border-radius: 0 0 10px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        @media screen and (max-width: 1140px) {
            height: 6vw;
        }
        @media screen and (max-width: 800px) {
            height: 5vw;
            font-size: 2.5vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 2.6vw !important;
            height: 7vw;
        }
        @media screen and (max-width: 500px) {
            font-size: 3.5vw !important;
            height: 7vw !important;
        }
        a {
            color: #fff;
            display: flex;
            align-items: center;
        }
    }
    .btnWrap > button.applybtn {
        background-color: #0049ff;
    }
    .btnWrap > button.mypagebtn {
        background-color: #009aff;
    }
    .resetBtn {
        width: 20% !important;
        height: 40px !important;
        margin-left: 3%;
        border-radius: 5px;
        @media screen and (max-width: 1140px) {
            width: 7vw !important;
            height: 3vw !important;
        }
        @media screen and (max-width: 800px) {
            height: 4vw !important;
            font-size: 2.5vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 2.6vw !important;
            height: 7vw;
        }
        @media screen and (max-width: 500px) {
            font-size: 3vw !important;
            height: 7vw !important;
        }
    }
    .selected {
        border: 2px solid red;
    }
    .VAT {
        text-align: left;
        margin-top: 20px;
        font-weight: 600;
        color: red;
        margin-bottom: 15px;
        @media screen and (max-width: 1140px) {
            font-size: 1.8vw;
            text-align: center;
        }
        @media screen and (max-width: 800px) {
            font-size: 2vw;
        }
        @media screen and (max-width: 600px) {
            font-size: 2.5vw;
        }
        @media screen and (max-width: 500px) {
            font-size: 3vw;
        }
        @media screen and (max-width: 400px) {
            font-size: 3.5vw;
        }
    }
`;
