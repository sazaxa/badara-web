import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call, put, delay } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';

export const [GET_MEMBER_LIST_REQUEST, GET_MEMBER_LIST_SUCCESS, GET_MEMBER_LIST_FAILURE] = createRequestActionTypes(
    'auth/LIST_MEMBER'
);

export const [GET_MEMBER_INFO_REQUEST, GET_MEMBER_INFO_SUCCESS, GET_MEMBER_INFO_FAILURE] = createRequestActionTypes(
    'user/CHECK'
);
export const LOGOUT = 'auth/LOGOUT';

export const getMemberListAction = createAction(GET_MEMBER_LIST_REQUEST, state => state);
export const getMemberInfoAction = createAction(GET_MEMBER_INFO_REQUEST);
export const logoutAction = createAction(LOGOUT);
// function* getMemberListSaga({ state }) {
//     // 회원 목록 로직.
//     console.debug(state);
// }

// 토큰값으로 해당 유저 정보 가져오기.
function* checkSaga() {
    try {
        const response = yield call(authAPI.check);
        yield put({ type: GET_MEMBER_INFO_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: GET_MEMBER_INFO_FAILURE, payload: e });
    }
}

// 로그아웃 토큰값 삭제, user store 초기화.
function* logoutSaga() {
    try {
        yield delay(1000);
        localStorage.removeItem('accessToken');
    } catch (e) {
        console.debug(e);
    }
}

export function* memberSaga() {
    // yield takeLatest(GET_MEMBER_LIST_REQUEST, getMemberListSaga);
    yield takeLatest(GET_MEMBER_INFO_REQUEST, checkSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    members: {
        status: 'idle',
        list: [],
    },
    memberInfo: {
        member: null,
        error: null,
    },
};

export default handleActions(
    {
        [GET_MEMBER_INFO_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.memberInfo.member = payload;
            });
        },
        [GET_MEMBER_INFO_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.memberInfo.error = payload;
            });
        },
        [LOGOUT]: state => {
            return produce(state, draft => {
                draft.memberInfo = initialState.memberInfo;
            });
        },
    },
    initialState
);
