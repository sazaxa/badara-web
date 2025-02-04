import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import * as authAPI from '../lib/api/auth';
import produce from 'immer';

const [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
const LOGIN_POPUP = 'auth/LOGIN_POPUP';
const [ADMIN_LOGIN, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILURE] = createRequestActionTypes('auth/ADMIN_LOGIN');
const [REGISTER_REQUEST, REGISTER_SUCCESS, REIGSTER_FAILURE] = createRequestActionTypes('auth/REGISER');
const CLEAR_STORE = 'auth/CLEAR_STORE';

export const loginAction = createAction(LOGIN_REQUEST, ({ email, password }) => ({
    email,
    password,
}));

export const adminLoginAction = createAction(ADMIN_LOGIN, ({ email, password }) => ({
    email,
    password,
}));

export const registerAction = createAction(REGISTER_REQUEST, data => data);
export const clearStoreAction = createAction(CLEAR_STORE);
export const loginPopupAction = createAction(LOGIN_POPUP, boolean => boolean);

function* loginSaga({ payload: { email, password } }) {
    try {
        const response = yield call(authAPI.login, { email, password });
        yield put({ type: LOGIN_SUCCESS, payload: response.data });
        if (localStorage.getItem('accessTokenAdmin')) {
            localStorage.removeItem('accessTokenAdmin');
        }
        localStorage.setItem('accessToken', response.data.accessToken);
        window.location.href = '/';
    } catch (e) {
        yield put({ type: LOGIN_FAILURE, payload: e.response.data });
        console.log('e', e.response.data);
    }
}

function* adminLoginSaga({ payload: { email, password } }) {
    try {
        const response = yield call(authAPI.adminLogin, { email, password });
        yield put({ type: ADMIN_LOGIN_SUCCESS, payload: response.data });
        if (localStorage.getItem('accessToken')) {
            localStorage.removeItem('accessToken');
        }
        localStorage.setItem('accessTokenAdmin', response.data.accessToken);
        window.location.href = '/admin/user';
    } catch (e) {
        console.log(e);
        yield put({ type: ADMIN_LOGIN_FAILURE, payload: e });
    }
}

function* registerSaga({ payload: data }) {
    try {
        const response = yield call(authAPI.register, data);
        yield put({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (e) {
        console.debug(e);
        yield put({ type: REIGSTER_FAILURE, payload: e });
    }
}
export function* authSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
    yield takeLatest(REGISTER_REQUEST, registerSaga);
    yield takeLatest(ADMIN_LOGIN, adminLoginSaga);
}

const initialState = {
    register: {
        status: 'idle',
        error: null,
    },
    login: {
        status: 'idle',
        role: null,
        auth: null,
    },
    popup: false,
};

export default handleActions(
    {
        [REGISTER_SUCCESS]: state => {
            return produce(state, draft => {
                draft.register.status = 'success';
            });
        },
        [REIGSTER_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.register.status = 'fail';
                draft.register.error = payload;
            });
        },
        [CLEAR_STORE]: state => {
            return produce(state, draft => {
                draft.register = initialState.register;
                draft.login = initialState.login;
            });
        },
        [LOGIN_REQUEST]: state => {
            return produce(state, draft => {
                draft.login.status = 'loading';
            });
        },
        [LOGIN_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.login.status = 'success';
                draft.login.role = 'user';
                draft.login.auth = payload;
            });
        },
        [LOGIN_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.login.status = 'fail';
                draft.login.auth = payload;
            });
        },
        [ADMIN_LOGIN]: state => {
            return produce(state, draft => {
                draft.login.status = 'loading';
            });
        },
        [ADMIN_LOGIN_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.login.status = 'success';
                draft.login.role = 'admin';
                draft.login.auth = payload;
            });
        },
        [ADMIN_LOGIN_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.login.status = 'fail';
                draft.login.auth = payload;
            });
        },
        [LOGIN_POPUP]: (state, { payload }) => {
            return produce(state, draft => {
                draft.popup = payload;
            });
        },
    },
    initialState
);
