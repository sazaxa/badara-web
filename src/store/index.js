import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth, { authSaga } from './auth';
import member, { memberSaga } from './member';
import order, { orderSaga } from './order';
import faq, { faqSaga } from './faq';
import apply, { applySaga } from './apply';
import part, { partSaga } from './part';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
    auth,
    member,
    order,
    faq,
    apply,
    part,
    user,
});

export function* rootSaga() {
    yield all([authSaga(), memberSaga(), orderSaga(), faqSaga(), partSaga(), applySaga(), userSaga()]);
}

export default rootReducer;
