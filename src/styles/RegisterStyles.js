import styled from 'styled-components';

export const RegisterWrap = styled.section`
    width: 100%;
    height: 100%;
    background: #fff;
`;

export const RegisterContent = styled.article`
    width: 388px;
    margin: 0 auto;
    text-align: center;
    padding:200px 0 150px 0;
    box-sizing: border-box;
    @media screen and (max-width: 1140px) {
        width:100%;
        padding:130px 5vw;
        box-sizing:border-box;
    }
    .header img {
        width:120px;
        margin-bottom:10px;
        @media screen and (max-width: 1140px) {
           margin-bottom:1vw;
        }
    }
    h2 {
        font-size: 26px;
        letter-spacing: -2px;
        margin-bottom: 15px;
    }
    p {
        font-size: 14px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
    input {
        width: 100%;
        color: #313338;
        background: #fff;
        border: 1px solid #ced0da;
        padding: 0.53125rem 0.75rem;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.714286;
        border-radius: 0.3rem;
        outline: none;
        margin-bottom:10px;
        &:hover {
            border: 1px solid #1976d2;
        }
        &:focus {
            border 2px solid #1976d2;
        }
        &:disabled {
            background:#ddd;
            color:#666;
        }
    }
    form {
        padding: 20px 0;
        box-sizing: border-box;
    }
    button {
        color: #fff;
        background-color: #0049ff;
        border-color: #609ae9;
        padding: .53125rem 1.125rem;
        font-size: 1rem;
        line-height: 1.714286;
        border-radius: 3px;
        width:100%;
        border:none;
        outline:none;
        cursor:pointer;
        transition:all 0.3s;
    }
`;

export const TosWrap = styled.article`
    width: 1140px;
    margin: 0 auto;
    padding: 150px 0;
    @media screen and (max-width: 1140px) {
        width: 100%;
        padding: 120px 2vw;
        box-sizing: border-box;
    }
    h2 {
        margin-bottom: 20px;
        text-align: center;
    }
    .agreeBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        border-radius: 10px;
    }
    .agreeBox > .inputBox {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
    }
    .agreeBox > .inputBox > label {
        margin: 0 10px;
        display: inline-block;
    }
`;

export const TosBox = styled.article`
    width: 100%;
    height: 500px;
    overflow-y: auto;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 10px;
    line-height: 1.6;
    strong {
        font-size: 18px;
        letter-spacing: -1.5px;
    }
    @media screen and (max-width: 1140px) {
        font-size: 15px;
        letter-spacing: -1px;
    }
`;
