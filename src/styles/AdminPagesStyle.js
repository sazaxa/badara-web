import styled from 'styled-components';

export const AdminUserWrap = styled.article`
    width: 100%;
    padding-top: 50px;
    padding-left: 300px;

    height: 100vh;
    background: #f2f2f2;
`;

export const LoginWrap = styled.article`
    width: 500px;
    margin: 0 auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
        text-align: center;
        letter-spacing: -1.5px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
        box-sizing: border-box;
        margin-bottom: 30px;
    }
    form {
        display: flex;
        flex-wrap: wrap;
    }
    .MuiTextField-root {
        width: 100%;
        margin-bottom: 15px;
    }
    .MuiButton-root {
        width: 100%;
        height: 56px;
        background: #0049ff;
        font-size: 18px;
        &:hover {
            background: #009aff;
        }
    }
`;
