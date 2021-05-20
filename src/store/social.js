import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { takeLatest, call, put } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as socialAPI from '../lib/api/social';
import { loginAction } from './auth';
import { push } from 'connected-react-router';

// 소셜 로그인 가입 여부 체크
const SOCIAL_LOGIN_CHECK = 'social/SOCIAL_LOGIN_CHECK';

// 소셜 로그인 바다라 가입
const [SOCIAL_KAKAO_REGISTER, SOCIAL_KAKAO_REGISTER_SUCCESS, SOCIAL_KAKAO_REGISTER_FAILURE] = createRequestActionTypes(
    'social/SOCIAL_KAKAO_REGISTER'
);

export const socialLoginCheckAction = createAction(SOCIAL_LOGIN_CHECK, ({ data }) => ({ data }));

export const socialRegisterAction = createAction(SOCIAL_KAKAO_REGISTER, ({ data }) => ({ data }));

function* checkSaga({ payload: { data } }) {
    try {
        const response = yield call(socialAPI.check, data);
        yield put({ type: SOCIAL_LOGIN_CHECK, payload: response.data });
        if (response.data.isRegistered) {
            loginAction({ email: response.data.email, password: response.data.password });
        } else {
            yield put(push('/register'));
        }
    } catch (e) {
        alert('로그인이 실패하였습니다.');
    }
}

function* registerSaga({ payload: { data } }) {
    try {
        const response = yield call(socialAPI.reigister, data);
        yield put({ type: SOCIAL_KAKAO_REGISTER_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: SOCIAL_KAKAO_REGISTER_FAILURE, payload: e.response.data });
    }
}
export function* socialSaga() {
    yield takeLatest(SOCIAL_LOGIN_CHECK, checkSaga);
    yield takeLatest(SOCIAL_KAKAO_REGISTER, registerSaga);
}

const initalState = {
    social: null,
    login: {
        socialId: null,
        email: null,
        isRegistered: null,
    },
};

export default handleActions(
    {
        [SOCIAL_LOGIN_CHECK]: (state, { payload }) => {
            return produce(state, draft => {
                draft.login.isRegistered = payload.isRegistered;
                draft.login.socialId = payload.socialId;
                draft.login.email = payload.email;
            });
        },
    },
    initalState
);
