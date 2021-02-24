import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import * as authAPI from '../lib/api/auth';
import produce from 'immer';

export const [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
export const [REGISTER_REQUEST, REGISTER_SUCCESS, REIGSTER_FAILURE] = createRequestActionTypes('auth/REGISER');
export const CLEAR_STORE = 'auth/CLEAR_STORE';
export const LOGOUT = 'auth/LOGOUT';
export const loginAction = createAction(LOGIN_REQUEST, ({ email, password }) => ({
    email,
    password,
}));

export const registerAction = createAction(REGISTER_REQUEST, data => data);
export const clearStoreAction = createAction(CLEAR_STORE);
export const logoutAction = createAction(LOGOUT);

function* loginSaga({ payload: { email, password } }) {
    try {
        const response = yield call(authAPI.login, { email, password });
        yield put({ type: LOGIN_SUCCESS, payload: response.data });
        localStorage.setItem('accessToken', response.data.accessToken);
    } catch (e) {
        yield put({ type: LOGIN_FAILURE, payload: e });
    }
}

function* logoutSaga() {
    try {
        yield delay(1000);
        localStorage.removeItem('accessToken');
    } catch (e) {
        console.debug(e);
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
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    loginState: true,
    register: {
        status: 'idle',
        error: null,
    },
    login: {
        status: 'idle',
        auth: null,
    },
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
                draft.login.auth = payload;
            });
        },
        [LOGIN_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.login.status = 'fail';
                draft.login.auth = payload;
            });
        },
        [LOGOUT]: state => {
            return produce(state, draft => {
                draft.login = initialState.login;
            });
        },
    },
    initialState
);
