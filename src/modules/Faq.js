import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as FaqAPI from '../lib/api/FAQ';

// 모든 내용 초기화
const INITIALIZE = 'faq/INITIALIZE'; // 모든 내용 초기화
export const initialize = createAction(INITIALIZE);
// faq
const [READ_FAQ, READ_FAQ_SUCCESS, READ_FAQ_FAILURE] = createRequestActionTypes(
  'faq/READ_FAQ',
);
export const readFaq = createAction(READ_FAQ, (id) => id);
const readFaqSaga = createRequestSaga(READ_FAQ, FaqAPI.ReadFaq);
export function* faqSaga() {
  yield takeLatest(READ_FAQ, readFaqSaga);
}

const initialState = {
  error: null,
  faq: {
    title: null,
    content: null,
  },
};

const faqReducer = handleActions(
  {
    [INITIALIZE]: (state) => () => ({
      faq: null,
    }),

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

export default faqReducer;
