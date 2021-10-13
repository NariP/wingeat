import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from 'routes';
import { Badge } from '@mui/material';
import { localWorker } from 'utils';
import { LS_KEY } from 'utils/constants';

const CartButton = ({ children }) => {
  // TODO: 관련 작업 있을 때마다 변경되게끔 수정하기
  const cartItemAmount = localWorker.getItem(LS_KEY.WE_CART)?.length || 0;
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
