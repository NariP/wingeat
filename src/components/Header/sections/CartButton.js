import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from 'routes';
import { Badge } from '@mui/material';

const CartButton = ({ children }) => {
  return (
    <Badge
      badgeContent={0}
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
