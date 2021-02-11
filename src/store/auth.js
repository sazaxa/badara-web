import { createAction, handleActions } from 'redux-actions';
// import { takeLatest } from 'redux-saga/effects';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';

export const [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const loginAction = createAction(LOGIN_REQUEST, ({ email, password }) => ({
    email,
    password,
}));

// function* loginSaga({ email, password }) {
//     // 로그인 로직.
//     console.debug(email, password);
// }

export function* authSaga() {
    // yield takeLatest(LOGIN_REQUEST, loginSaga);
}

const initialState = {
    loginState: true,
};

export default handleActions({}, initialState);
