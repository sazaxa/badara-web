import styled from 'styled-components';

export const DetailWrap = styled.article`
    width: 100%;
    padding: 50px;
    box-sizing: border-box;
    table,
    tr,
    th,
    td {
        border: 1px solid #ccc;
        border-collapse: collapse;
        text-align: center;
        height: 50px;
        background: #fff;
        font-size: 18px;
        letter-spacing: -1.5px;
    }
    a {
        width: 100%;
        height: 100%;
        display: flex;
        color: #000;
    }
    table {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-bottom: 50px;
    }
    th {
        background: #2191f3;
        color: #fff;
    }
    .orderInfo > thead > tr,
    .orderInfo > tbody > tr {
        width: 100%;
        display: flex;
    }
    .orderInfo > thead > tr > th,
    .orderInfo > tbody > tr td {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title {
        display: flex;
        align-items: flex-end;
        margin-bottom: 10px;
    }
`;

export const ListWrap = styled.article`
    width: 100%;
    padding: 0 50px 50px;
    box-sizing: border-box;
    a {
        color: #000;
        font-weight: 600;
    }
`;
