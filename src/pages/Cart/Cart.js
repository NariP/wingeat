import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { CartList, PaymentAmount } from './sections';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../modules/slices/Cart';

const Cart = () => {
  const cartItems = useSelector(getCartItems);

  return (
    <Container maxWidth="desktop" sx={{ minHeight: '100vh' }}>
      <Typography
        variant="pageTitle"
        component="div"
        color="text.primary"
        sx={{ textAlign: 'center', padding: '2em 0' }}
      >
        장바구니
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} mobile={8}>
          <CartList cartItems={cartItems} />
        </Grid>
        <Grid item xs={12} mobile={4}>
          <PaymentAmount cartItems={cartItems} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Cart;
