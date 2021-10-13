import { all, fork } from 'redux-saga/effects';
import { watchGoodsSaga } from './goodsSaga';

export default function* rootSaga() {
  yield all([fork(watchGoodsSaga)]);
}
