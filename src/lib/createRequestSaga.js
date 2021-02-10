import { call, put } from 'redux-saga/effects';
import { Read } from './api/FAQ';

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action) {
    try {
      const response = yield call(request, action.payload);
      console.log(response);
      yield put({
        type: SUCCESS,
        payload: response.data,
        status: response.status,
      });
    } catch (e) {
      console.debug(e);
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
  };
}
