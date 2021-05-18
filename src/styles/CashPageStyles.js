import styled from 'styled-components';
import { MypageContent } from './MypageStyles';

export const CashPageContent = styled(MypageContent)`
    padding: 8rem 0;
    @media screen and (max-width: 1140px) {
        padding: 0;
        box-sizing: border-box;
    }
    h4 {
        font-size: 1.3rem;
        letter-spacing: -1.5px;
        margin-bottom: 1rem;
        @media screen and (max-width: 1140px) {
            font-size: 1.3rem;
            letter-spacing: -1px;
        }
        @media screen and (max-width: 500px) {
            font-size: 1rem;
            letter-spacing: -1px;
        }
    }
    h2 {
        font-size: 2.3rem;
        letter-spacing: -3px;
        color: #1976d2;
        @media screen and (max-width: 1140px) {
            font-size: 2rem;
            letter-spacing: -2px;
        }
        @media screen and (max-width: 500px) {
            font-size: 1.3rem;
            letter-spacing: -1px;
        }
    }
    .head {
        margin-bottom: 50px;
        @media screen and (max-width: 500px) {
            margin-bottom: 1rem;
        }
    }
    .body {
        width: 100%;
        .title {
            padding: 1rem 0;
            border-bottom: 2px solid #000;

            h3 {
                font-weight: 600;
                letter-spacing: -1.5px;
                @media screen and (max-width: 500px) {
                    font-size: 1rem;
                }
            }
        }
        .history {
            .historyNone {
                text-align: center;
                font-size: 2rem;
                padding: 3rem 0;
                font-weight: 600;
                letter-spacing: -1.5px;
            }
        }
        .item {
            padding: 1rem 0;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            font-size: 1.1rem;
            letter-spacing: -1.5px;
            border-bottom: 1px solid #ccc;
            @media screen and (max-width: 500px) {
                justify-content: space-around;
            }
            .left {
                width: 90%;
                font-weight: 600;
                padding: 0 1rem;
                box-sizing: border-box;
                @media screen and (max-width: 500px) {
                    width: 75%;
                    font-size: 0.9rem;
                }
                span {
                    & + span {
                        margin-left: 0.5rem;
                    }
                }
            }
            .right {
                width: 10%;
                @media screen and (max-width: 500px) {
                    width: 25%;
                    font-size: 0.9rem;
                }
                span {
                    font-weight: 900;
                    & + span {
                        margin-left: 0.5rem;
                    }
                }
                .point {
                    font-weight: 900;
                }
            }
        }
    }
`;
