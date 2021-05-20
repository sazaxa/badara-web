import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import member, { memberSaga } from './member';
import order, { orderSaga } from './order';
import faq, { faqSaga } from './faq';
import apply, { applySaga } from './apply';
import part, { partSaga } from './part';
import box, { boxSaga } from './box';
import point, { pointSaga } from './point';
import social, { socialSaga } from './social';
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
    combineReducers({
        auth,
        member,
        order,
        faq,
        apply,
        part,
        box,
        point,
        social,
        router: connectRouter(history),
    });

export function* rootSaga() {
    yield all([
        authSaga(),
        memberSaga(),
        orderSaga(),
        faqSaga(),
        partSaga(),
        applySaga(),
        boxSaga(),
        pointSaga(),
        socialSaga(),
    ]);
}

export default rootReducer;
