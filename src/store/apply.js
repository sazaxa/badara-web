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

// apply 예상가격 가져오기 Action Types
const [PREDICTION_PRISE, PREDICTION_PRISE_SUCCESS, PREDICTION_PRISE_FAILURE] = createRequestActionTypes(
    'apply/PREDICTION_PRISE'
);

export const applyClearAction = createAction(APPLY_CLEAR);

export const recipientInsertAction = createAction(RECIPIENT_DATA_SAVE, data => data);

export const productDataAddAction = createAction(PRODUCT_DATA_ADD, data => data);
export const productDataRemoveAction = createAction(PRODUCT_DATA_REMOVE, index => index);
export const productDataUpdateAction = createAction(PRODUCT_DATA_UPDATE, ({ index, updateData }) => ({
    index,
    updateData,
}));

export const boxDataAddAction = createAction(BOX_DATA_ADD, data => data);
export const boxDataRemoveAction = createAction(BOX_DATA_REMOVE, index => index);
export const boxDataUpdateAction = createAction(BOX_DATA_UPDATE, ({ index, updateData }) => ({
    index,
    updateData,
}));

export const applyPriseAction = createAction(PREDICTION_PRISE, ({ country, weight }) => ({ country, weight }));

// 예상 가격 가져오기 Saga.
function* predictionPrimeSaga({ payload: { country, weight } }) {
    const response = yield call(partAPI.PredictionPrice, { country, weight });
    try {
        yield put({ type: PREDICTION_PRISE_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: PREDICTION_PRISE_FAILURE, e });
        console.log('통신중 에러가 발생했습니다.');
    }
}
export function* applySaga() {
    yield takeLatest(PREDICTION_PRISE, predictionPrimeSaga);
}

export const initialState = {
    apply: {
        recipient: null,
        products: [
            {
                productDetail: null,
                quntity: null,
                price: null,
                weight: null,
            },
        ],
        boxes: [
            {
                expectedWitdh: null,
                expectedDepth: null,
                expectedHeight: null,
                expectedVolumeWeight: null,
                expectedNetWeight: null,
                expectedPrice: null,
                koreanInvoitce: null,
                koreanShippingCompany: null,
            },
        ],
    },
};

export default handleActions(
    {
        [APPLY_CLEAR]: state => {
            return produce(state, draft => {
                draft.apply = initialState.apply;
            });
        },
        [RECIPIENT_DATA_SAVE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.recipient = payload.recipient;
            });
        },
        [PRODUCT_DATA_ADD]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.products.push(payload.product);
            });
        },
        [PRODUCT_DATA_UPDATE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.products.splice(payload.index, 1, payload.updateData);
            });
        },
        [PRODUCT_DATA_REMOVE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.products.splice(payload.index, 1);
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
    },
    initialState
);
