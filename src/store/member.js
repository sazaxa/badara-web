import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call, put, delay } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';

const [GET_MEMBER_LIST_REQUEST, GET_MEMBER_LIST_SUCCESS, GET_MEMBER_LIST_FAILURE] = createRequestActionTypes(
    'auth/LIST_MEMBER'
);

const [GET_MEMBER_ORDER_REQUEST, GET_MEMBER_ORDER_SUCCESS, GET_MEMBER_ORDER_FAILURE] = createRequestActionTypes(
    'auth/MEMBER_ORDER'
);

const [
    GET_MEMBER_POINT_HISTORY_REQUEST,
    GET_MEMBER_POINT_HISTORY_SUCCESS,
    GET_MEMBER_POINT_HISTORY_FAILURE,
] = createRequestActionTypes('user/GET_MEMBER_POINT_HISTORY');

const [GET_MEMBER_INFO_REQUEST, GET_MEMBER_INFO_SUCCESS, GET_MEMBER_INFO_FAILURE] = createRequestActionTypes(
    'auth/MEMBER_INFO'
);

const [GET_MEMBER_CHECK_REQUEST, GET_MEMBER_CHECK_SUCCESS, GET_MEMBER_CHECK_FAILURE] = createRequestActionTypes(
    'user/CHECK'
);

const [
    PUT_PASSWORD_MODIFY_REQUEST,
    PUT_PASSWORD_MODIFY_SUCCESS,
    PUT_PASSWORD_MODIFY_FAILURE,
] = createRequestActionTypes('user/PASSWORD_MDDIFY');

const [GET_ADMIN_CHECK_REQUEST, GET_ADMIN_CHECK_SUCCESS, GET_ADMIN_CHECK_FAILURE] = createRequestActionTypes(
    'admin/CHECK'
);
export const LOGOUT = 'auth/LOGOUT';
export const [ADMIN_LOGOUT, ADMIN_LOGOUT_SUCCESS, ADMIN_LOGOUT_FAILURE] = createRequestActionTypes('auth/ADMIN_LOGOUT');

export const getMemberListAction = createAction(GET_MEMBER_LIST_REQUEST);
export const getMemberInfoAction = createAction(GET_MEMBER_INFO_REQUEST, id => id);
export const getMemberPointHistoryAction = createAction(GET_MEMBER_POINT_HISTORY_REQUEST, id => id);
export const getMemberOrderAction = createAction(GET_MEMBER_ORDER_REQUEST, id => id);
export const getMemberCheckAction = createAction(GET_MEMBER_CHECK_REQUEST);
export const putPasswordModfiyAction = createAction(PUT_PASSWORD_MODIFY_REQUEST, ({ id, data }) => ({ id, data }));
export const getAdminCheckAction = createAction(GET_ADMIN_CHECK_REQUEST);
export const logoutAction = createAction(LOGOUT);
export const adminLogoutAction = createAction(ADMIN_LOGOUT);

function* getMemberListSaga() {
    // 회원 목록 로직.
    try {
        const { data } = yield call(authAPI.users);
        yield put({ type: GET_MEMBER_LIST_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: GET_MEMBER_LIST_FAILURE, payload: e });
    }
}
function* getMemberInfoSaga({ payload: id }) {
    // 회원 목록 로직.
    try {
        const { data } = yield call(authAPI.user, id);
        yield put({ type: GET_MEMBER_INFO_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: GET_MEMBER_INFO_FAILURE, payload: e });
    }
}

function* getMemberOrderSaga({ payload: id }) {
    // 단일 회원
    try {
        const { data } = yield call(authAPI.userOrders, id);
        yield put({ type: GET_MEMBER_ORDER_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: GET_MEMBER_ORDER_FAILURE, payload: e });
        // localStorage.removeItem('accessToken');
        // window.location.href = '/';
    }
}

function* putPasswordModifyrSaga({ payload: { id, data } }) {
    // 비밀번호
    try {
        const response = yield call(authAPI.passwordModify, { id, data });
        yield put({ type: PUT_PASSWORD_MODIFY_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: PUT_PASSWORD_MODIFY_FAILURE, payload: e });
        // localStorage.removeItem('accessToken');
        // window.location.href = '/';
    }
}

