import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as partAPI from '../lib/api/part';

// 배송비 엑셀 등록 Action Types.
const [UPLOAD_CHARGE, UPLOAD_CHARGE_SUCCESS, UPLOAD_CHARGE_FAILURE] = createRequestActionTypes('order/UPLOAD_CHARGE');

// 예상 가격 가져오기 Action Types.
const [PREDICTION_PRICE, PREDICTION_PRICE_SUCCESS, PREDICTION_PRICE_FAILURE] = createRequestActionTypes(
    'order/PREDICTION_PRICE'
);
// 예상 가격 초기화 Action Types.
const CLEAR_PREDICTION_PRICE = 'order/CLEAR_PREDICTION_PRICE';

// 배송신청 step Action Types;

const ACTIVE_STEP_CHANGE = 'part/ACTIVE_STEP_CHANGE';
const RESET_STEP = 'part/RESET_STEP';

// 나라 가져오기 Action Types.
const [GET_COUNTRY, GET_COUNTRY_SUCCESS, GET_COUNTRY_FAILURE] = createRequestActionTypes('order/GET_COUNTRY');

// 나라별 가격 가져오기 Action Types.
const [COUNTRY_PRISE, COUNTRY_PRISE_SUCCESS, COUNTRY_PRISE_FAILURE] = createRequestActionTypes('order/COUNTRY_PRISE');

export const uploadDeliveryAction = createAction(UPLOAD_CHARGE, ({ data }) => ({ data }));
export const predictionpriceAction = createAction(PREDICTION_PRICE, ({ country, weight }) => ({
    country,
    weight,
}));
export const clearPredictionpriceAction = createAction(CLEAR_PREDICTION_PRICE);
export const getCountryAction = createAction(GET_COUNTRY);

export const countryPriseAction = createAction(COUNTRY_PRISE, country => country);

export const acitiveStepChange = createAction(ACTIVE_STEP_CHANGE, step => step);
export const resetStep = createAction(RESET_STEP);

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
function* predictionpriceSaga({ payload: { country, weight } }) {
    const response = yield call(partAPI.PredictionPrice, { country, weight });
    try {
        yield put({ type: PREDICTION_PRICE_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: PREDICTION_PRICE_FAILURE, e });
        console.log('통신중 에러가 발생했습니다.');
    }
}

// 예상 가격 가져오기 Saga.
function* countryPriseSaga({ payload: country }) {
    const response = yield call(partAPI.CountryPrise, country);
    try {
        yield put({ type: COUNTRY_PRISE_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: COUNTRY_PRISE_FAILURE, e });
        console.log('통신중 에러가 발생했습니다.');
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
    yield takeLatest(PREDICTION_PRICE, predictionpriceSaga);
    yield takeLatest(GET_COUNTRY, getCountrySaga);
    yield takeLatest(COUNTRY_PRISE, countryPriseSaga);
}

export const initialState = {
    insert: {
        status: 'idle',
        error: '',
    },
    price: null,
    country: {
        status: 'idle',
        list: [],
    },
    countryPrise: null,
    activeStep: 0,
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
        [PREDICTION_PRICE_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.price = payload;
            });
        },
        [CLEAR_PREDICTION_PRICE]: state => {
            return produce(state, draft => {
                draft.price = initialState.price;
            });
        },
        [GET_COUNTRY_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.country.status = 'success';
                draft.country.list = payload.sort();
            });
        },
        [GET_COUNTRY_FAILURE]: state => {
            return produce(state, draft => {
                draft.country.status = 'fail';
            });
        },
        [COUNTRY_PRISE_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.countryPrise = payload;
            });
        },
        [ACTIVE_STEP_CHANGE]: (state, action) => {
            return produce(state, draft => {
                draft.activeStep = action.payload;
            });
        },
        [RESET_STEP]: state => {
            return produce(state, draft => {
                draft.activeStep = initialState.activeStep;
            });
        },
    },
    initialState
);
