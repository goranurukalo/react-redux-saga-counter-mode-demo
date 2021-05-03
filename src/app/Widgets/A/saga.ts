import { put, takeLatest, delay } from 'redux-saga/effects';
import { increment, requestIncrement } from './slice';

export function* handleIncrementWithDelay(action) {
  yield delay(1000);
  yield put(increment(action.payload));
}

export function* saga() {
  yield takeLatest(requestIncrement.type, handleIncrementWithDelay);
}
