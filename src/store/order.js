import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';

//  주문 목록 Action Types
export const [GET_ORDER_LIST_REQUEST, GET_ORDER_LIST_SUCCESS, GET_ORDER_LIST_FAILURE] = createRequestActionTypes(
    'order/LIST_ORDER'
);
// 배송비 엑셀 등록 Action Types
const [UPLOAD_CHARGE, UPLOAD_CHARGE_SUCCESS, UPLOAD_CHARGE_FAILURE] = createRequestActionTypes(
    'delivery/UPLOAD_CHARGE'
);
// 배송비 엑셍 등록 Action
export const uploadDeliveryAction = createAction(UPLOAD_CHARGE, ({ data }) => ({ data }));

// export const getMemberAction = createAction(GET_ORDER_LIST_REQUEST, state => state);

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
// function* getOrderListSaga({ state }) {
//     // 회원 목록 로직.
//     console.debug(state);
// }

export function* orderSaga() {
    // yield takeLatest(GET_ORDER_LIST_REQUEST, getOrderListSaga);
    yield takeLatest(UPLOAD_CHARGE, insertDeliverySaga);
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
};

export default handleActions(
    {
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
    },
    initialState
);
