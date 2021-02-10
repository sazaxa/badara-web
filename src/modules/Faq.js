import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as FaqAPI from '../lib/api/FAQ';

// 모든 내용 초기화
const INITIALIZE = 'faq/INITIALIZE'; // 모든 내용 초기화
export const initializeFAQ = createAction(INITIALIZE);
const CHANGE_UPDATE_FIELD = 'faq/CHANGE_UPDATE_FIELD';
export const changeField = createAction(
  CHANGE_UPDATE_FIELD,
  ({ form, name, value }) => ({
    form,
    name,
    value,
  }),
);
// faq
const [READ_FAQ, READ_FAQ_SUCCESS, READ_FAQ_FAILURE] = createRequestActionTypes(
  'faq/READ_FAQ',
);
// 업데이트
const [
  UPDATE_FAQ,
  UPDATE_FAQ_SUCCESS,
  UPDATE_FAQ_FAILURE,
] = createRequestActionTypes('faq/UPDATE_FAQ');
export const readFaq = createAction(READ_FAQ, (id) => id);
const readFaqSaga = createRequestSaga(READ_FAQ, FaqAPI.ReadFaq);

export const updateFaq = createAction(UPDATE_FAQ, ({ id, title, content }) => ({
  id,
  title,
  content,
}));
const updateFaqSaga = createRequestSaga(UPDATE_FAQ, FaqAPI.Update);

export function* faqSaga() {
  yield takeLatest(READ_FAQ, readFaqSaga);
  yield takeLatest(UPDATE_FAQ, updateFaqSaga);
}

const initialState = {
  error: null,
  faq: {
    id: null,
    title: null,
    content: null,
  },
  faqField: {
    title: '',
    content: '',
  },
  statusUpdate: null,
};

const faqReducer = handleActions(
  {
    [INITIALIZE]: (state) => () => ({
      faq: null,
    }),
    [CHANGE_UPDATE_FIELD]: (state, { payload: { form, name, value } }) =>
      produce(state, (draft) => {
        draft[form][name] = value;
      }),
    [READ_FAQ_SUCCESS]: (state, { payload: faq, payload: faqField }) => ({
      ...state,
      faq,
      faqField,
    }),
    [READ_FAQ_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UPDATE_FAQ_SUCCESS]: (state, { payload: faq, status: statusUpdate }) => ({
      ...state,
      faq,
      statusUpdate,
    }),
    [UPDATE_FAQ_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default faqReducer;
