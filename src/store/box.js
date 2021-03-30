import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as productAPI from '../lib/api/box';

// 상품 단일 Action Types
const [GET_BOX_ID] = createRequestActionTypes('box/GET_BOX_ID');
//상품 운송장번호 Action Types
const [BOX_INVOICE_REQUEST, BOX_INVOICE_SUCCESS, BOX_INVOICE_FAILURE] = createRequestActionTypes(
    'product/PRODUCT_INVOICE'
);

export const getProductInfoAction = createAction(GET_BOX_ID, id => id);
export const porductInvoiceAction = createAction(BOX_INVOICE_REQUEST, ({ id, data, callBack }) => ({
    id,
    data,
    callBack,
}));

// 상품 단일 saga
function* productInvoiceSaga({ payload: { id, data, callBack } }) {
    try {
        const response = yield call(productAPI.invoice, { id, data });
        yield put({ type: BOX_INVOICE_SUCCESS, payload: response.data });
        if (callBack instanceof Function) {
            callBack({
                result: true,
            });
        }
    } catch (e) {
        yield put({ type: BOX_INVOICE_FAILURE, payload: e });
    }
}

export function* boxSaga() {
    yield takeLatest(BOX_INVOICE_REQUEST, productInvoiceSaga);
}

const initialState = {
    boxId: null,
    error: null,
};

export default handleActions(
    {
        [GET_BOX_ID]: (state, { payload }) => {
            return produce(state, draft => {
                draft.boxId = payload;
            });
        },
        [BOX_INVOICE_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.product = payload;
            });
        },
        [BOX_INVOICE_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.error = payload;
            });
        },
    },
    initialState
);
