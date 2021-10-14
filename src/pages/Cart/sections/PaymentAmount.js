import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { fCurrency } from 'utils';
import PropTypes from 'prop-types';

const PaymentAmount = ({ paymentMap }) => {
  const totalPayment = Object.values(paymentMap).reduce(
    (acc, { checked, totalPrice }) => {
      return checked ? acc + totalPrice : acc;
    },
    0,
  );
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
  paymentMap: PropTypes.object,
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
