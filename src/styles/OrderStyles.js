import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

export const OrderWrap = styled(Responsive)`
    width: 100%;
    height: 100%;
    padding: 50px;
    box-sizing: border-box;
    margin-left: 300px;
    select {
        text-align: center;
        text-align-last: center;
    }
    a {
        color: #000;
        font-weight: 600;
    }
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
    .MuiTab-textColorPrimary.Mui-selected {
        color: #2191f3;
    }
    .PrivateTabIndicator-colorPrimary-3 {
        background-color: #2191f3;
    }
    .MuiBox-root-6 {
        padding: 0;
        margin-top: 30px;
    }
`;

export const PrintWrap = styled.div`
    /* 프린트 */
    margin: 0 auto;
    .print_ordersheet_page {
        margin: 0;
        padding: 0;
        width: 100%;
    }
    .print_ordersheet_page .print_ordersheet_page_head {
        padding: 15px 20px;
        width: 100%;
        background-color: #0855f9;
        color: #ffffff;
        font-weight: 600;
        font-size: 24px;
        position: relative;
    }
    @media screen and (max-width: 600px) {
        .print_ordersheet_page .print_ordersheet_page_head {
            font-size: 16px;
        }
    }

    .print_ordersheet_page .print_ordersheet_page_head .print_button {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        border: 1px solid #ffffff;
        background-color: #0855f9;
        color: #ffffff;
        padding: 6px 10px;
        line-height: 1.5;
    }

    .print_ordersheet_page .print_ordersheet_page_head .print_button i {
        margin-right: 5px;
        font-size: 20px;
    }

    .print_ordersheet_page .Deviver {
        margin: 30px 20px;
        background-color: #f6f9ff;
        border: 1px solid #0a40ff;
        padding: 0;
    }
    .print_ordersheet_page .Deviver .padding_none {
        padding: 0;
    }
    .print_ordersheet_page .Deviver .padding_none .image {
        padding: 20px 0 20px 20px;
        text-align: center;
    }

    .print_ordersheet_page .Deviver .padding_none .image img {
        max-width: 100%;
    }

    .print_ordersheet_page .Deviver .description {
        padding: 10px 0;
    }

    .print_ordersheet_page .Deviver .description span {
        font-size: 14px;
        margin-bottom: 15px;
        color: #000000;
        font-weight: 500;
    }

    .print_ordersheet_page .Deviver .description p {
        padding: 0;
        margin: 0;
        color: #000000;
        font-weight: 500;
    }

    .print_ordersheet_page .order_number {
        background-color: #717171;
        padding: 15px;
        margin-bottom: 20px;
        margin-right: 20px;
        margin-left: 20px;
    }

    .print_ordersheet_page .order_number h6 {
        color: #ffffff;
        font-weight: 600;
        padding: 0;
        margin: 0;
    }

    .print_ordersheet_page .order_table {
        padding-left: 20px;
        margin-bottom: 30px;
    }

    .print_ordersheet_page .order_table p {
        color: #000000;
        font-weight: 600;
        padding: 0;
        margin: 0 0 5px 0;
    }

    .print_ordersheet_page .order_table table {
        border: 1px solid #cccccc;
    }

    .print_ordersheet_page .order_table table thead {
        border: none !important;
        text-align: left;
    }

    .print_ordersheet_page .order_table table thead tr th {
        font-weight: 400;
        font-size: 14px;
        vertical-align: bottom;
        border: 1px solid #cccccc;
        color: #000000;
    }

    .print_ordersheet_page .order_table tbody tr td {
        font-size: 14px;
        border: 1px solid #cccccc;
        color: #000000;
    }
    .print_ordersheet_page .order_table .one_talbe {
        margin-bottom: 20px;
        margin-top: 46px;
    }
    .print_ordersheet_page .order_table .one_talbe tbody tr td {
        font-size: 14px;
        border: 1px solid #cccccc;
        color: #000000;
    }
    .print_ordersheet_page .order_table .one_talbe tbody tr td:first-child {
        background-color: #f5f5f5;
        width: 126px;
        color: #000000;
    }
    .print_ordersheet_page .order_table_right {
        padding-right: 20px;
        margin-bottom: 30px;
    }
    .print_ordersheet_page .order_table_right p {
        color: #000000;
        font-weight: 600;
        padding: 0;
        margin: 0 0 5px 0;
    }
    .print_ordersheet_page .order_table_right table {
        border: 1px solid #cccccc;
    }
    .print_ordersheet_page .order_table_right table thead {
        border: none !important;
        text-align: left;
    }
    .print_ordersheet_page .order_table_right table thead tr th {
        font-weight: 400;
        font-size: 14px;
        vertical-align: bottom;
        border: 1px solid #cccccc;
        color: #000000;
    }
    .print_ordersheet_page .order_table_right tbody tr td {
        font-size: 14px;
        border: 1px solid #cccccc;
        color: #000000;
    }
    .print_ordersheet_page .full_table {
        padding-right: 20px;
        padding-left: 20px;
        margin-bottom: 30px;
    }
    .print_ordersheet_page .full_table table {
        border: 1px solid #cccccc;
    }
    .print_ordersheet_page .full_table table thead {
        border: none !important;
        text-align: left;
    }
    .print_ordersheet_page .full_table table thead tr th {
        font-weight: 400;
        font-size: 14px;
        vertical-align: bottom;
        border: 1px solid #cccccc;
        color: #000000;
        text-align: center;
    }
    .print_ordersheet_page .full_table tbody tr td:first-child {
        font-size: 14px;
        border: 1px solid #cccccc;
        color: #000000;
        text-align: left;
    }
    .print_ordersheet_page .full_table tbody tr td {
        font-size: 14px;
        border: 1px solid #cccccc;
        color: #000000;
        text-align: center;
    }
    .print_ordersheet_page .full_table .list p {
        margin: 0;
    }
    .print_ordersheet_page .full_table1 {
        padding-right: 20px;
        padding-left: 20px;
    }
    .print_ordersheet_page .full_table1 table {
        border: 1px solid #cccccc;
    }
    .print_ordersheet_page .full_table1 table thead {
        border: none !important;
        text-align: left;
    }
    .print_ordersheet_page .full_table1 table thead tr th {
        font-weight: 400;
        font-size: 14px;
        vertical-align: bottom;
        border: 1px solid #cccccc;
        color: #000000;
        text-align: center;
    }
    .print_ordersheet_page .full_table1 tbody tr:nth-child(2) {
        background-color: #f5f5f5 !important;
    }
    .print_ordersheet_page .full_table1 tbody tr td {
        font-size: 14px;
        border: 1px solid #cccccc;
        color: #000000;
        text-align: center;
    }

    /* order sheet list new */
    .userInformation p,
    .userInformation h3,
    .orderInformation p,
    .orderInformation h5 {
        margin-top: 0;
        margin-bottom: 0;
        letter-spacing: -0.5px;
    }

    .orderInformation h5 {
        font-weight: 600;
        font-size: 17px;
    }
    .orderInformation {
        padding: 1rem 0;
    }
    .userInformation {
        padding: 0 0 20px 0;
    }
    .userInformation h3 {
        font-size: 1.3rem;
        line-height: 1.5;
    }
    .orderDetail {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        border: 1px solid #000;
        margin: 30px 0;
        padding: 15px 0;
        font-size:0.9rem;
    }
    .orderDetail > div {
        width: 33%;
        text-align: center;
    }
    .orderDetail > div:nth-child(2),
    .orderDetail > div:nth-child(3) {
        /* width:100%; */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .orderDetail > div > p {
        width: 100%;
    }
    .productsInfo,
    .boxsInfo {
        overflow-x: auto;
        overflow-y: hidden;
        margin-bottom: 2rem;
        h2 {
            margin-bottom: 1rem;
        }
    }
    .productsInfo > table,
    .boxsInfo > table {
        width: 100%;
        text-align: center;
        /* min-width:670px; */
        border-collapse: collapse;
    }
    .productsInfo > table th,
    .boxsInfo > table th {
        width: 12.5%;
    }
    .productsInfo > table > thead,
    .boxsInfo > table > thead {
        border-top: 2px solid black;
        background-color: #f5f5f5;
        text-align: center;
    }
    .productsInfo > table > thead > tr,
    .boxsInfo > table > thead > tr {
        height: 40px;
        font-size: 0.8rem;
    }
    .productsInfo > table > tbody > tr,
    .boxsInfo > table > tbody > tr {
        height: 40px;
        border-bottom: 1px solid #cccccc;
        font-size: 0.8rem;
    }
    .productsInfo > table > tbody > tr > td > strong.totalOrder {
        width: 118.7px;
        display: inline-block;
        margin-right: 5px;
        text-align: right;
        font-size: 15px;
    }
    .productsInfo > table > tbody > tr > td > span {
        width: 40px;
        display: inline-block;
        text-align: left;
        font-size: 15px;
    }
    .total {
        text-align: right;
        margin: 10px 0;
    }
    .total > p > strong {
        width: 118.75px;
        display: inline-block;
    }
    .total > p > span {
        width: 60px;
        display: inline-block;
        text-align: left;
    }
    .printBtn a {
        display: block;
        width: 100%;
        height: 100%;
    }
    .printBtn button {
        float: right;
    }
    .head {
        display: flex;
        justify-content: space-between;
    }
    .btnWrap {
        width: 128px;
    }
    .btnWrap button {
        width: 128px;
    }
    .page {
        width: 21cm;
        min-height: 29.7cm;
        padding: 1cm;
        // margin: 0 auto;
        margin-bottom: 50px;
        /* margin: 1cm auto; */
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
    .subpage {
        /* padding: 1cm; */
        // height: 100%;
    }
    }
`;
