import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as partAPI from '../lib/api/part';

// 배송비 엑셀 등록 Action Types.
const [UPLOAD_CHARGE, UPLOAD_CHARGE_SUCCESS, UPLOAD_CHARGE_FAILURE] = createRequestActionTypes('order/UPLOAD_CHARGE');

// 예상 가격 가져오기 Action Types.
const [PREDICTION_PRIME, PREDICTION_PRIME_SUCCESS, PREDICTION_PRIME_FAILURE] = createRequestActionTypes(
    'order/PREDICTION_PRIME'
);
// 예상 가격 초기화 Action Types.
const CLEAR_PREDICTION_PRIME = 'order/CLEAR_PREDICTION_PRIME';

// 나라 가져오기 Action Types.
const [GET_COUNTRY, GET_COUNTRY_SUCCESS, GET_COUNTRY_FAILURE] = createRequestActionTypes('order/GET_COUNTRY');

export const uploadDeliveryAction = createAction(UPLOAD_CHARGE, ({ data }) => ({ data }));
export const predictionPrimeAction = createAction(PREDICTION_PRIME, ({ country, weight }) => ({ country, weight }));
export const clearPredictionPrimeAction = createAction(CLEAR_PREDICTION_PRIME);
export const getCountryAction = createAction(GET_COUNTRY);

// 배송비 엑셀 등록 Saga.
function* insertDeliverySaga({ payload: data }) {
    try {
        const { status } = yield call(partAPI.Insert, data);
        if (status === 200) {
            yield put({ type: UPLOAD_CHARGE_SUCCESS });
        } else {
            yield put({ type: UPLOAD_CHARGE_FAILURE });
        }
    } catch (e) {
        console.log('통신중 에러가 발생했습니다.', e);
    }
}

// 예상 가격 가져오기 Saga.
function* predictionPrimeSaga({ payload: { country, weight } }) {
    try {
        const response = yield call(partAPI.PredictionPrime, { country, weight });
        yield put({ type: PREDICTION_PRIME_SUCCESS, payload: response.data });
        console.log(response.data);
    } catch (e) {
        yield put({ type: PREDICTION_PRIME_FAILURE });
        console.log('통신중 에러가 발생했습니다.', e);
    }
}
//  계산기 나라 목록 가져오기.
function* getCountrySaga() {
    try {
        const response = yield call(partAPI.getCountry);
        let countryLists = [];
        const { data } = response;
        data.map(e => {
            if (countryLists.indexOf(e.country) < 0) {
                countryLists.push(e.country);
            }
            // eslint-disable-next-line array-callback-return
            return;
        });
        yield put({ type: GET_COUNTRY_SUCCESS, payload: countryLists });
    } catch (e) {
        yield put({ type: GET_COUNTRY_FAILURE });
    }
}

export function* partSaga() {
    yield takeLatest(UPLOAD_CHARGE, insertDeliverySaga);
    yield takeLatest(PREDICTION_PRIME, predictionPrimeSaga);
    yield takeLatest(GET_COUNTRY, getCountrySaga);
}

const initialState = {
    insert: {
        status: 'idle',
        error: '',
    },
    prime: null,
    country: {
        status: 'idle',
        list: [],
    },
};

export default handleActions(
    {
        [UPLOAD_CHARGE]: state => {
            return produce(state, draft => {
                draft.insert.status = 'loading';
            });
        },
        [UPLOAD_CHARGE_SUCCESS]: state => {
            return produce(state, draft => {
                draft.insert.status = 'success';
            });
        },
        [UPLOAD_CHARGE_FAILURE]: state => {
            return produce(state, draft => {
                draft.insert.status = 'fail';
            });
        },
        [PREDICTION_PRIME_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.prime = payload;
            });
        },
        [CLEAR_PREDICTION_PRIME]: state => {
            return produce(state, draft => {
                draft.prime = initialState.prime;
            });
        },
        [GET_COUNTRY_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.country.status = 'success';
                draft.country.list = payload;
            });
        },
        [GET_COUNTRY_FAILURE]: state => {
            return produce(state, draft => {
                draft.country.status = 'fail';
            });
        },
    },
    initialState
);
