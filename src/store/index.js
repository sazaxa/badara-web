import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth, { authSaga } from './auth';
import member, { memberSaga } from './member';
import order, { orderSaga } from './order';
import faq, { faqSaga } from './faq';
import delivery, { deliverySaga } from './delivery';

const rootReducer = combineReducers({
    auth,
    member,
    order,
    faq,
    delivery,
});

export function* rootSaga() {
    yield all([authSaga(), memberSaga(), orderSaga(), faqSaga(), deliverySaga()]);
}

export default rootReducer;
