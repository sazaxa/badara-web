import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as FaqAPI from '../lib/api/FAQ';

const [READ_FAQ, READ_FAQ_SUCCESS, READ_FAQ_FAILURE] = createRequestActionTypes(
  'faq/READ_FAQ',
);

export const readFaq = createAction(READ_FAQ);

const readFaqSaga = createRequestSaga(READ_FAQ, FaqAPI.Read);

export function* faqSaga() {
  yield takeLatest(READ_FAQ, readFaqSaga);
}

const initialState = {
  faq: null,
  error: null,
};

const faqs = handleActions(
  {
    [READ_FAQ_SUCCESS]: (state, { payload: faq }) => ({
      ...state,
      faq,
    }),
    [READ_FAQ_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default faqs;
