import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as orderAPI from '../lib/api/order';
import fileDownload from 'js-file-download';

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

const PUT_ORDER_INFO = 'order/PUT_ORDER_INFO';

const GET_ORDER_ID = 'order/GET_ORDER_ID';

// 프린트를 위한 주문번호 보내기
const PRINT_ORDER_NUMBER_LIST = 'print/PRINT_ORDER_NUMBER_LIST';

// 전체 엑셀 다운로드
const EXCEL_ORDER_ALL = 'excel/EXCEL_ORDER_ALL';

export const getOrderListAction = createAction(GET_ORDER_LIST_REQUEST);
export const getOrderIdAction = createAction(GET_ORDER_ID, id => id);
export const getOrderInfoAction = createAction(GET_ORDER_INFO_REQUEST, id => id);
export const putOrderInfoAction = createAction(PUT_ORDER_INFO, ({ updateData, callBack }) => ({
    updateData,
    callBack,
}));
export const orderStatusChangeAction = createAction(ORDER_STATUS_CHANGE_REQUEST, ({ id, data, callBack }) => ({
    id,
    data,
    callBack,
}));
export const printOrderNumberListAction = createAction(PRINT_ORDER_NUMBER_LIST, selectedOrders => selectedOrders);

export const excelOrderAllDownloadAction = createAction(EXCEL_ORDER_ALL);

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
    try {
        yield call(orderAPI.put, updateData);
        if (callBack instanceof Function) {
            callBack({
                result: true,
            });
        }
        alert('수정 되었습니다.');
    } catch (e) {
        alert('처리중 오류가 발생했습니다. 관리자에게 문의하세요.\n' + e);
    }
}

function* orderStatusChangeSaga({ payload: { id, data, callBack } }) {
    try {
        const response = yield call(orderAPI.orderStatusChange, { id, data });
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

function* excelOrderAllDownloadSaga() {
    try {
        const response = yield call(orderAPI.orderExcelAllDownload);
        fileDownload(response.data, 'Order.xlsx');
    } catch (e) {
        alert('오류가 발생했습니다. 관리자에게 문의하세요.' + e);
    }
}

export function* orderSaga() {
    yield takeLatest(GET_ORDER_LIST_REQUEST, getOrderListSaga);
    yield takeLatest(GET_ORDER_INFO_REQUEST, getOrderInfoSaga);
    yield takeLatest(PUT_ORDER_INFO, putOrderInfoSaga);
    yield takeLatest(ORDER_STATUS_CHANGE_REQUEST, orderStatusChangeSaga);
    yield takeLatest(EXCEL_ORDER_ALL, excelOrderAllDownloadSaga);
}

const initialState = {
    orders: {
        status: 'idle',
        list: [],
    },
    print: {
        seletedOrders: [],
    },
    orderInfo: null,
    id: null,
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
        [ORDER_STATUS_CHANGE_SUCCESS]: (state, { payload }) => {
            return produce(state, draft => {
                draft.id = initialState.id;
            });
        },
        [GET_ORDER_ID]: (state, { payload }) => {
            return produce(state, draft => {
                draft.id = payload;
            });
        },
        [PRINT_ORDER_NUMBER_LIST]: (state, { payload }) => {
            return produce(state, draft => {
                draft.print.seletedOrders = payload.selectedOrders;
            });
        },
    },
    initialState
);
