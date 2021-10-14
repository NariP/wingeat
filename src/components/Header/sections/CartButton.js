import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from 'routes';
import { Badge } from '@mui/material';
import { getAmount } from 'modules/slices/Cart';
import { useSelector } from 'react-redux';

const CartButton = ({ children }) => {
  const cartItemAmount = useSelector(getAmount);
  return (
    <Badge
      badgeContent={cartItemAmount}
      color="error"
      showZero
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Link to={PATH.CART}>{children}</Link>
    </Badge>
  );
};

export default CartButton;
