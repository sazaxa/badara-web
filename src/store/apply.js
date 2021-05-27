import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { call, takeLatest, put } from 'redux-saga/effects';
import * as applyAPI from '../lib/api/apply';
import * as partAPI from '../lib/api/part';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';

// 수취인 정보 Action Types.
const RECIPIENT_DATA_SAVE = 'apply/RECIPIENT_DATA_SAVE';

// 상품 Action Types.
const PRODUCT_DATA_ADD = 'apply/PRODUCT_DATA_ADD';
const PRODUCT_DATA_REMOVE = 'apply/PRODUCT_DATA_REMOVE';
const PRODUCT_DATA_UPDATE = 'apply/PRODUCT_DATA_UPDATE';

// 박스 Action Types.
const BOX_DATA_ADD = 'apply/BOX_DATA_ADD';
const BOX_DATA_REMOVE = 'apply/BOX_DATA_REMOVE';
const BOX_DATA_UPDATE = 'apply/BOX_DATA_UPDATE';

// Apply clear Types.
const APPLY_CLEAR = 'apply/APPLY_CLEAR';

// Apply 예상가격 가져오기 Action Types
const [PREDICTION_PRICE, PREDICTION_PRICE_SUCCESS, PREDICTION_PRICE_FAILURE] = createRequestActionTypes(
    'apply/PREDICTION_PRISE'
);

// Apply Save Types;
const [APPLY_SAVE_REQUEST, APPLY_SAVE_SUCCESS, APPLY_SAVE_FAILURE] = createRequestActionTypes('apply/APPLY_SAVE');

// Apply Modify Types;
const [APPLY_MODIFY_REQUEST, APPLY_MODIFY_SUCCESS, APPLY_MODIFY_FAILURE] = createRequestActionTypes(
    'apply/APPLY_MODIFY'
);

//Apply 수정하기위해 불러오는 로직
const [GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILURE] = createRequestActionTypes('apply/GET_ORDER');

// Apply All
export const applyClearAction = createAction(APPLY_CLEAR);
export const applySaveAction = createAction(APPLY_SAVE_REQUEST, ({ data }) => ({ data }));

//Apply Modify
export const applyModifyAction = createAction(APPLY_MODIFY_REQUEST, ({ data, id }) => ({ data, id }));

// Apply.recipinet
export const recipientInsertAction = createAction(RECIPIENT_DATA_SAVE, data => data);

// Apply.product
export const productDataAddAction = createAction(PRODUCT_DATA_ADD, ({ boxIndex, product }) => ({ boxIndex, product }));
export const productDataRemoveAction = createAction(PRODUCT_DATA_REMOVE, ({ boxIndex, index }) => ({
    boxIndex,
    index,
}));
export const productDataUpdateAction = createAction(PRODUCT_DATA_UPDATE, ({ boxIndex, index, updateData }) => ({
    boxIndex,
    index,
    updateData,
}));

// Apply.box
export const boxDataAddAction = createAction(BOX_DATA_ADD, data => data);
export const boxDataRemoveAction = createAction(BOX_DATA_REMOVE, index => index);
export const boxDataUpdateAction = createAction(BOX_DATA_UPDATE, ({ index, updateData }) => ({
    index,
    updateData,
}));

export const applyPriseAction = createAction(PREDICTION_PRICE, ({ country, weight }) => ({ country, weight }));

// 수정하기위해 오더를 불러와라
export const getOrderAction = createAction(GET_ORDER_REQUEST, orderNumber => orderNumber);

// 예상 가격 가져오기 Saga.
function* predictionPrimeSaga({ payload: { country, weight } }) {
    const response = yield call(partAPI.PredictionPrice, { country, weight });
    try {
        yield put({ type: PREDICTION_PRICE_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: PREDICTION_PRICE_FAILURE, e });
        console.log('통신중 에러가 발생했습니다.');
    }
}

