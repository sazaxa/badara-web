import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import * as authAPI from '../lib/api/auth';
import produce from 'immer';

export const [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
export const [REGISTER_REQUEST, REGISTER_SUCCESS, REIGSTER_FAILURE] = createRequestActionTypes('auth/REGISER');
export const CLEAR_REGISTER = 'auth/CLEAR_REGISTER';
export const loginAction = createAction(LOGIN_REQUEST, ({ email, password }) => ({
    email,
    password,
}));

export const registerAction = createAction(REGISTER_REQUEST, data => data);
export const clearRegisterAction = createAction(CLEAR_REGISTER);

function* loginSaga({ payload: { email, password } }) {
    try {
        const response = yield call(authAPI.login, { email, password });
        yield put({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: LOGIN_FAILURE, payload: e });
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
        [CLEAR_REGISTER]: state => {
            return produce(state, draft => {
                draft.register = initialState.register;
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
    },
    initialState
);
