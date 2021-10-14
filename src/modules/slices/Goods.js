import { createSlice } from '@reduxjs/toolkit';

const name = 'goods';
const initialState = {
  info: [],
  isLoading: false,
  error: null,
  renderFinish: false,
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
      const { res, page } = action.payload;
      state.isLoading = false;
      // state.info = state.info.concat(...res.data);
      state.info.push(...res.data);
      state.renderFinish = page === 6;
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
export const getIsFinished = state => state.goods.renderFinish;
