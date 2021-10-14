import { localWorker } from 'utils/index';
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
    localWorker.setItem(KEY, [{ ...data, amount: 1, checked: true }]);
    return;
  }

  if (!findLocalItemById(data.id)) {
    localWorker.setItem(KEY, [
      ...original,
      { ...data, amount: 1, checked: true },
    ]);
    return;
  }
  const newData = original.map(ele => {
    if (ele.id !== data.id) return ele;
    return { ...ele, amount: ele.amount + 1, checked: true };
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

export const toggleLocalCartItemChecked = id => {
  const original = localWorker.getItem(KEY);
  if (isEmptyCart(original)) return;

  const newData = original.map(ele => {
    if (ele.id !== id) return ele;
    return { ...ele, checked: !ele.checked };
  });
  localWorker.setItem(KEY, [...newData]);
};

export const getIsLocalCartItemChecked = id => {
  const original = localWorker.getItem(KEY);
  if (isEmptyCart(original)) return true;

  const targetItem = original.filter(ele => ele.id === id);
  return targetItem[0].checked;
};
