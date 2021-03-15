import { CalculatorContainer } from 'containers/index';
import React from 'react';
import { Responsive } from 'styles/CommonStyles';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';

const MainCalculator = styled(CalculatorContainer)`
    width: 50%;
`;
const MainWrap = styled.article`
    width: 1140px;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    & > article:first-child {
        width: 100%;
        display: flex;
    }
    & > article:last-child {
        width: 100%;
        display: flex;
    }
    & > article > button {
        display: flex;
        justify-content: center;
        align-items: center;
        // flex-wrap: wrap;
        width: 100%;
        height: 150px;
        background-color: rgb(130, 188, 226);
        color: #fff;
        border: none;
        font-size: 30px;
        outline: none;
        cursor: pointer;
    }
    & > article > button.applybtn {
        // margin-bottom: 50px;
        background-color: #1976d2;
    }
    & > article > button > .MuiSvgIcon-root {
        font-size: 45px;
        margin-right: 10px;
    }
`;

const MainContentComponent = () => {
    return (
        <Responsive>
            <MainWrap>
                <MainCalculator />
            </MainWrap>
        </Responsive>
    );
};

export default MainContentComponent;
