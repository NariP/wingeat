import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { getCartItems } from 'modules/slices/Cart';

const CartList = ({ setPaymentMap }) => {
  const cartItems = useSelector(getCartItems);
  return (
    <>
      {!cartItems?.length ? (
        <div>장바구니에 담긴 상품 없음</div>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} {...item} setPaymentMap={setPaymentMap} />
        ))
      )}
    </>
  );
};
CartList.prototype = {
  setPaymentMap: PropTypes.func,
};

export default CartList;
