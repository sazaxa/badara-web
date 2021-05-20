import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer, { rootSaga } from './store';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    rootReducer,
    `${process.env.REACT_APP_ENV}` === 'prod'
        ? applyMiddleware(sagaMiddleWare, routerMiddleware(history))
        : composeWithDevTools(applyMiddleware(sagaMiddleWare, routerMiddleware(history)))
);
sagaMiddleWare.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
