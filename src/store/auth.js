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

// function* loginSaga({ email, password }) {
//     // 로그인 로직.
//     console.debug(email, password);
// }
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
    // yield takeLatest(LOGIN_REQUEST, loginSaga);
    yield takeLatest(REGISTER_REQUEST, registerSaga);
}

const initialState = {
    loginState: true,
    register: {
        status: 'idle',
        error: null,
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
    },
    initialState
);
