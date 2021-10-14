import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { localWorker } from 'utils';
import { LS_KEY } from 'utils/constants';
import { styled } from '@mui/material/styles';

const CartList = ({ setPaymentMap }) => {
  const items = localWorker.getItem(LS_KEY.WE_CART);
  return (
    <Wrapper>
      {!items?.length ? (
        <div>장바구니에 담긴 상품 없음</div>
      ) : (
        items.map(item => (
          <CartItem key={item.id} {...item} setPaymentMap={setPaymentMap} />
        ))
      )}
    </Wrapper>
  );
};
CartList.prototype = {
  setPaymentMap: PropTypes.func,
};
const Wrapper = styled('div')(({ theme }) => ({
  // width: '70%',
}));

export default CartList;