// 토큰값으로 해당 유저 정보 가져오기.
function* checkSaga() {
    try {
        localStorage.removeItem('accessTokenAdmin');
        const response = yield call(authAPI.check);
        yield put({ type: GET_MEMBER_CHECK_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: GET_MEMBER_CHECK_FAILURE, payload: e });
        localStorage.removeItem('accessToken');
        window.location.href = '/';
    }
}

// 토큰값으로 관리자 확인하기.
function* adminCheckSaga() {
    try {
        const response = yield call(authAPI.adminCheck);
        yield put({ type: GET_ADMIN_CHECK_SUCCESS, payload: response.data });
        // window.location.href = '/admin/user';
    } catch (e) {
        yield put({ type: GET_ADMIN_CHECK_FAILURE, payload: e });
        localStorage.removeItem('accessTokenAdmin');
        window.location.href = '/admin';
    }
}

// 로그아웃 토큰값 삭제, user store 초기화.
function* logoutSaga() {
    try {
        yield delay(100);
        localStorage.removeItem('accessToken');
        window.location.href = '/';
    } catch (e) {
        console.debug(e);
    }
}

function* adminLogoutSaga() {
    try {
        yield delay(100);
        localStorage.removeItem('accessTokenAdmin');
        localStorage.removeItem('Admin');
        yield put({ type: ADMIN_LOGOUT_SUCCESS });
        window.location.href = '/admin';
    } catch (e) {
        yield put({ type: ADMIN_LOGOUT_SUCCESS, payload: e });
        console.debug(e);
    }
}

function* getPointHistorySaga({ payload: id }) {
    try {
        const response = yield call(authAPI.getPointHistory, id);
        yield put({ type: GET_MEMBER_POINT_HISTORY_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: GET_MEMBER_POINT_HISTORY_FAILURE, payload: e.response.data });
    }
}

export function* memberSaga() {
    yield takeLatest(GET_MEMBER_LIST_REQUEST, getMemberListSaga);
    yield takeLatest(GET_MEMBER_INFO_REQUEST, getMemberInfoSaga);
    yield takeLatest(GET_MEMBER_ORDER_REQUEST, getMemberOrderSaga);
    yield takeLatest(GET_MEMBER_CHECK_REQUEST, checkSaga);
    yield takeLatest(GET_ADMIN_CHECK_REQUEST, adminCheckSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(ADMIN_LOGOUT, adminLogoutSaga);
    yield takeLatest(PUT_PASSWORD_MODIFY_REQUEST, putPasswordModifyrSaga);
    yield takeLatest(GET_MEMBER_POINT_HISTORY_REQUEST, getPointHistorySaga);
}

const initialState = {
    members: {
        status: 'idle',
        list: [],
    },
    memberInfo: {
        info: null,
        orders: null,
        error: null,
    },
    loggedInfo: {
        logged: null,
        pointHistory: null,
        error: null,
    },
    adminInfo: {
        logged: false,
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
        [GET_MEMBER_ORDER_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.memberInfo.orders = payload;
            });
        },
        [GET_MEMBER_ORDER_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.memberInfo.error = payload;
            });
        },
        [GET_MEMBER_INFO_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.memberInfo.info = payload;
            });
        },
        [GET_MEMBER_INFO_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.memberInfo.error = payload;
            });
        },
        [GET_MEMBER_CHECK_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.loggedInfo.logged = payload;
            });
        },
        [GET_MEMBER_CHECK_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.loggedInfo.error = payload;
            });
        },
        // [GET_ADMIN_CHECK_SUCCESS]: (state, { payload }) => {
        //     return produce(state, draft => {
        //         draft.adminInfo.logged = payload;
        //     });
        // },
        [GET_ADMIN_CHECK_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.adminInfo.error = payload;
                draft.adminInfo.logged = initialState.adminInfo.looged;
            });
        },
        [ADMIN_LOGOUT_SUCCESS]: state => {
            return produce(state, draft => {
                draft.adminInfo.logged = false;
            });
        },
        [ADMIN_LOGOUT_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.adminInfo.error = payload;
            });
        },
        [GET_MEMBER_POINT_HISTORY_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.loggedInfo.pointHistory = payload;
            });
        },
    },
    initialState
);
