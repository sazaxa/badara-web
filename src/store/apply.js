import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { call, takeLatest, put } from 'redux-saga/effects';
import * as applyAPI from '../lib/api/apply';
import * as partAPI from '../lib/api/part';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';

// 수취인 정보 Action Types.
const RECIPIENT_DATA_SAVE = 'apply/RECIPIENT_DATA_SAVE';

// 상품 추가 Action Types.
const PRODUCT_DATA_ADD = 'apply/PRODUCT_DATA_ADD';
const PRODUCT_DATA_REMOVE = 'apply/PRODUCT_DATA_REMOVE';
const PRODUCT_DATA_UPDATE = 'apply/PRODUCT_DATA_UPDATE';
// 신청 목록 삭제 Action Types.
const DELETE_APPLY_INFO = 'order/DELETE_APPLY_INFO';
// 신청하기 Action Types.
const APPLY_LIST_INSERT = 'order/APPLY_LIST_INSERT';
// apply 예상가격 가져오기 Action Types
const [PREDICTION_PRISE, PREDICTION_PRISE_SUCCESS, PREDICTION_PRISE_FAILURE] = createRequestActionTypes(
    'apply/PREDICTION_PRISE'
);
// 예상 가격 초기화 Action Types.
const CLEAR_PREDICTION_PRISE = 'apply/CLEAR_PREDICTION_PRISE';

export const recipientInsertAction = createAction(RECIPIENT_DATA_SAVE, data => data);
export const productDataAddAction = createAction(PRODUCT_DATA_ADD, data => data);
export const productDataRemoveAction = createAction(PRODUCT_DATA_REMOVE, index => index);
export const productDataUpdateAction = createAction(PRODUCT_DATA_UPDATE, ({ index, updateData }) => ({
    index,
    updateData,
}));
export const applyListInsertAction = createAction(APPLY_LIST_INSERT, list => list);
export const deleteApplyInfoAction = createAction(DELETE_APPLY_INFO, index => index);
export const applyPriseAction = createAction(PREDICTION_PRISE, ({ country, weight }) => ({ country, weight }));
export const clearPredictionPriseAction = createAction(CLEAR_PREDICTION_PRISE);

function* applyListInsertSaga({ payload: list }) {
    console.log(list.list);
    yield call(applyAPI.post, list.list);
}
// 예상 가격 가져오기 Saga.
function* predictionPrimeSaga({ payload: { country, weight } }) {
    const response = yield call(partAPI.PredictionPrime, { country, weight });
    try {
        yield put({ type: PREDICTION_PRISE_SUCCESS, payload: response.data });
    } catch (e) {
        yield put({ type: PREDICTION_PRISE_FAILURE, e });
        console.log('통신중 에러가 발생했습니다.');
    }
}
export function* applySaga() {
    yield takeLatest(APPLY_LIST_INSERT, applyListInsertSaga);
    yield takeLatest(PREDICTION_PRISE, predictionPrimeSaga);
}

export const initialState = {
    apply: {
        // list: [],
        recipient: null,
        product: [
            {
                productDetail: null,
                quntity: null,
                price: null,
                weight: null,
            },
        ],
        box: null,
    },
    prise: null,
};

export default handleActions(
    {
        [RECIPIENT_DATA_SAVE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.recipient = payload.recipient;
            });
        },
        [PRODUCT_DATA_ADD]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.product.push(payload.product);
            });
        },
        [PRODUCT_DATA_UPDATE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.product.splice(payload.index, 1, payload.updateData);
            });
        },
        [PRODUCT_DATA_REMOVE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.apply.product.splice(payload.index, 1);
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
        [PREDICTION_PRISE_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.prise = payload;
            });
        },
        [CLEAR_PREDICTION_PRISE]: state => {
            return produce(state, draft => {
                draft.prise = initialState.prise;
            });
        },
    },
    initialState
);
