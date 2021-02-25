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
import { getMemberInfoAction } from 'store/member';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
export function loadUser() {
    try {
        const user = localStorage.getItem('accessToken');
        console.log(user);
        if (!user) return;
        store.dispatch(getMemberInfoAction());
    } catch (e) {
        console.log(e);
    }
}

sagaMiddleWare.run(rootSaga);
loadUser();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
