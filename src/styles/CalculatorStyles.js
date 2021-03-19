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
    padding: 50px 100px;
    form {
        width: 100%;
        margin: 0 auto;
    }
    .title_wrap {
        margin-bottom: 20px;
        display: flex;

        justify-content: left;
        align-items: flex-end;
        color: #000;
    }
    .title_wrap > h2 {
        letter-spacing: -2.5px;
        text-align: center;
        font-size: 32px;
    }
    .title_wrap > span {
        font-size: 14px;
        color: #ccc;
        margin-left: 5px;
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
    }
    .wrap > .title > h4 {
        font-size: 18px;
    }
    .wrap > .title > p {
        font-size: 12px;
        letter-spacing: -0.5px;
        margin-left: 5px;
        color: #666;
    }
    .wrap > .content {
        width: 70%;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        box-sizing: border-box;
        background-color: #fff;
    }
    .wrap > .content > select {
        width: 60%;
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
        justify-content: space-btween;
        flex-wrap: wrap;
    }
    .wrap > .content.material > input {
        width: 20%;
        height: 40px;
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
    }
    .wrap > .content > input:focus {
        border-bottom: 2px solid #333;
    }
    .wrap.prisebtn {
        display: none;
    }
    .wrap.prisebtn.show {
        display: block;
    }
    .wrap.prisebtn > .title {
        background: #fff;
    }
    .wrap.prisebtn p {
        text-align: center;
        margin-top: 20px;
        font-weight: 600;
        color: red;
    }
    .prisebtn > .content {
        display: flex;
        height: 60px;
        justify-content: center;
        align-items: center;
    }
    .wrap.prisebtn {
        width: 100%;
        height: 80px;
        align-items: flex-start;
        border-bottom: none;
    }
    .wrap.prisebtn button {
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
    }
    .priseWrap {
        display: none;
    }
    .priseWrap.show {
        display: block;
        border-top: 1px solid #0080ff;
    }
    .btnWrap {
        width: 100%;
        display: flex;
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
        border-radius: 15px;
    }
`;
