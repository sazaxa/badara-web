import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';

//  주문 목록 Action Types
export const [GET_ORDER_LIST_REQUEST, GET_ORDER_LIST_SUCCESS, GET_ORDER_LIST_FAILURE] = createRequestActionTypes(
    'order/LIST_ORDER'
);
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

// 신청 목록 Action Types.
const APPLY_LIST = 'order/APPLY_LIST';
// 신청 목록 삭제 Action Types.
const DELETE_APPLY_INFO = 'order/DELETE_APPLY_INFO';
// 신청하기 Action Types.
const APPLY_LIST_INSERT = 'order/APPLY_LIST_INSERT';

export const getOrderListAction = createAction(GET_ORDER_LIST_REQUEST);
export const uploadDeliveryAction = createAction(UPLOAD_CHARGE, ({ data }) => ({ data }));
export const predictionPrimeAction = createAction(PREDICTION_PRIME, ({ country, weight }) => ({ country, weight }));
export const clearPredictionPrimeAction = createAction(CLEAR_PREDICTION_PRIME);
export const getCountryAction = createAction(GET_COUNTRY);
export const applyListAction = createAction(APPLY_LIST, applyData => applyData);
export const applyListInsertAction = createAction(APPLY_LIST_INSERT, list => list);
export const deleteApplyInfoAction = createAction(DELETE_APPLY_INFO, index => index);

function* getOrderListSaga() {
    try {
        const response = yield call(orderAPI.getOrder);
        yield put({ type: GET_ORDER_LIST_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: GET_ORDER_LIST_FAILURE });
    }
}

// 배송비 엑셀 등록 Saga.
function* insertDeliverySaga({ payload: data }) {
    try {
        const { status } = yield call(orderAPI.Insert, data);
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
        const response = yield call(orderAPI.PredictionPrime, { country, weight });
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
        const response = yield call(orderAPI.getCountry);
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

function* applyListInsertSaga({ payload: list }) {
    console.log(list.list);
    yield call(orderAPI.postApply, list.list);
}
export function* orderSaga() {
    yield takeLatest(UPLOAD_CHARGE, insertDeliverySaga);
    yield takeLatest(PREDICTION_PRIME, predictionPrimeSaga);
    yield takeLatest(GET_COUNTRY, getCountrySaga);
    yield takeLatest(APPLY_LIST_INSERT, applyListInsertSaga);
    yield takeLatest(GET_ORDER_LIST_REQUEST, getOrderListSaga);
}

const initialState = {
    orders: {
        status: 'idle',
        list: [],
    },
    chargeInsert: {
        status: 'idle',
        error: '',
    },
    predictionPrime: null,
    countryLists: {
        status: 'idle',
        list: [],
    },
    apply: {
        list: [],
    },
};

export default handleActions(
    {
        [GET_ORDER_LIST_REQUEST]: state => {
            return produce(state, draft => {
                draft.orders.status = 'loading';
            });
        },
        [GET_ORDER_LIST_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.orders.status = 'success';
                draft.orders.list = payload;
            });
        },
        [GET_ORDER_LIST_REQUEST]: state => {
            return produce(state, draft => {
                draft.orders.status = 'fail';
            });
        },
        [UPLOAD_CHARGE]: state => {
            return produce(state, draft => {
                draft.chargeInsert.status = 'loading';
            });
        },
        [UPLOAD_CHARGE_SUCCESS]: state => {
            return produce(state, draft => {
                draft.chargeInsert.status = 'success';
            });
        },
        [UPLOAD_CHARGE_FAILURE]: state => {
            return produce(state, draft => {
                draft.chargeInsert.status = 'fail';
            });
        },
        [PREDICTION_PRIME_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.predictionPrime = payload;
            });
        },
        [CLEAR_PREDICTION_PRIME]: state => {
            return produce(state, draft => {
                draft.predictionPrime = initialState.predictionPrime;
            });
        },
        [GET_COUNTRY_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.countryLists.status = 'success';
                draft.countryLists.list = payload;
            });
        },
        [GET_COUNTRY_FAILURE]: state => {
            return produce(state, draft => {
                draft.countryLists.status = 'fail';
            });
        },
        [APPLY_LIST]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.list.push(payload);
            });
        },
        [DELETE_APPLY_INFO]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.list.splice(payload, 1);
            });
        },
        [APPLY_LIST_INSERT]: state => {
            return produce(state, draft => {
                draft.apply.list = initialState.apply.list;
            });
        },
    },
    initialState
);
