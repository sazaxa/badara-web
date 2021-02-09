import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as FaqAPI from '../lib/api/FAQ';
// faqs
const [
  READ_FAQS,
  READ_FAQS_SUCCESS,
  READ_FAQS_FAILURE,
] = createRequestActionTypes('faq/READ_FAQS');
export const readFaqs = createAction(READ_FAQS);
const readFaqsSaga = createRequestSaga(READ_FAQS, FaqAPI.Read);

export function* faqsSaga() {
  yield takeLatest(READ_FAQS, readFaqsSaga);
}

const initialState = {
  Allfaq: null,
  error: null,
};

const faqs = handleActions(
  {
    [READ_FAQS_SUCCESS]: (state, { payload: Allfaq }) => ({
      ...state,
      Allfaq,
    }),
    [READ_FAQS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default faqs;
