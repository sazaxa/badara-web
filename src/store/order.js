import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';

//  주문 목록 Action Types
export const [GET_ORDER_LIST_REQUEST, GET_ORDER_LIST_SUCCESS, GET_ORDER_LIST_FAILURE] = createRequestActionTypes(
    'order/LIST_ORDER'
);

export const getOrderListAction = createAction(GET_ORDER_LIST_REQUEST);

function* getOrderListSaga() {
    try {
        const response = yield call(orderAPI.get);
        yield put({ type: GET_ORDER_LIST_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: GET_ORDER_LIST_FAILURE });
    }
}

export function* orderSaga() {
    yield takeLatest(GET_ORDER_LIST_REQUEST, getOrderListSaga);
}

const initialState = {
    orders: {
        status: 'idle',
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
        [GET_ORDER_LIST_FAILURE]: state => {
            return produce(state, draft => {
                draft.orders.status = 'fail';
            });
        },
    },
    initialState
);
