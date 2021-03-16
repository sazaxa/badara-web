import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call, put, delay } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';

export const [GET_MEMBER_LIST_REQUEST, GET_MEMBER_LIST_SUCCESS, GET_MEMBER_LIST_FAILURE] = createRequestActionTypes(
    'auth/LIST_MEMBER'
);

export const [GET_MEMBER_INFO_REQUEST, GET_MEMBER_INFO_SUCCESS, GET_MEMBER_INFO_FAILURE] = createRequestActionTypes(
    'auth/INFO_MEMBER'
);

export const [GET_MEMBER_CHECK_REQUEST, GET_MEMBER_CHECK_SUCCESS, GET_MEMBER_CHECK_FAILURE] = createRequestActionTypes(
    'user/CHECK'
);
export const LOGOUT = 'auth/LOGOUT';

export const getMemberListAction = createAction(GET_MEMBER_LIST_REQUEST);
export const getMemberInfoAction = createAction(GET_MEMBER_INFO_REQUEST, id => id);
export const getMemberCheckAction = createAction(GET_MEMBER_CHECK_REQUEST);
export const logoutAction = createAction(LOGOUT);

function* getMemberListSaga() {
    // 회원 목록 로직.
    try {
        const { data } = yield call(authAPI.users);
        yield put({ type: GET_MEMBER_LIST_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: GET_MEMBER_INFO_FAILURE, payload: e });
    }
}

function* getMemberInfoSaga({ payload: id }) {
    // 단일 회원 로직.
    try {
        const { data } = yield call(authAPI.user, id);
        yield put({ type: GET_MEMBER_INFO_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: GET_MEMBER_INFO_FAILURE, payload: e });
    }
}

// 토큰값으로 해당 유저 정보 가져오기.
function* checkSaga() {
    try {
        const response = yield call(authAPI.check);
        yield put({ type: GET_MEMBER_CHECK_SUCCESS });
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        window.location.href = '/';
        console.log(response.data);
    } catch (e) {
        yield put({ type: GET_MEMBER_CHECK_FAILURE, payload: e });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
    }
}

// 로그아웃 토큰값 삭제, user store 초기화.
function* logoutSaga() {
    try {
        yield delay(100);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        window.location.href = '/';
    } catch (e) {
        console.debug(e);
    }
}

export function* memberSaga() {
    yield takeLatest(GET_MEMBER_LIST_REQUEST, getMemberListSaga);
    yield takeLatest(GET_MEMBER_INFO_REQUEST, getMemberInfoSaga);
    yield takeLatest(GET_MEMBER_CHECK_REQUEST, checkSaga);
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
        [LOGOUT]: state => {
            return produce(state, draft => {
                draft.memberInfo = initialState.memberInfo;
            });
        },
        [GET_MEMBER_LIST_REQUEST]: state => {
            return produce(state, draft => {
                draft.members.status = 'loading';
            });
        },
        [GET_MEMBER_LIST_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.members.status = 'success';
                draft.members.list = payload;
            });
        },
        [GET_MEMBER_LIST_FAILURE]: state => {
            return produce(state, draft => {
                draft.members.status = 'fail';
            });
        },
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
    },
    initialState
);
