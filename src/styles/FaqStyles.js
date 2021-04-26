import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Button from '@material-ui/core/Button';

export const FaqWrap = styled(Responsive)`
    padding: 50px 0;
    margin-left: 300px;
`;

export const FaqAddWrap = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
`;
export const FaqAddPopup = styled.article`
    width: 800px;
    height: 650px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%),
        0px 9px 46px 8px rgb(0 0 0 / 12%);
    z-index: 2;
    padding: 30px;
    box-sizing: border-box;
    button {
        width: 100%;
        background-color: #1976d2;
        font-size: 16px;
        font-weight: 600;
        opacity: 0.8;
        margin-bottom: 10px;
    }
    button:hover {
        background-color: #1976d2;
        opacity: 1;
    }
`;

export const AdminUserWrap = styled.article`
    width: 100%;
    height: auto;
    padding: 30px;
    box-sizing: border-box;
    button.btnFirst {
        margin-bottom: 20px;
        margin-right: 20px;
    }
    button.add {
        margin-bottom: 20px;
        background: #2191f3;
        opacity: 1;
        &:hover {
            background: #2191f3;
            opacity: 0.8;
        }
    }
`;

export const Fullscreen = styled.div`
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AskModalBlock = styled.div`
    width: 320px;
    background: #fff;
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
    h2 {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 3rem;
    }
    .buttons {
        display: flex;
        justify-content: flex-end;
    }
`;

export const StyledButton = styled(Button)`
    height: 2rem;
    & + & {
        margin-left: 0.75rem;
    }
    .cancel {
        background: #f50057;
    }
    .comfirm {
        background: #3f51b5;
    }
`;
