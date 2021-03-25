import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as productAPI from '../lib/api/product';

// 상품 단일 Action Types
const [GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE] = createRequestActionTypes('product/GET_PRODUCT');
//상품 운송장번호 Action Types
const [PRODUCT_INVOICE_REQUEST, PRODUCT_INVOICE_SUCCESS, PRODUCT_INVOICE_FAILURE] = createRequestActionTypes(
    'product/PRODUCT_INVOICE'
);
//상품 결제완료 Action Types
const [PRODUCT_PAYMENT_REQUEST, PRODUCT_PAYMENT_SUCCESS, PRODUCT_PAYMENT_FAILURE] = createRequestActionTypes(
    'product/PRODUCT_PAYMENT'
);
export const getProductInfoAction = createAction(GET_PRODUCT_REQUEST, id => id);
export const porductInvoiceAction = createAction(PRODUCT_INVOICE_REQUEST, ({ id, data, callBack }) => ({
    id,
    data,
    callBack,
}));
export const productPaymentAction = createAction(PRODUCT_PAYMENT_REQUEST, ({ id, status, callBack }) => ({
    id,
    status,
    callBack,
}));

// 상품 단일 saga
function* getProductInfoSaga({ payload: id }) {
    try {
        const response = yield call(productAPI.product, id);
        yield put({ type: GET_PRODUCT_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: GET_PRODUCT_FAILURE, payload: e });
    }
}

// 상품 단일 saga
function* productInvoiceSaga({ payload: { id, data, callBack } }) {
    try {
        const response = yield call(productAPI.invoice, { id, data });
        yield put({ type: PRODUCT_INVOICE_SUCCESS, payload: response.data });
        if (callBack instanceof Function) {
            callBack({
                result: true,
            });
        }
    } catch (e) {
        yield put({ type: PRODUCT_INVOICE_FAILURE, payload: e });
    }
}

//상품 결제 saga
function* productPeymentSaga({ payload: { id, status, callBack } }) {
    try {
        const response = yield call(productAPI.payment, { id, status });
        yield put({ type: PRODUCT_PAYMENT_SUCCESS, payload: response.data });
        if (callBack instanceof Function) {
            callBack({
                result: true,
            });
        }
    } catch (e) {
        yield put({ type: PRODUCT_PAYMENT_FAILURE, payload: e });
    }
}

export function* productSaga() {
    yield takeLatest(GET_PRODUCT_REQUEST, getProductInfoSaga);
    yield takeLatest(PRODUCT_INVOICE_REQUEST, productInvoiceSaga);
    yield takeLatest(PRODUCT_PAYMENT_REQUEST, productPeymentSaga);
}

const initialState = {
    defaultProduct: {
        productDetail: null,
        quantity: null,
        price: null,
        weight: null,
    },
    error: null,
};

export default handleActions(
    {
        [GET_PRODUCT_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.product = payload;
            });
        },
        [GET_PRODUCT_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.error = payload;
            });
        },
        [PRODUCT_INVOICE_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.product = payload;
            });
        },
        [PRODUCT_INVOICE_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.error = payload;
            });
        },
        [PRODUCT_PAYMENT_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.product = payload;
            });
        },
        [PRODUCT_PAYMENT_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.error = payload;
            });
        },
    },
    initialState
);
