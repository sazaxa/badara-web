import styled from 'styled-components';

export const CalculatorWrap = styled.article`
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #d7d7d7;
    // border-radius: 10px 10px 0 0;
    margin-bottom: 50px;
    form {
        width: 100%;
        margin: 0 auto;
    }
    form > .title_wrap {
        margin-bottom: 20px;
        display: flex;
        justify-content: left;
        align-items: center;
        color: #000;
        border-bottom: 1px solid #ddd;
        padding: 20px;
        background-color: #f5f5f5;
    }
    form > .title_wrap > .MuiSvgIcon-root {
        font-size: 24px;
    }
    form > .title_wrap > h2 {
        letter-spacing: -2.5px;
        text-align: center;
        font-size: 20px;
    }
    .wrap {
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #ccc;
    }
    .wrap.top {
        border-top: 2px solid #000;
    }
    .wrap.bottom {
        border-top: 2px solid #000;
    }
    .wrap > .title {
        width: 30%;
        min-width: 171px;
        height: 50px;
        background: #eee;
        padding: 15px 0 15px 20px;
        box-sizing: border-box;
        letter-spacing: -2px;
        border-right: 1px #eee;
        display: flex;
        align-items: center;
        color: #000;
    }
    .wrap > .title > p {
        font-size: 12px;
        letter-spacing: -0.5px;
        margin-left: 5px;
    }
    .wrap > .content {
        width: 70%;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        box-sizing: border-box;
        background-color: #fff;
    }
    .wrap > .content > button {
        width: 50%;
        height: 50px;
        background: #fff;
        cursor: pointer;
        outline: none;
        border: none;
        background-color: #1976d2;
        color: #fff;
        font-size: 16px;
        margin-top: 10px;
    }
    .wrap.material {
        height: 150px;
    }
    .wrap.material > .title {
        height: 150px;
    }
    .wrap > .content.material {
        display: flex;
        height: 100px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .wrap > .content.material > input {
        width: 30%;
        height: 40px;
    }

    .wrap > .content > input,
    select {
        width: 100%;
        height: 40px;
        outline: 0;
        border: none;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
        padding: 10px;
        box-sizing: border-box;
        text-align-last: center;
    }
    .wrap > .content > input:focus {
        border-bottom: 2px solid #333;
    }
    .wrap.prisebtn > .title {
        background: #fff;
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
    }
    .wrap.prisebtn button {
        width: 50%;
        box-sizing: border-box;
        margin-top: 0;
    }
`;
