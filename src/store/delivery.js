import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';
import produce from 'immer';
import * as deliveryAPI from '../lib/api/delivery';
import { call, put, takeLatest } from 'redux-saga/effects';

const [UPLOAD_CHARGE, UPLOAD_CHARGE_SUCCESS, UPLOAD_CHARGE_FAILURE] = createRequestActionTypes(
    'delivery/UPLOAD_CHARGE'
);

export const uploadDeliveryAction = createAction(UPLOAD_CHARGE, ({ data }) => ({ data }));

function* uploadDeliverySaga({ payload: data }) {
    try {
        const { status } = yield call(deliveryAPI.Create, data);
        if (status === 200) {
            yield put({ type: UPLOAD_CHARGE_SUCCESS });
        } else {
            yield put({ type: UPLOAD_CHARGE_FAILURE });
        }
    } catch (e) {
        console.log('통신중 에러가 발생했습니다.', e);
    }
}
export function* deliverySaga() {
    yield takeLatest(UPLOAD_CHARGE, uploadDeliverySaga);
}

const initialState = {
    chargeUpload: {
        status: 'idle',
        error: '',
    },
};

export default handleActions(
    {
        [UPLOAD_CHARGE]: state => {
            return produce(state, draft => {
                draft.chargeUpload.status = 'loading';
            });
        },
        [UPLOAD_CHARGE_SUCCESS]: state => {
            return produce(state, draft => {
                draft.chargeUpload.status = 'success';
            });
        },
        [UPLOAD_CHARGE_FAILURE]: (state, { payload }) => {
            return produce(state, draft => {
                draft.chargeUpload.status = 'fail';
                draft.chargeUpload.error = payload;
            });
        },
    },
    initialState
);
