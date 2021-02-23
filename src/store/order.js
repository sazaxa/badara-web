import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';

//  주문 목록 Action Types
export const [GET_ORDER_LIST_REQUEST, GET_ORDER_LIST_SUCCESS, GET_ORDER_LIST_FAILURE] = createRequestActionTypes(
    'order/LIST_ORDER'
);
// 주문 단일 Action Types
export const [GET_ORDER_INFO_REQUEST, GET_ORDER_INFO_SUCCESS, GET_ORDER_INFO_FAILURE] = createRequestActionTypes(
    'order/LIST_ORDER_INFO'
);

export const PUT_ORDER_INFO = 'order/PUT_ORDER_INFO';

export const getOrderListAction = createAction(GET_ORDER_LIST_REQUEST);
export const getOrderInfoAction = createAction(GET_ORDER_INFO_REQUEST, id => id);
export const putOrderInfoAction = createAction(PUT_ORDER_INFO, ({ updateData, callBack }) => ({
    updateData,
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

export function* orderSaga() {
    yield takeLatest(GET_ORDER_LIST_REQUEST, getOrderListSaga);
    yield takeLatest(GET_ORDER_INFO_REQUEST, getOrderInfoSaga);
    yield takeLatest(PUT_ORDER_INFO, putOrderInfoSaga);
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
