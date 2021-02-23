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
    padding: 100px 0 150px 0;
    box-sizing: border-box;
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
    }
    form {
        padding: 20px 0;
        box-sizing: border-box;
    }
    button {
        color: #fff;
        background-color: #609ae9;
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
        &:hover {
            background-color:#1976d2;
        }
        &:focus {
            border:4px solid #609ae9;
        }
    }
`;
