import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import produce from 'immer';
import * as authAPI from '../lib/api/auth';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';

export const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK');

export const check = createAction(CHECK);

function* checkSaga() {
    try {
        const response = yield call(authAPI.check);
        yield put({ type: CHECK_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: CHECK_FAILURE, payload: e });
    }
}
export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
}
const initialState = {
    user: null,
    checkError: null,
};

export default handleActions(
    {
        [CHECK_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.user = payload;
            });
        },
    },
    initialState
);
