import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth, { authSaga } from './auth';
import member, { memberSaga } from './member';
import order, { orderSaga } from './order';
import faq, { faqSaga } from './faq';
import apply, { applySaga } from './apply';
import part, { partSaga } from './part';
import product, { productSaga } from './product';

const rootReducer = combineReducers({
    auth,
    member,
    order,
    faq,
    apply,
    part,
    product,
});

export function* rootSaga() {
    yield all([authSaga(), memberSaga(), orderSaga(), faqSaga(), partSaga(), applySaga(), productSaga()]);
}

export default rootReducer;
