import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as FaqAPI from '../lib/api/FAQ';

const CHANGE_FIELD = 'faq/CHANGE_FIELD';
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, name, value }) => ({
    form,
    name,
    value,
  }),
);
// faqs
const [
  READ_FAQS,
  READ_FAQS_SUCCESS,
  READ_FAQS_FAILURE,
] = createRequestActionTypes('faq/READ_FAQS');

// faq
const [READ_FAQ, READ_FAQ_SUCCESS, READ_FAQ_FAILURE] = createRequestActionTypes(
  'faq/READ_FAQ',
);

const [
  WRITE_FAQ,
  WRITE_FAQ_SUCCESS,
  WRITE_FAQ_FAILURE,
] = createRequestActionTypes('faq/WRITE_FAQ');

export const readFaqs = createAction(READ_FAQS);
const readFaqsSaga = createRequestSaga(READ_FAQS, FaqAPI.Read);

export const readFaq = createAction(READ_FAQ, ({ id }) => ({
  id,
}));
const readFaqSaga = createRequestSaga(READ_FAQ, FaqAPI.ReadFaq);

export const writeFaq = createAction(WRITE_FAQ, ({ title, content }) => ({
  title,
  content,
}));
const writeFaqSaga = createRequestSaga(WRITE_FAQ, FaqAPI.Write);

export function* faqSaga() {
  yield takeLatest(READ_FAQS, readFaqsSaga);
  yield takeLatest(READ_FAQ, readFaqSaga);
  yield takeLatest(WRITE_FAQ, writeFaqSaga);
}

const initialState = {
  Allfaq: null,
  error: null,
  faqFiend: {
    title: '',
    content: '',
  },
  faq: null,
};

const faqs = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, name, value } }) =>
      produce(state, (draft) => {
        draft[form][name] = value;
      }),
    [READ_FAQ_SUCCESS]: (state, { payload: faq }) => ({
      ...state,
      faq,
    }),
    [READ_FAQ_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [READ_FAQS_SUCCESS]: (state, { payload: Allfaq }) => ({
      ...state,
      Allfaq,
    }),
    [READ_FAQS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [WRITE_FAQ_SUCCESS]: (state, { payload: faq }) => ({
      ...state,
      faq,
    }),
    [WRITE_FAQ_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default faqs;
