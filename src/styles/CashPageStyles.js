import styled from 'styled-components';
import { MypageContent } from './MypageStyles';

export const CashPageContent = styled(MypageContent)`
    padding: 8rem 0;
    h4 {
        font-size: 1.5rem;
        letter-spacing: -1.5px;
        margin-bottom: 1rem;
    }
    h2 {
        font-size: 2.5rem;
        letter-spacing: -3px;
        color: #1976d2;
    }
    .head {
        margin-bottom: 50px;
    }
    .body {
        width: 100%;
        .title {
            padding: 1rem 0;
            border-bottom: 2px solid #000;
            h3 {
                font-weight: 600;
                letter-spacing: -1.5px;
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
            .left {
                width: 90%;
                font-weight: 600;
                padding: 0 1rem;
                box-sizing: border-box;
            }
            .right {
                width: 10%;
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
