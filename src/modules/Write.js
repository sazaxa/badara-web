import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
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
// FAQ 등록
const [
  WRITE_FAQ,
  WRITE_FAQ_SUCCESS,
  WRITE_FAQ_FAILURE,
] = createRequestActionTypes('faq/WRITE_FAQ');

export const writeFaq = createAction(WRITE_FAQ, ({ title, content }) => ({
  title,
  content,
}));
const writeFaqSaga = createRequestSaga(WRITE_FAQ, FaqAPI.Write);

export function* wirteSaga() {
  yield takeLatest(WRITE_FAQ, writeFaqSaga);
}

const initialState = {
  faqFiend: {
    title: '',
    content: '',
  },
};

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, name, value } }) =>
      produce(state, (draft) => {
        draft[form][name] = value;
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

export default write;
