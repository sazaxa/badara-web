import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import popup from './Popup';
import auth from './auth';
import faqReducer, { faqSaga } from './Faq';
import write, { wirteSaga } from './Write';
import faqs, { faqsSaga } from './Faqs';

const rootReducer = combineReducers({
  popup,
  auth,
  faqs,
  faqReducer,
  write,
});

export function* rootSaga() {
  yield all([faqSaga(), wirteSaga(), faqsSaga()]);
}

export default rootReducer;
