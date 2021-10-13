import { localWorker } from 'utils';
import { LS_KEY } from 'utils/constants';

const KEY = LS_KEY.WE_CART;
const isEmptyCart = cartList => !cartList?.length;

export const findLocalItemById = id => {
  const original = localWorker.getItem(KEY);
  if (isEmptyCart(original)) return false;
  const count = original.filter(ele => ele.id === id).length;
  return Boolean(count);
};
export const setLocalCartList = data => {
  const original = localWorker.getItem(KEY);
  if (isEmptyCart(original)) {
    localWorker.setItem(KEY, [{ ...data, amount: 1 }]);
    return;
  }

  if (!findLocalItemById(data.id)) {
    console.log('일치하는 아이디 없음');
    console.log([...original, { ...data, amount: 1 }]);
    localWorker.setItem(KEY, [...original, { ...data, amount: 1 }]);
    return;
  }
  console.log('e');
  const newData = original.map(ele => {
    if (ele.id !== data.id) return ele;
    return { ...ele, amount: ele.amount + 1 };
  });

  localWorker.setItem(KEY, [...newData]);
};

export const changeLocalCartItemAmount = (id, amount) => {
  const original = localWorker.getItem(KEY);
  if (isEmptyCart(original)) return;

  const newData = original.map(ele => {
    if (ele.id !== id) return ele;
    return { ...ele, amount };
  });
  localWorker.setItem(KEY, [...newData]);
};

export const deleteLocalCartItem = id => {
  const original = localWorker.getItem(KEY);
  if (isEmptyCart(original)) return;

  const newData = original.filter(ele => ele.id !== id);
  localWorker.setItem(KEY, [...newData]);
};
