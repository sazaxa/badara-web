import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { call, takeLatest } from 'redux-saga/effects';
import * as applyAPI from '../lib/api/apply';

// 신청 목록 Action Types.
const APPLY_LIST = 'order/APPLY_LIST';
// 신청 목록 삭제 Action Types.
const DELETE_APPLY_INFO = 'order/DELETE_APPLY_INFO';
// 신청하기 Action Types.
const APPLY_LIST_INSERT = 'order/APPLY_LIST_INSERT';

export const applyListAction = createAction(APPLY_LIST, applyData => applyData);
export const applyListInsertAction = createAction(APPLY_LIST_INSERT, list => list);
export const deleteApplyInfoAction = createAction(DELETE_APPLY_INFO, index => index);

function* applyListInsertSaga({ payload: list }) {
    console.log(list.list);
    yield call(applyAPI.post, list.list);
}

export function* applySaga() {
    yield takeLatest(APPLY_LIST_INSERT, applyListInsertSaga);
}

const initialState = {
    apply: {
        list: [],
    },
};

export default handleActions(
    {
        [APPLY_LIST]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.list.push(payload);
            });
        },
        [DELETE_APPLY_INFO]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.list.splice(payload, 1);
            });
        },
        [APPLY_LIST_INSERT]: state => {
            return produce(state, draft => {
                draft.apply.list = initialState.apply.list;
            });
        },
    },
    initialState
);
