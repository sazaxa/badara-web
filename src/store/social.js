import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { takeLatest, call, put } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as socialAPI from '../lib/api/social';

// 소셜 로그인 가입 여부 체크
const [SOCIAL_LOGIN_CHECK, SOCIAL_LOGIN_CHECK_SUCCESS, SOCIAL_LOGIN_CHECK_FAILURE] = createRequestActionTypes(
    'social/SOCIAL_LOGIN_CHECK'
);
// 소셜 로그인 바다라 가입
const [SOCIAL_KAKAO_REGISTER, SOCIAL_KAKAO_REGISTER_SUCCESS, SOCIAL_KAKAO_REGISTER_FAILURE] = createRequestActionTypes(
    'social/SOCIAL_KAKAO_REGISTER'
);

// 소셜 정보 리셋

const RESET_SOCIAL_INFO = 'social/RESET_SOCIAL_INFO';

export const socialLoginCheckAction = createAction(SOCIAL_LOGIN_CHECK, ({ data }) => ({ data }));

export const socialRegisterAction = createAction(SOCIAL_KAKAO_REGISTER, ({ data, callBack }) => ({ data, callBack }));

export const resetSocialInfoActin = createAction(RESET_SOCIAL_INFO);

function* checkSaga({ payload: { data } }) {
    try {
        const response = yield call(socialAPI.check, data);
        yield put({ type: SOCIAL_LOGIN_CHECK_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: SOCIAL_LOGIN_CHECK_FAILURE, payload: e.response.data });
        alert('로그인이 실패하였습니다.');
    }
}

function* registerSaga({ payload: { data, callBack } }) {
    try {
        const response = yield call(socialAPI.reigister, data);
        yield put({ type: SOCIAL_KAKAO_REGISTER_SUCCESS, payload: response.data });
        if (callBack instanceof Function) {
            callBack({
                result: true,
            });
        } else {
            alert('처리중 문제 발생했습니다.');
        }
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
        password: null,
    },
};

export default handleActions(
    {
        [SOCIAL_LOGIN_CHECK_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.login.isRegistered = payload.isRegistered;
                draft.login.socialId = payload.socialId;
                draft.login.email = payload.email;
                draft.login.password = payload.password;
            });
        },
        [SOCIAL_KAKAO_REGISTER_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.login.email = payload.email;
                draft.login.password = payload.password;
            });
        },
        [RESET_SOCIAL_INFO]: state => {
            return produce(state, draft => {
                draft.login = initalState.login;
            });
        },
    },
    initalState
);
