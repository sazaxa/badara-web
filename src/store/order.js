import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';

//  주문 목록 Action Types
const [GET_ORDER_LIST_REQUEST, GET_ORDER_LIST_SUCCESS, GET_ORDER_LIST_FAILURE] = createRequestActionTypes(
    'order/LIST_ORDER'
);
// 주문 단일 Action Types
const [GET_ORDER_INFO_REQUEST, GET_ORDER_INFO_SUCCESS, GET_ORDER_INFO_FAILURE] = createRequestActionTypes(
    'order/LIST_ORDER_INFO'
);

// 주문 상태 변경 Action Types.
const [
    ORDER_STATUS_CHANGE_REQUEST,
    ORDER_STATUS_CHANGE_SUCCESS,
    ORDER_STATUS_CHANGE_FAILURE,
] = createRequestActionTypes('order/ORDER_STATUS_CHANGE');

export const PUT_ORDER_INFO = 'order/PUT_ORDER_INFO';

export const getOrderListAction = createAction(GET_ORDER_LIST_REQUEST);
export const getOrderInfoAction = createAction(GET_ORDER_INFO_REQUEST, id => id);
export const putOrderInfoAction = createAction(PUT_ORDER_INFO, ({ updateData, callBack }) => ({
    updateData,
    callBack,
}));
export const orderStatusChangeAction = createAction(ORDER_STATUS_CHANGE_REQUEST, ({ id, paymentMethod, callBack }) => ({
    id,
    paymentMethod,
    callBack,
}));

function* getOrderListSaga() {
    try {
        const response = yield call(orderAPI.gets);
        yield put({ type: GET_ORDER_LIST_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: GET_ORDER_LIST_FAILURE });
    }
}

function* getOrderInfoSaga({ payload: id }) {
    try {
        const response = yield call(orderAPI.get, id);
        yield put({ type: GET_ORDER_INFO_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: GET_ORDER_INFO_FAILURE, payload: e });
    }
}

function* putOrderInfoSaga({ payload: { updateData, callBack } }) {
    // console.log(updateData);
    yield call(orderAPI.put, updateData);
    if (callBack instanceof Function) {
        callBack({
            result: true,
        });
    } else {
        alert('처리중 문제 발생했습니다.');
    }
}

function* orderStatusChangeSaga({ payload: { id, paymentMethod, callBack } }) {
    try {
        const response = yield call(orderAPI.orderStatusChange, { id, paymentMethod });
        yield put({ type: ORDER_STATUS_CHANGE_SUCCESS, payload: response.data });
        if (callBack instanceof Function) {
            callBack({
                result: true,
            });
        }
    } catch (e) {
        yield put({ type: ORDER_STATUS_CHANGE_FAILURE, e });
    }
}

export function* orderSaga() {
    yield takeLatest(GET_ORDER_LIST_REQUEST, getOrderListSaga);
    yield takeLatest(GET_ORDER_INFO_REQUEST, getOrderInfoSaga);
    yield takeLatest(PUT_ORDER_INFO, putOrderInfoSaga);
    yield takeLatest(ORDER_STATUS_CHANGE_REQUEST, orderStatusChangeSaga);
}

const initialState = {
    orders: {
        status: 'idle',
        list: [],
    },
    orderInfo: null,
    error: null,
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
        [GET_ORDER_LIST_FAILURE]: state => {
            return produce(state, draft => {
                draft.orders.status = 'fail';
            });
        },
        [GET_ORDER_INFO_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.orderInfo = payload;
            });
        },
        [GET_ORDER_INFO_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.errer = payload;
            });
        },
    },
    initialState
);
