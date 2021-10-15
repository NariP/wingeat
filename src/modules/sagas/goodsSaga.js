import { call, put, takeLatest } from 'redux-saga/effects';
import axiosInstance from 'api/apiController';

import {
  goodsRequestFailure,
  goodsRequestSuccess,
  goodsRequest,
} from '../slices/Goods';

const goodsApi = pageNum => {
  return axiosInstance.get(`/items?page=${pageNum}`);
};

// execute Saga function
const request = function* (action) {
  try {
    const res = yield call(goodsApi, action.payload);
    yield put(goodsRequestSuccess(res));
  } catch (error) {
    yield put(goodsRequestFailure(error));
  }
};

// Watch 함수
export function* watchGoodsSaga() {
  yield takeLatest(goodsRequest, request);
}