// order Save Saga.
function* applySaveSaga({ payload: { data } }) {
    console.log(data);
    const response = yield call(applyAPI.save, data);
    try {
        yield put({ type: APPLY_SAVE_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: APPLY_SAVE_FAILURE, e });
    }
}

// order Modify Saga.
function* applyModifySaga({ payload: { data, id } }) {
    console.log(data);
    const response = yield call(applyAPI.modify, { data, id });
    try {
        yield put({ type: APPLY_MODIFY_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: APPLY_MODIFY_FAILURE, e });
    }
}

function* getOrderSage({ payload: { orderNumber } }) {
    const response = yield call(applyAPI.getOrder, orderNumber);
    try {
        yield put({ type: GET_ORDER_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: GET_ORDER_FAILURE, e });
        console.log(e);
    }
}
export function* applySaga() {
    yield takeLatest(PREDICTION_PRICE, predictionPrimeSaga);
    yield takeLatest(APPLY_SAVE_REQUEST, applySaveSaga);
    yield takeLatest(APPLY_MODIFY_REQUEST, applyModifySaga);
    yield takeLatest(GET_ORDER_REQUEST, getOrderSage);
}

export const initialState = {
    apply: {
        id: null,
        recipient: null,
        boxes: [
            {
                type: '박스',
                expectedWidth: null,
                expectedDepth: null,
                expectedHeight: null,
                expectedVolumeWeight: null,
                expectedNetWeight: null,
                expectedPrice: null,
                koreanInvoice: null,
                koreanShippingCompany: null,
                products: [
                    {
                        productDetail: null,
                        quantity: null,
                        price: null,
                    },
                ],
            },
        ],
    },
    price: null,
    status: 'idle',
};

export default handleActions(
    {
        [APPLY_CLEAR]: state => {
            return produce(state, draft => {
                draft.apply = initialState.apply;
                draft.price = initialState.price;
                draft.status = initialState.status;
            });
        },
        [RECIPIENT_DATA_SAVE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.recipient = payload.recipient;
            });
        },
        [PRODUCT_DATA_ADD]: (state, { payload }) => {
            console.log(payload);
            return produce(state, draft => {
                draft.apply.boxes[payload.boxIndex].products.push(payload.product);
            });
        },
        [PRODUCT_DATA_UPDATE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.boxes[payload.boxIndex].products.splice(payload.index, 1, payload.updateData);
            });
        },
        [PRODUCT_DATA_REMOVE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.boxes[payload.boxIndex].products.splice(payload.index, 1);
            });
        },
        [BOX_DATA_ADD]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.boxes.push(payload.box);
            });
        },
        [BOX_DATA_UPDATE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.boxes.splice(payload.index, 1, payload.updateData);
            });
        },
        [BOX_DATA_REMOVE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.boxes.splice(payload.index, 1);
            });
        },
        [PREDICTION_PRICE_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.price = payload;
            });
        },
        [APPLY_SAVE_REQUEST]: state => {
            return produce(state, draft => {
                draft.status = 'loading';
            });
        },
        [APPLY_SAVE_SUCCESS]: state => {
            return produce(state, draft => {
                draft.status = 'success';
            });
        },
        [APPLY_SAVE_FAILURE]: state => {
            return produce(state, draft => {
                draft.status = 'fail';
            });
        },
        [APPLY_MODIFY_SUCCESS]: state => {
            return produce(state, draft => {
                draft.status = 'success';
            });
        },
        [APPLY_MODIFY_FAILURE]: state => {
            return produce(state, draft => {
                draft.status = 'fail';
            });
        },
        [GET_ORDER_SUCCESS]: (state, { payload }) => {
            console.log(payload);
            return produce(state, draft => {
                draft.apply = payload;
            });
        },
        [GET_ORDER_FAILURE]: state => {
            return produce(state, draft => {
                draft.status = 'fail';
            });
        },
    },
    initialState
);
