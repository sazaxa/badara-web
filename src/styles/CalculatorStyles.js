import styled from 'styled-components';

export const Responsive = styled.section`
    width: 100%;
    padding: 150px 0;
    box-sizing: border-box;
    background: #fff;
`;

export const CalculatorWrap = styled.article`
    width: 1140px;
    margin: 0 auto;
    padding: 50px 0;
    box-sizing: border-box;
    background: #fff;
    form {
        width: 50%;
        margin: 0 auto;
    }
    form > h2 {
        letter-spacing: -2px;
        margin-bottom: 20px;
        text-align: center;
    }
    .wrap {
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #ccc;
    }
    .wrap.top {
        border-top: 2px solid #333;
    }
    .wrap.bottom {
        border-bottom: 2px solid #333;
    }
    .wrap > .title {
        width: 30%;
        min-width: 171px;
        height: 50px;
        background: #f2f2f2;
        padding: 15px 0 15px 20px;
        box-sizing: border-box;
        letter-spacing: -2px;
        border-right: 1px solid #ccc;
        display: flex;
        align-items: center;
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
    }
    .wrap > .content button {
        width: 20%;
        height: 35px;
        background: #000;
        cursor: pointer;
        outline: none;
        border: none;
        color: #fff;
        border-radius: 5px;
    }
    .wrap > .content.material {
        display: flex;
        align-items: center;
    }
    .wrap > .content.material > input {
        width: 50px;
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
    }
    .wrap > .content > input:focus {
        border-bottom: 2px solid #333;
    }
    .wrap .primeBtn {
        margin: 0 auto;
    }
    .wrap .primeBtn button {
        width: 100%;
        height: 35px;
        background: #000;
        cursor: pointer;
        outline: none;
        border: none;
        color: #fff;
        border-radius: 5px;
        padding: 0 10px;
    }
`;
