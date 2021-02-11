import { createAction, handleActions } from 'redux-actions';
// import produce from 'immer';
// import { takeLatest } from 'redux-saga/effects';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';

export const [GET_ORDER_LIST_REQUEST, GET_ORDER_LIST_SUCCESS, GET_ORDER_LIST_FAILURE] = createRequestActionTypes(
    'order/LIST_ORDER'
);

export const getMemberAction = createAction(GET_ORDER_LIST_REQUEST, state => state);

// function* getOrderListSaga({ state }) {
//     // 회원 목록 로직.
//     console.debug(state);
// }

export function* orderSaga() {
    // yield takeLatest(GET_ORDER_LIST_REQUEST, getOrderListSaga);
}

const initialState = {
    orders: {
        status: 'idle',
        list: [],
    },
};

export default handleActions({}, initialState);
