import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import popup from './Popup';
import auth from './auth';
import faqs, { faqSaga } from './Faq';

const rootReducer = combineReducers({
  popup,
  auth,
  faqs,
});

export function* rootSaga() {
  yield all([faqSaga()]);
}

export default rootReducer;
