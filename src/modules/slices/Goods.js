import { createSlice } from '@reduxjs/toolkit';

const name = 'goods';
const initialState = {
  info: [],
  isLoading: false,
  error: null,
};

export const goodsSlice = createSlice({
  name,
  initialState,
  reducers: {
    goodsRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    goodsRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.info = state.info.concat(...action.payload.data);
    },
    goodsRequestFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { goodsRequest, goodsRequestSuccess, goodsRequestFailure } =
  goodsSlice.actions;
export const getGoods = state => state.goods.info;
export const getGoodsRequestState = state => state.goods.isLoading;
