import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { fCurrency } from 'utils';

const PaymentAmount = ({ cartItems }) => {
  const totalPayment =
    cartItems?.reduce((acc, { checked, amount, price }) => {
      return checked ? acc + amount * price : acc;
    }, 0) || 0;

  return (
    <Wrapper>
      <PaymentWrapper>
        <div>결제 예정 금액</div>
        <RealPayment>{fCurrency(totalPayment)}원</RealPayment>
      </PaymentWrapper>
      <Button variant="contained" sx={{ marginTop: '1rem', width: '100%' }}>
        주문하기
      </Button>
    </Wrapper>
  );
};
PaymentAmount.prototype = {
  cartItems: PropTypes.array,
};
const Wrapper = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
}));
const PaymentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.brightGrey,
  borderRadius: 4,
  padding: '1rem',
}));
const RealPayment = styled('div')(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: 'bold',
}));
export default PaymentAmount;
