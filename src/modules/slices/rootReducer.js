import { combineReducers } from 'redux';
import { cartSlice } from './Cart';
import { goodsSlice } from './Goods';

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  goods: goodsSlice.reducer,
});
export default rootReducer;
