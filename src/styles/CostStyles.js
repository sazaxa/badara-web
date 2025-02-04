import styled from 'styled-components';

export const CostWrap = styled.article`
    width: 1140px;
    margin: 0 auto;
    @media screen and (max-width: 1140px) {
        width: 100%;
    }
`;

export const CostTable = styled.table`
    width: 100%;
    height: 100%;

    margin-top: 30px;
    border-collapse: collapse;
    th,
    td {
        border: 1px solid #ccc;
        height: 60px;
        text-align: center;
        width: 50%;
        @media screen and (max-width: 1140px) {
            height: 40px;
        }
    }
    & > thead {
        width: 100%;
    }
    & > thead > tr {
        & > th {
            color: #0049ff;
        }
        & > th:first-child {
            background: #0049ff;
            color: #fff;
        }
    }
`;
