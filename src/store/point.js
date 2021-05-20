import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as pointAPI from '../lib/api/point';

// 포인트 리스트 불러오기
const [GET_POINT_LIST, GET_POINT_LIST_SUCCESS, GET_POINT_LIST_FAILURE] = createRequestActionTypes(
    'point/GET_POINT_LIST'
);

// 포인트 리스트 세팅 저장하기
const [POST_POINT_LIST, POST_POINT_LIST_SUCCESS, POST_POINT_LIST_FAILURE] = createRequestActionTypes(
    'point/POST_POINT_LIST'
);

// 포인트 관리자 지급하기
const [POST_POINT_INSERT, POST_POINT_INSERT_SUCCESS, POST_POINT_INSERT_FAILURE] = createRequestActionTypes(
    'point/POST_POINT_INSERT'
);
// 상태 리셋

const POINT_STATUS_RESET = 'point/POINT_STATUS_REST';
// 포인트 리스트 불러오기 ACTION Type
export const getPointListAction = createAction(GET_POINT_LIST);

export const savePointListAction = createAction(POST_POINT_LIST, ({ data }) => ({ data }));

export const postPointInsertAction = createAction(POST_POINT_INSERT, ({ id, pointData }) => ({ id, pointData }));

export const pointStatusResetAction = createAction(POINT_STATUS_RESET);
const initialState = {
    status: 'idle',
    data: null,
    error: null,
};

function* getPointSaga() {
    try {
        const response = yield call(pointAPI.getPoint);
        yield put({ type: GET_POINT_LIST_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: GET_POINT_LIST_FAILURE, payload: e });
    }
}

function* savePointSaga({ payload: { data } }) {
    try {
        const response = yield call(pointAPI.savePoint, data);
        yield put({ type: POST_POINT_LIST_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: POST_POINT_LIST_FAILURE, payload: e });
    }
}

function* insertPointSaga({ payload: { pointData, id } }) {
    try {
        const response = yield call(pointAPI.insertPoint, { id, pointData });
        yield put({ type: POST_POINT_INSERT_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: POST_POINT_INSERT_FAILURE });
    }
}
export function* pointSaga() {
    yield takeLatest(GET_POINT_LIST, getPointSaga);
    yield takeLatest(POST_POINT_LIST, savePointSaga);
    yield takeLatest(POST_POINT_INSERT, insertPointSaga);
}

export default handleActions(
    {
        [GET_POINT_LIST]: state => {
            return produce(state, draft => {
                draft.status = 'loading';
            });
        },
        [GET_POINT_LIST_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.status = '성공';
                draft.data = payload;
            });
        },
        [GET_POINT_LIST_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.status = 'fail';
                draft.error = payload;
            });
        },
        [POST_POINT_LIST]: state => {
            return produce(state, draft => {
                draft.status = 'loading';
            });
        },
        [POST_POINT_LIST_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.status = 'success';
                draft.data = payload;
            });
        },
        [POST_POINT_LIST_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.status = 'fail';
                draft.error = payload;
            });
        },
        [POINT_STATUS_RESET]: state => {
            return produce(state, draft => {
                draft.status = 'idle';
            });
        },
    },
    initialState
);
