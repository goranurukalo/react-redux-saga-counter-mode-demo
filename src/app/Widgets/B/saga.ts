import { put, delay, takeEvery } from 'redux-saga/effects';
import { multiply, requestMultiply } from './slice';

export function* handleMultiplyWithDelay(action) {
  yield delay(1000);
  yield put(multiply(action.payload));
}

export function* saga() {
  yield takeEvery(requestMultiply.type, handleMultiplyWithDelay);
}
