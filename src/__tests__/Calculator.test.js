import { render, fireEvent } from '@testing-library/react';
import { CalculatorComponent } from 'components/index';
import { CalculatorContainer } from 'containers';
import { BrowserRouter } from 'react-router-dom';

const material = CalculatorContainer;
const CountryLists = ['USA', 'KOREA'];
describe('계산기', () => {
    it('계산기 계산 버튼이 있는지 확인', () => {
        const utils = render(
            <BrowserRouter>
                <CalculatorComponent Material={material} CountryLists={CountryLists} />
            </BrowserRouter>
        );
        utils.getByText('계산');
    });
    it('부피무게 인풋 placehoder는?', () => {
        const utils = render(
            <BrowserRouter>
                <CalculatorComponent Material={material} CountryLists={CountryLists} />
            </BrowserRouter>
        );
        utils.getByPlaceholderText('부피무게');
    });
    // it('부피무게 계산하기', () => {
    //     const utils = render(
    //         <BrowserRouter>
    //             <CalculatorComponent Material={material} CountryLists={CountryLists} />
    //         </BrowserRouter>
    //     );
    //     const widthInput = utils.getByPlaceholderText('가로');
    //     const heightInput = utils.getByPlaceholderText('세로');
    //     const DepthInput = utils.getByPlaceholderText('높이');
    //     const volumeInput = utils.getByPlaceholderText('부피무게');
    //     const button = utils.getByPlaceholderText('부피무게');
    // });
});
