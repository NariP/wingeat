import { createSlice } from '@reduxjs/toolkit';
import {
  localWorker,
  setLocalCartList,
  deleteLocalCartItem,
  changeLocalCartItemAmount,
  toggleLocalCartItemChecked,
} from 'utils';
import { LS_KEY } from 'utils/constants';

const name = 'cart';
const initialState = {
  amount: localWorker.getItem(LS_KEY.WE_CART)?.length || 0,
  items: localWorker.getItem(LS_KEY.WE_CART),
};
export const cartSlice = createSlice({
  name,
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const { id, itemName, price, image } = action.payload;
      setLocalCartList({ id: Number(id), itemName, price, image });
      const localCart = localWorker.getItem(LS_KEY.WE_CART);
      state.items = localCart;
      state.amount = localCart?.length || 0;
    },
    deleteCartItem: (state, action) => {
      deleteLocalCartItem(action.payload);
      const localCart = localWorker.getItem(LS_KEY.WE_CART);
      state.items = localCart;
      state.amount = localCart?.length || 0;
    },
    changeItemAmount: (state, action) => {
      const { id, newAmount } = action.payload;
      changeLocalCartItemAmount(id, newAmount);
      state.items = localWorker.getItem(LS_KEY.WE_CART);
    },
    toggleChecked: (state, action) => {
      toggleLocalCartItemChecked(action.payload);
      state.items = localWorker.getItem(LS_KEY.WE_CART);
    },
  },
});
export const { addCartItem, deleteCartItem, changeItemAmount, toggleChecked } =
  cartSlice.actions;
export const getAmount = state => state.cart.amount;
export const getCartItems = state => state.cart.items;
