import { Responsive } from 'components';
import styled from 'styled-components';

export const ApplyWrap = styled(Responsive)`
    padding: 80px 0;
    background: #fff;
    height: 100%;
`;

export const ApplyContent = styled.article`
    width: 1140px;
    box-sizing: border-box;
    margin: 0 auto;
    h2 {
        // margin-bottom: 1rem;
        letter-spacing: -4px;
        border-bottom: 2px solid #666;
        padding: 0 0 1.5rem 0;
        text-align: center;
        font-size: 2rem;
    }
    button.applyBtn {
        width: 20%;
        height: 50px;
        font-size: 1rem;
        background: #000;
        color: #fff;
        border-radius: 5px;
        display: block;
        margin: 0 auto;
    }
    .waring {
        background: #f2f2f2;
        padding: 1rem;
        letter-spacing: -1px;
        border-bottom: 1px solid #666;
        margin-bottom: 2vw;
        h3 {
            color: red;
            letter-spacing: -2px;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }
        h4 {
            line-height: 1.5;
        }
        p {
            font-size: 0.85rem;
            line-height: 1.5;
            margin-bottom: 0.5rem;
        }
    }
    .contentWrap {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-top: 2px solid #000;
        margin-bottom: 2rem;
        .content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
            align-items: center;
            border-bottom: 1px solid #ccc;
            .title {
                width: 30%;
                height: 50px;
                // height: 100%;
                background: #eee;
                display: flex;
                align-items: center;
                padding: 0 10px;
                box-sizing: border-box;
                font-weight: 600;
            }
            .body {
                width: 70%;
                height: 50px;
                padding: 0 5%;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                input,
                select,
                textarea {
                    width: 100%;
                    height: 40px;
                    outline: 0;
                    border: none;
                    border-bottom: 1px solid #ccc;
                    font-size: 16px;
                    padding: 10px;
                    box-sizing: border-box;
                    resize: none;
                }
            }
            .body.material {
                input {
                    width: 50px;
                    height: 40px;
                }
                button {
                    width: 20%;
                    height: 35px;
                    background: #000;
                    cursor: pointer;
                    outline: none;
                    border: none;
                    color: #fff;
                    border-radius: 5px;
                }
            }
        }
    }
`;
