import { createAction, handleActions } from 'redux-actions';
// import produce from 'immer';
// import { takeLatest } from 'redux-saga/effects';
import { createRequestActionTypes } from 'lib/createRequestActionTypes';

export const [GET_MEMBER_LIST_REQUEST, GET_MEMBER_LIST_SUCCESS, GET_MEMBER_LIST_FAILURE] = createRequestActionTypes(
    'auth/LIST_MEMBER'
);

export const getMemberListAction = createAction(GET_MEMBER_LIST_REQUEST, state => state);

// function* getMemberListSaga({ state }) {
//     // 회원 목록 로직.
//     console.debug(state);
// }

export function* memberSaga() {
    // yield takeLatest(GET_MEMBER_LIST_REQUEST, getMemberListSaga);
}

const initialState = {
    members: {
        status: 'idle',
        list: [],
    },
};

export default handleActions({}, initialState);
