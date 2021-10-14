import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const CartList = ({ cartItems }) => {
  return (
    <>
      {!cartItems?.length ? (
        <div>장바구니에 담긴 상품 없음</div>
      ) : (
        cartItems.map(item => <CartItem key={item.id} {...item} />)
      )}
    </>
  );
};
CartList.prototype = {
  cartItems: PropTypes.array,
};

export default CartList;
