import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

export const OrderWrap = styled(Responsive)`
    width: 100%;
    padding: 50px;
    box-sizing: border-box;
    margin-left: 300px;
    .detailWrap {
        width: 100%;
        letter-spacing: -1.5px;
        table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
        }
        table,
        th,
        td {
            border: 2px solid #eee;
            padding: 10px;
            box-sizing: border-box;
            input,
            textarea,
            select {
                width: 100%;
                resize: none;
                font-size: 16px;
                padding: 5px;
                box-sizing: border-box;
                text-align: center;
            }
            textarea {
                height: 100px;
            }
        }
        th {
            background: #2191f3;
            color: #fff;
        }
        .btnWrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 10px;
            button {
                width: 70px;
                height: 30px;
                margin-right: 20px;
                cursor: pointer;
            }
        }
    }
`;
