import { render, fireEvent } from '@testing-library/react';
import { CalculatorComponent } from 'components/index';
import { CalculatorContainer } from 'containers';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from 'store/index';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from 'store/index';

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
    it('부피무게 계산하기', () => {
        const sagaMiddleWare = createSagaMiddleware();
        const store = createStore(
            rootReducer,
            `${process.env.REACT_APP_ENV}` === 'prod'
                ? applyMiddleware(sagaMiddleWare)
                : composeWithDevTools(applyMiddleware(sagaMiddleWare))
        );
        sagaMiddleWare.run(rootSaga);
        const utils = render(
            <Provider store={store}>
                <BrowserRouter>
                    <CalculatorContainer />
                </BrowserRouter>
            </Provider>
        );
        const widthInput = utils.getByPlaceholderText('가로');
        const heightInput = utils.getByPlaceholderText('세로');
        const DepthInput = utils.getByPlaceholderText('높이');
        const volumeInput = utils.getByPlaceholderText('부피무게');
        const button = utils.getByText('계산');
        fireEvent.change(widthInput, { target: { value: '10' } });
        fireEvent.change(heightInput, { target: { value: '10' } });
        fireEvent.change(DepthInput, { target: { value: '10' } });
        fireEvent.click(button);
        expect(volumeInput.value).toEqual('0.2');
    });
});
