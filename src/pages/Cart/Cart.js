import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { CartList, PaymentAmount } from './sections';

const Cart = () => {
  const [paymentMap, setPaymentMap] = useState({});
  return (
    <Container maxWidth="desktop">
      <Typography
        variant="pageTitle"
        component="div"
        color="text.primary"
        sx={{ textAlign: 'center', padding: '2em 0' }}
      >
        장바구니
      </Typography>
      <Grid
        container
        columns={{ xs: 12, mobile: 6, desktop: 6 }}
        justifyContent="space-around"
      >
        <CartList setPaymentMap={setPaymentMap} />
        <PaymentAmount paymentMap={paymentMap} />
      </Grid>
    </Container>
  );
};
export default Cart;
