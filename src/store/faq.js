import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import * as FaqAPI from 'lib/api/FAQ';

export const [GET_FAQ_LIST, GET_FAQ_LIST_SUCCESS, GET_FAQ_LIST_FAILURE] = createRequestActionTypes('faq/GET_FAQ_LIST');
export const [GET_FAQ_INFO, GET_FAQ_INFO_SUCCESS, GET_FAQ_INFO_FAILURE] = createRequestActionTypes('faq/GET_FAQ_INFO');
export const [DELETE_FAQ, DELETE_FAQ_SUCCESS, DELETE_FAQ_FAILURE] = createRequestActionTypes('faq/DELETE_FAQ');
const CLEAR_FAQ_INFO = 'faq/CLEAR_FAQ_INFO';
const CHANGE_FAQ_INFO = 'faq/CHANGE_FAQ_INFO';
const SAVE_FAQ = 'faq/SAVE_FAQ';
const UPDATE_FAQ_INFO = 'faq/UPDATE_FAQ_INFO';

export const getFaqListAction = createAction(GET_FAQ_LIST, state => state);
export const clearFaqInfoAction = createAction(CLEAR_FAQ_INFO);
export const changeFaqInfoAction = createAction(CHANGE_FAQ_INFO);
export const saveFaqAction = createAction(SAVE_FAQ, ({ title, content, callBack }) => ({ title, content, callBack }));
export const updateFaqInfoAction = createAction(UPDATE_FAQ_INFO, ({ callBack }) => ({ callBack }));
export const deleteFaqAction = createAction(DELETE_FAQ, ({ faqs, callBack }) => ({ faqs, callBack }));
export const getFaqInfoAction = createAction(GET_FAQ_INFO, ({ id }) => ({
    id,
}));

function* getFaqListSaga() {
    const { status, data } = yield call(FaqAPI.get);
    if (status === 200) {
        yield put({ type: GET_FAQ_LIST_SUCCESS, payload: data });
    } else {
        yield put({ type: GET_FAQ_LIST_FAILURE });
    }
}

function* saveFaqSaga({ payload: { title, content, callBack } }) {
    const { status } = yield call(FaqAPI.Write, { title, content });

    if (callBack instanceof Function) {
        callBack({
            result: status === 201 ? true : false,
        });
    } else {
        alert('처리중 문제 발생했습니다.');
    }
}

function* getFaqInfoSaga({ payload: { id } }) {
    const { status, data } = yield call(FaqAPI.getInfo, { id: id });
    if (status === 200) {
        yield put({ type: GET_FAQ_INFO_SUCCESS, payload: { id: id, ...data } });
    } else {
        alert('처리중 문제 발생했습니다.');
    }
}

function* updateFaqSaga({ payload: { callBack } }) {
    const faqinfo = yield select(store => store.faq.faqinfo);
    const { status } = yield call(FaqAPI.Update, { ...faqinfo });

    if (callBack instanceof Function) {
        callBack({
            result: status === 200 ? true : false,
        });
    } else {
        alert('처리중 문제 발생했습니다.');
    }
}

function* deleteFaqsSaga({ payload: { faqs, callBack } }) {
    yield all(faqs.map(e => call(FaqAPI.Delete, { id: e })));
    if (callBack instanceof Function) {
        callBack({
            result: true,
        });
    } else {
        alert('처리중 문제 발생했습니다.');
    }
}

export function* faqSaga() {
    yield takeLatest(GET_FAQ_LIST, getFaqListSaga);
    yield takeLatest(SAVE_FAQ, saveFaqSaga);
    yield takeLatest(GET_FAQ_INFO, getFaqInfoSaga);
    yield takeLatest(UPDATE_FAQ_INFO, updateFaqSaga);
    yield takeLatest(DELETE_FAQ, deleteFaqsSaga);
}

export const initialState = {
    faqs: {
        status: 'idle',
        list: [],
    },
    faqinfo: {
        id: null,
        title: '',
        content: '',
    },
};

export default handleActions(
    {
        [GET_FAQ_LIST]: state => {
            return produce(state, draft => {
                draft.faqs.status = 'loading';
                draft.faqs.list = [];
            });
        },
        [GET_FAQ_LIST_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.faqs.status = 'success';
                draft.faqs.list = payload;
            });
        },
        [GET_FAQ_LIST_FAILURE]: state => {
            return produce(state, draft => {
                draft.faqs.status = 'fail';
                draft.faqs.list = [];
            });
        },
        [GET_FAQ_INFO_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.faqinfo = payload;
            });
        },
        [CHANGE_FAQ_INFO]: (state, { payload }) => {
            return produce(state, draft => {
                draft.faqinfo = payload;
            });
        },
        [CLEAR_FAQ_INFO]: state => {
            return produce(state, draft => {
                draft.faqinfo = initialState.faqinfo;
            });
        },
    },
    initialState
);
